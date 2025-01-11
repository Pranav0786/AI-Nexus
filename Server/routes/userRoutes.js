const express = require("express");
const {Team} = require("../models/User")
const { register, uploadMiddleware , getUserDetails  } = require("../controllers/Auth");

const router = express.Router();

router.post("/register", uploadMiddleware, register);
router.get("/teams/:teamId", getUserDetails);
router.get("/teams", async (req, res) => {
    try {
      const teams = await Team.find().exec(); 
      if (teams.length === 0) {
        return res.status(404).json({ message: 'No teams found' });
      }
      res.status(200).json(teams); 
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });

module.exports = router;
