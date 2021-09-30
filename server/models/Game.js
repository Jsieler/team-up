const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
    {
        gameName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        gameUrl: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        followers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
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
// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }

//     next();
// });

// compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };

gameSchema.virtual('followerCount').get(function () {
    return this.followers.length;
});

const Game = model('Game', gameSchema);

module.exports = Game;