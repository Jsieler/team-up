const { Schema, model } = require('mongoose');
const reactionApexSchema = require('./ApexReactions');
const dateFormat = require('../utils/dateFormat');

const thoughtApexSchema = new Schema(
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
    reactions: [reactionApexSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

thoughtApexSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const ThoughtApex = model('ThoughtApex', thoughtApexSchema);

module.exports = ThoughtApex;
