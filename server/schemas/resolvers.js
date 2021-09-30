const { AuthenticationError } = require('apollo-server-express');

const { User, Thought, Minecraft, ThoughtFortnite, ApexThoughts, ThoughtPubg, ThoughtMine, Game } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('thoughts')
          .populate('friends')
          .populate('thoughtsfortnite')
          .populate('thoughtsapex')
          .populate('thoughtspubg')
          .populate('thoughtsmine');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('thoughts')
        .populate('friends')
        .populate('thoughtsfortnite')
        .populate('thoughtsapex')
        .populate('thoughtspubg')
        .populate('thoughtsmine')
        .populate('games');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts')
        .populate('games');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },
    // ========================= game logic ==================================
    // get all games
    games: async () => {
      return Game.find()
        .select('-__v')
        .populate('followers')
        .populate('thoughts');
    },
    // get single game
    game: async (parent, { gameUrl }) => {
      return Game.findOne({ gameUrl })
        .select('-__v')
        .populate('followers')
        .populate('thoughts');
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addThought: async (parent, args, context) => {
      if (context.user) {
        const thought = await Thought.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { thoughts: thought._id } },
          { new: true }
        );

        return thought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReaction: async (parent, { thoughtId, reactionBody }, context) => {
      if (context.user) {
        const updatedThought = await Thought.findOneAndUpdate(
          { _id: thoughtId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    // addFollower: async (parent, { followerId }, context) => {
    //   if (context.user) {
    //     const updatedMinecraft = await Minecraft.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { followers: followerId } },
    //       { new: true }
    //     ).populate('followers');

    //     return updatedMinecraft;
    //   }

    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // ========================= game logic ==================================
    addGame: async (parent, gameName) => {
      const game = await Game.create(gameName);

      return game;
    },
    addFollow: async (parent, { gameId }, context) => {
      if (context.user) {
        const updatedGame = await Game.findOneAndUpdate(
          { _id: gameId },
          { $push: { followers: { _id: context.user._id } } },
          { new: true, runValidators: true }
        ).populate('followers')

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { games: { _id: gameId } } },
          { new: true, runValidators: true }
        ).populate('games')

        return updatedGame;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addGameThought: async (parent, { gameId, thoughtText }, context) => {
      if (context.user) {
        const gameThought = await Thought.create({ thoughtText, username: context.user.username })

        await Game.findByIdAndUpdate(
          { _id: gameId },
          { $push: { thoughts: gameThought._id } },
          { new: true }
        ).populate('thoughts');

        return gameThought;

      }
    },
    deleteFollower: async (parent, { gameId, followerId }, context) => {
      if (context.user) {

        const updatedGame = await Game.findByIdAndUpdate(
          { _id: gameId },
          { $pull: { followers: followerId } },
          { new: true }
        ).populate('thoughts');

        return updatedGame;

      }
    },
    deleteGame: async (parent, { gameId }) => {

      const updatedGame = await Game.deleteOne(
        { _id: gameId },
        { new: true }
      );

      return updatedGame;

    }
  }
};

module.exports = resolvers;
