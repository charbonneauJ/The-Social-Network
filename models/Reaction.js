const { Schema, Types, get } = require("mongoose");

const reactionSchema = new Schema(
  {
    // I think this is right for using mongooses ObjextID Data type, and default value?
    reactionId: {
      type: Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Getter method to format the timestamp on query?
      get: (createdAtVal) => new Date(createdAtVal).toLocaleString(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
