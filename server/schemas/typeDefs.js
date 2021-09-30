const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
    xbox: String
    playstation: String
    pc: String
    games: [Game]
  }

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }


  type Game {
    _id: ID
   gameName: String
   gameUrl: String
   followerCount: Int
   followers: [User]
   thoughts: [Thought]
  }


  type ThoughtMine {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [ReactionMine]
  }

  type ReactionMine {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
    thoughtsmine(username: String): [ThoughtMine]
    thoughtmine(_id: ID!): ThoughtMine
    games: [Game]
    game(gameUrl: String!): Game
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, xbox: String!, playstation: String!, pc: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
    addGame(gameName: String!): Game
    addFollow(gameId: ID!): Game
    addGameThought(gameId: ID, thoughtText: String!): Thought
    deleteFollower(gameId: ID! followerId: ID!): Game
    deleteGame(gameId: ID!): Game
  }
`;

module.exports = typeDefs;
