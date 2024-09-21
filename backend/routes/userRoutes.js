const express = require("express");
const router = express.Router();
const { createUser, getUsers } = require("../controllers/userControllers");

// POST /api/users - Create a new user
router.post("/users", createUser);

// GET /api/users - Get all users
router.get("/users", getUsers);

module.exports = router;
