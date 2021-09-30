import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  query thoughts($username: String) {
    thoughts(username: $username) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_THOUGHT = gql`
  query thought($id: ID!) {
    thought(_id: $id) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      playstation
      xbox
      pc
      friends {
        _id
        username
      }
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
      }
      thoughtsfortnite {
        _id
        thoughtText
        createdAt
        reactionCount
      }
      thoughtsapex {
        _id
        thoughtText
        createdAt
        reactionCount
      }
      thoughtspubg {
        _id
        thoughtText
        createdAt
        reactionCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      xbox
      playstation
      pc
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      xbox
      playstation
      pc
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_GAME = gql`
query getGame($gameUrl: String!) {
  game(gameUrl: $gameUrl){
    _id
    gameUrl
    gameName
    description
    image
    followerCount
    followers {
      _id
      username
    }
    thoughts{
      _id
      thoughtText
      username
      createdAt
    }
  }
}
`;

export const QUERY_GAMETHOUGHTS = gql`
query getGameThoughts($gameUrl: String!){
  game(gameUrl: $gameUrl) {
    thoughts{
      thoughtText
      username
      createdAt
    }
  }
}
`;