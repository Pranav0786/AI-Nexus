const multer = require("multer");
const { User, Team } = require("../models/User");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware to handle file uploads
exports.uploadMiddleware = upload.fields([
    { name: "user1Image", maxCount: 1 },
    { name: "user2Image", maxCount: 1 },
]);

exports.register = async (req, res) => {
    try {
        const { user1, user2 } = req.body;

        if (!user1) {
            return res.status(400).json({
                success: false,
                message: "At least one user is required to register.",
            });
        }

        // Parse user data
        const users = [];

        const user1Data = JSON.parse(user1);
        const user1Image = req.files["user1Image"]?.[0];

        if (!user1Image) {
            return res.status(400).json({
                success: false,
                message: "Image for user1 is required.",
            });
        }

        users.push({
            ...user1Data,
            image: user1Image.buffer.toString("base64"),
        });

        if (user2) {
            const user2Data = JSON.parse(user2);
            const user2Image = req.files["user2Image"]?.[0];

            if (!user2Image) {
                return res.status(400).json({
                    success: false,
                    message: "Image for user2 is required.",
                });
            }

            users.push({
                ...user2Data,
                image: user2Image.buffer.toString("base64"),
            });
        }

        // Check for existing users
        for (const user of users) {
            const existingUser = await User.findOne({ email: user.email });
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: `User with email ${user.email} is already registered.`,
                });
            }
        }

        // Save users and create team
        const userInstances = await User.insertMany(users);

        const isSolo = users.length === 1;
        const team = await Team.create({
            users: userInstances,
            type: isSolo ? "solo" : "team",
        });

        return res.status(200).json({
            success: true,
            message: isSolo
                ? "You have registered as a solo participant!"
                : "You have registered as a team!",
            team,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "An issue occurred, please try again.",
        });
    }
};


exports.getUserDetails = async (req, res) => {
    try {
        const { email } = req.params;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Check if the user is part of any team
        const team = await Team.findOne({ "users.email": email });

        // Respond with user and team data (if available)
        if (team) {
            return res.status(200).json({
                success: true,
                message: "User and team data fetched successfully",
                user,
                team,
            });
        }

        // Respond with user data only if no team is found
        return res.status(200).json({
            success: true,
            message: "User data fetched successfully",
            user,
        });
    } catch (error) {
        console.error("Error fetching user details:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching user details",
        });
    }
};