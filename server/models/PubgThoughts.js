const { Schema, model } = require('mongoose');
const reactionPubgSchema = require('./PubgReactions');
const dateFormat = require('../utils/dateFormat');

const thoughtPubgSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionPubgSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

thoughtPubgSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const ThoughtPubg = model('ThoughtPubg', thoughtPubgSchema);

module.exports = ThoughtPubg;
