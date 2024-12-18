require("dotenv").config();
const multer = require("multer");
const {User , Team } = require("../models/User");

const storage = multer.memoryStorage();
const upload = multer({ storage });

exports.register = async (req, res) => {
    try {
        const users = Object.keys(req.body)
            .filter((key) => key.startsWith("user"))
            .map((key) => ({
                ...JSON.parse(req.body[key]),
                image: req.files.find((file) => file.fieldname === `${key}[image]`).buffer.toString("base64"),
            }));

        if (!users || users.length === 0) {
            return res.status(400).json({
                success: false,
                message: "User data is required",
            });
        }

        const userInstances = [];
        for (const user of users) {
            const { name, email, college, image } = user;

            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: `User with email ${email} is already registered`,
                });
            }

            // Add user instance to array
            userInstances.push({
                name,
                email,
                college,
                image,
            });
        }

        // Determine if solo or team
        const isSolo = users.length === 1;

        // Save the team (or solo user)
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

exports.getUser = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "An issue occurred while fetching user data.",
        });
    }
};


exports.uploadMiddleware = upload.fields([
    { name: "user1[image]" },
    { name: "user2[image]" },
]);
