const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    thoughtsfortnite: [ThoughtFortnite]
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
    reactions: [Reaction]
  }

  type GameList {
    listName: String
    games: [Game]
  }

  type Game {
   gameName: String
   followers: [User]
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
    minecraft: Minecraft
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, xbox: String!, playstation: String!, pc: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
    addFollower(followerId: ID!): Minecraft
    addThoughtFortnite(thoughtText: String!): ThoughtFortnite
    addReactionFortnite(thoughtId: ID!, reactionBody: String!): ThoughtFortnite
  }
`;

module.exports = typeDefs;
