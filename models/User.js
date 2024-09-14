const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

// Schema to create User model
const userSchema = new Schema(
  {
    // changed first name to username.  Added unique and required
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    // changed lastname to email.  Added unique and required, and match.
    email: {
      type: String,
      required: true,
      unique: true,
      // comment out match if it doesnt work
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    thoughts: {
      type: String,
      // neet to do arry of id to thoughts model
    },
    // I think this is right for friends.
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  // virtual called friendcount, retrives length of friends array. schema settings?
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
