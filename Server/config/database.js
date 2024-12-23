require("dotenv").config();
const mongoose = require("mongoose") ;


const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {})
    .then(() => console.log("DB connected Successfully"))
    .catch((err) => {
        console.log("DB connection ISSUES") ;
        console.error(err.message) ;
        process.exit(1) ;
    });
};

module.exports = dbConnect ;