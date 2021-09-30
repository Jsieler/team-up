import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $xbox: String!, $playstation: String!, $pc: String!) {
    addUser(username: $username, email: $email, password: $password, xbox: $xbox, playstation: $playstation, pc: $pc) {
      token
      user {
        _id
        username
        xbox
        playstation
        pc
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
    }
  }
`;

export const ADD_REACTION = gql`
  mutation addReaction($thoughtId: ID!, $reactionBody: String!) {
    addReaction(thoughtId: $thoughtId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(id: $id) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;

export const ADD_FOLLOWER = gql`
  mutation addFollower($id: ID!) {
    addFollower(followerId: $id) {
      _id
      gameName
      followerCount
      followers {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHTFORTNITE = gql`
  mutation addThoughtFortnite($thoughtText: String!) {
    addThoughtFortnite(thoughtText: $thoughtText) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
    }
  }
`;

export const ADD_REACTIONFORTNITE = gql`
  mutation addReactionFornite($thoughtfortniteId: ID!, $reactionBody: String!) {
    addReactionFortnite(thoughtfortniteId: $thoughtfortniteId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_THOUGHTAPEX = gql`
  mutation addThoughtApex($thoughtText: String!) {
    addThoughtApex(thoughtText: $thoughtText) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
    }
  }
`;

export const ADD_REACTIONAPEX = gql`
  mutation addReactionApex($thoughtapexId: ID!, $reactionBody: String!) {
    addReactionApex(thoughtapexId: $thoughtapexId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_THOUGHTPUBG = gql`
  mutation addThoughtPubg($thoughtText: String!) {
    addThoughtPubg(thoughtText: $thoughtText) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
    }
  }
`;

export const ADD_REACTIONPUBG = gql`
  mutation addReactionPubg($thoughtpubgId: ID!, $reactionBody: String!) {
    addReactionPubg(thoughtpubgId: $thoughtpubgId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_THOUGHTMINE = gql`
  mutation addThoughtMine($thoughtText: String!) {
    addThoughtMine(thoughtText: $thoughtText) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
    }
  }
`;

export const ADD_REACTIONMINE = gql`
  mutation addReactionMine($thoughtmineId: ID!, $reactionBody: String!) {
    addReactionMine(thoughtmineId: $thoughtmineId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_FOLLOW = gql`
mutation addFollow($gameId: ID!) {
  addFollow(gameId: $gameId) {
    _id
    gameName
    followers {
      username
    }
  }
}
`;
