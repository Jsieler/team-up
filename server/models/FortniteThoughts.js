const { Schema, model } = require('mongoose');
const reactionFortniteSchema = require('./FortniteReactions');
const dateFormat = require('../utils/dateFormat');

const thoughtFortniteSchema = new Schema(
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
    reactions: [reactionFortniteSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

thoughtFortniteSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const ThoughtFortnite = model('ThoughtFortnite', thoughtFortniteSchema);

module.exports = ThoughtFortnite;
