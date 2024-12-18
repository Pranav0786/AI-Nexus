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
    phone: {
        type: Number,
        required: true ,
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

const counterSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    seq: { type: Number, default: 1 }, // Starting sequence
});

const User = mongoose.model("User", userSchema);
const Team = mongoose.model("Team", teamSchema);
const Counter = mongoose.model("Counter", counterSchema);

module.exports = { User, Team , Counter};
