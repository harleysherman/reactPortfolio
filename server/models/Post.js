/* eslint-disable no-undef */
const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  titlePost: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLength: 280,
  },
  body: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (date) {
      console.log(date);
      return `${new Date(date).getDate()}/${
        new Date(date).getMonth() + 1
      }/${new Date(date).getFullYear()}`;
    },
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  url: {
    type: String,
    trim: true,
  }
});

const Post = model("Post", postSchema);

module.exports = Post;
