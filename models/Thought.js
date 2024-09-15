const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // Getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    // I think this is right for reactions?
    reactions: [reactionSchema],
  },
  {
    id: false,
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
  // Virtual to get the total count of reactions on retrieval
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
