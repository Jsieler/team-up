const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    xbox: {
      type: String,
    },
    playstation: {
      type: String,
    },
    pc: {
      type: String,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    thoughtsfortnite: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ThoughtFortnite'
      }
    ],
    thoughtsapex: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ThoughtApex'
      }
    ],
    thoughtspubg: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ThoughtPubg'
      }
    ],
    thoughtsmine: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ThoughtMine'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    games: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Game'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
