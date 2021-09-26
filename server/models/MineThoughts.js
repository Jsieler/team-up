const { Schema, model } = require('mongoose');
const reactionMineSchema = require('./MineReactions');
const dateFormat = require('../utils/dateFormat');

const thoughtMineSchema = new Schema(
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
    reactions: [reactionMineSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

thoughtMineSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const ThoughtMine = model('ThoughtMine', thoughtMineSchema);

module.exports = ThoughtMine;
