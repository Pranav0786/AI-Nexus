const express = require("express");
const { register, uploadMiddleware , getUser } = require("../controllers/Auth");

const router = express.Router();

router.post("/register", uploadMiddleware, register);
router.get("/user/:email", getUser);

module.exports = router;
