/* eslint-disable no-undef */
const { User, Post} = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("posts");
      // community?
    },
    posts: async () => {
      return await Achievement.find({}).populate("comments").populate("user");
    },
    post: async ( parent, { postId }) => {
      return await Achievement.findOne({ _id: postId }).populate("user");
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate("posts");
    },
    me: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).populate("posts");
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        console.log("User not working");
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        console.log("Password not working");
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (_, { titlePost, body }, context) => {
        const addedPost = await Post.create({
          titlePost,
          user: context.user._id,
          body,
        });
        await User.findOneAndUpdate(
          {_id: "65ef5bca1cfc09f7bd371739" },
          { $addToSet: { posts: addedPost._id } }
        );
        return addedPost;
    },
    removePost: async (_, { postId }, context) => {
      if (context.user) {
        const Post = Post.findOneAndDelete({
          _id: postId,
        });
        await User.findOneAndUpdate(
          {
            id: context.user._id,
          },
          {
            $pull: { posts: postId },
          }
        );
        return Post;
      }
      throw AuthenticationError;
    },
    updatePost: async (_, { postId, titlePost, postBody }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          { titlePost, body: postBody },
          { new: true }
        )
      } 
      throw AuthenticationError;
    }
  },
};

module.exports = resolvers;
