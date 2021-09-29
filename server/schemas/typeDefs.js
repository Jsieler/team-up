const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    thoughtsfortnite: [ThoughtFortnite]
    thoughtsapex: [ThoughtApex]
    thoughtspubg: [ThoughtPubg]
    thoughtsmine: [ThoughtMine]
    friends: [User]
    xbox: String
    playstation: String
    pc: String
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

  type ThoughtFortnite {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [ReactionFortnite]
  }

  type ReactionFortnite {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }


  type Game {
   gameName: String
   followers: [User]
   }

  type ThoughtApex {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [ReactionApex]
  }

  type ReactionApex {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type ThoughtPubg {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [ReactionPubg]
  }

  type ReactionPubg {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
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

  type Minecraft {
    _id: ID
    gameName: String
    followers: [User]
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
    thoughtsfortnite(username: String): [ThoughtFortnite]
    thoughtfortnite(_id: ID!): ThoughtFortnite
    thoughtsapex(username: String): [ThoughtApex]
    thoughtapex(_id: ID!): ThoughtApex
    thoughtspubg(username: String): [ThoughtPubg]
    thoughtpubg(_id: ID!): ThoughtPubg
    thoughtsmine(username: String): [ThoughtMine]
    thoughtmine(_id: ID!): ThoughtMine
    minecraft: Minecraft
    games: [Game]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, xbox: String!, playstation: String!, pc: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
    addFollower(followerId: ID!): Minecraft
    addThoughtFortnite(thoughtText: String!): ThoughtFortnite
    addReactionFortnite(thoughtfortniteId: ID!, reactionBody: String!): ThoughtFortnite
    addThoughtApex(thoughtText: String!): ThoughtApex
    addReactionApex(thoughtapexId: ID!, reactionBody: String!): ThoughtApex
    addThoughtPubg(thoughtText: String!): ThoughtPubg
    addReactionPubg(thoughtpubgId: ID!, reactionBody: String!): ThoughtPubg
    addThoughtMine(thoughtText: String!): ThoughtMine
    addReactionMine(thoughtmineId: ID!, reactionBody: String!): ThoughtMine
  }
`;

module.exports = typeDefs;
