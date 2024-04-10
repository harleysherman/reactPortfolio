/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const db = require("../config/connection");
const { User, Post, Comment } = require("../models");
const userSeeds = require("./userSeeds.json");
const achievementSeeds = require("./achievementSeeds.json");
const communitySeeds = require("./communitySeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    // await cleanDB("User", "users");
    // await cleanDB("Achievement", "achievements");
    // await cleanDB("Community", "communities");
    await User.deleteMany();
    await Achievement.deleteMany();

    const users = await User.create(userSeeds);
    const posts = postSeeds.map((post) => ({
      ...post, 
      user: users[Math.floor(Math.random() * (users.length - 1))]._id
    }))

    const newPost = await Post.create(posts);

    const filteredUsers = users.map( (user) => newPosts
      .filter((post) => post.user == user._id ? true : false)
      .map((post) => post._id )
    );

    console.log(filteredUsers);

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      await User.findOneAndUpdate({_id: user._id}, { achievements: filteredUsers[i]}, { new: true })
    }
    
    // console.log("noeEmpties ---------------> ", noEmpties);

    await Community.create(communitySeeds);

    // console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});