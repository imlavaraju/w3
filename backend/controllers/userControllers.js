const User = require("../models/User");

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, socialHandle, imagesUrls } = req.body;
    const user = new User({ name, socialHandle, imagesUrls });
    await user.save();
    console.log(user);
    res.status(201).send("User data saved successfully");
  } catch (error) {
    res.status(500).send("Error saving user data");
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Error fetching user data");
  }
};

module.exports = { createUser, getUsers };
