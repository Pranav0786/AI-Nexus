const express = require("express");
const { register, uploadMiddleware , getUserDetails  } = require("../controllers/Auth");

const router = express.Router();

router.post("/register", uploadMiddleware, register);
router.get("/teams/:teamId", getUserDetails);

module.exports = router;
