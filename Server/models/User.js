const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    image: {
        type: String, // Store the Base64-encoded image string
        required: true,
    },
});

const teamSchema = new mongoose.Schema({
    users: {
        type: [userSchema], // Array of users
        required: true,
    },
    type: {
        type: String, // "solo" or "team"
        required: true,
    },
});

const User = mongoose.model("User", userSchema);
const Team = mongoose.model("Team", teamSchema);

module.exports = { User, Team };
