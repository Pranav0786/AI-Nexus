require("dotenv").config();
const User = require("../models/User")

exports.register = async (req,res) => {
    try{
        const { name , email } = req.body ;
        const existingUser = await User.findOne({email}) ;

        console.log("name , email => " , name , email)

        if(existingUser) {
            return res.status(400).json({
                success: false ,
                message: 'User already registerd' ,
            });
        }

        const user = await User.create({
            name , email ,
        });

        return res.status(200).json({
            success : true ,
            message: 'You have register to the event!!!',
        });

    } catch(error) {
        console.error(error);
        return res.status(500).json({
        success: false,
        message: 'Some issue is occured, please try again',
        });
    }
} ;