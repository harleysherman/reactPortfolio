/* eslint-disable no-undef */
const typeDefs = `
type User {
    _id: ID!
    username: String
    email: String!
    password: String
    achievements: [Achievement]
    communities: [Community]
    comments: [Comment]
    profilePic: String
  }

type Post {
    _id: ID!
    titleAchievement: String!
    body: String!
    createdAt: String
    user: User
    comments: [Comment]
    url: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query{
    users: [User] 
    posts: [Post]
    user(username: String!): User
    post(postId: ID!): Post
    me: User
  }

  type Mutation{
    addUser(username: String!, email: String!, password: String!, profilePic: String): Auth
    login(email: String!, password: String!): Auth
    addPost(titlePost: String!, body: String!, url: String): Post
    removePost(postId: ID!): Post
    updatePost(postId: ID!, titlePost: String, postBody: String): Post
  }
`;

module.exports = typeDefs;

