const { AuthenticationError } = require('apollo-server-express');
const { User, Thought, Minecraft, ThoughtFortnite, ThoughtApex, ThoughtPubg, ThoughtMine } = require('../models');
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
        .populate('thoughtsmine');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts')
        .populate('thoughtsfortnite')
        .populate('thoughtsapex')
        .populate('thoughtspubg')
        .populate('thoughtsmine');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },
    thoughtsfortnite: async (parent, { username }) => {
      const params = username ? { username } : {};
      return ThoughtFortnite.find(params).sort({ createdAt: -1 });
    },
    thoughtfortnite: async (parent, { _id }) => {
      return ThoughtFortnite.findOne({ _id });
    },
    thoughtsapex: async (parent, { username }) => {
      const params = username ? { username } : {};
      return ThoughtApex.find(params).sort({ createdAt: -1 });
    },
    thoughtapex: async (parent, { _id }) => {
      return ThoughtApex.findOne({ _id });
    },
    thoughtspubg: async (parent, { username }) => {
      const params = username ? { username } : {};
      return ThoughtPubg.find(params).sort({ createdAt: -1 });
    },
    thoughtpubg: async (parent, { _id }) => {
      return ThoughtPubg.findOne({ _id });
    },
    thoughtsmine: async (parent, { username }) => {
      const params = username ? { username } : {};
      return ThoughtMine.find(params).sort({ createdAt: -1 });
    },
    thoughtmine: async (parent, { _id }) => {
      return ThoughtMine.findOne({ _id });
    },
    minecraft: async (parent, { gameName }) => {
      return Minecraft.findOne({ gameName })
        .populate('followers');
    },
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
    addThoughtFortnite: async (parent, args, context) => {
      if (context.user) {
        const thoughtfortnite = await ThoughtFortnite.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { thoughtsfortnite: thoughtfortnite._id } },
          { new: true }
        );
 
        return thoughtfortnite;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReactionFortnite: async (parent, { thoughtfortniteId, reactionBody }, context) => {
      if (context.user) {
        const updatedThoughtFortnite = await ThoughtFortnite.findOneAndUpdate(
          { _id: thoughtfortniteId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedThoughtFortnite;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addThoughtApex: async (parent, args, context) => {
      if (context.user) {
        const thoughtapex = await ThoughtApex.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { thoughtsapex: thoughtapex._id } },
          { new: true }
        );
 
        return thoughtapex;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReactionApex: async (parent, { thoughtapexId, reactionBody }, context) => {
      if (context.user) {
        const updatedThoughtApex = await ThoughtApex.findOneAndUpdate(
          { _id: thoughtapexId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedThoughtApex;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addThoughtPubg: async (parent, args, context) => {
      if (context.user) {
        const thoughtpubg = await ThoughtPubg.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { thoughtspubg: thoughtpubg._id } },
          { new: true }
        );
 
        return thoughtpubg;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReactionPubg: async (parent, { thoughtpubgId, reactionBody }, context) => {
      if (context.user) {
        const updatedThoughtPubg = await ThoughtPubg.findOneAndUpdate(
          { _id: thoughtpubgId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedThoughtPubg;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addThoughtMine: async (parent, args, context) => {
      if (context.user) {
        const thoughtmine = await ThoughtMine.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { thoughtsmine: thoughtmine._id } },
          { new: true }
        );
 
        return thoughtmine;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReactionMine: async (parent, { thoughtmineId, reactionBody }, context) => {
      if (context.user) {
        const updatedThoughtMine = await ThoughtMine.findOneAndUpdate(
          { _id: thoughtmineId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedThoughtMine;
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
    addFollower: async (parent, { followerId }, context) => {
      if (context.user) {
        const updatedMinecraft = await Minecraft.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { followers: followerId } },
          { new: true }
        ).populate('followers');

        return updatedMinecraft;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
