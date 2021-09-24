const { Schema, model } = require('mongoose');


const minecraftSchema = new Schema(
    {
        gameName: {
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
        ]
      },
      {
        toJSON: {
          virtuals: true
        }
      }
    );

minecraftSchema.virtual('followerCount').get(function() {
return this.followers.length;
});

const Minecraft = model('Minecraft', minecraftSchema);

module.exports = Minecraft;
