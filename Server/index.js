const express = require("express")
const cors = require("cors")
require('dotenv').config() ;
const userRoutes = require("./routes/userRoutes")
const dbConnect = require("./config/database") ;
const Counter = require("./models/User")
const app = express() ;


const PORT = process.env.PORT || 4000 ;

app.use(express.json()) ;
app.use( cors( {origin:"*",} ) ) ;

dbConnect() ;

const initializeCounter = async () => {
    try {
        const existingCounter = await Counter.findOne({ name: "teamId" });
        if (!existingCounter) {
            await Counter.create({ name: "teamId", seq: 1 });
            console.log("Counter initialized with seq: 1");
        } else {
            console.log("Counter already exists.");
        }
    } catch (error) {
        console.error("Error initializing counter:", error.message);
    }
};
initializeCounter();


app.use("/api/v1" , userRoutes ) ;

app.get("/", (req, res) => {
    res.send(`<h1>Backend is Running on port no. ${PORT} and this is '/' Route.</h1>`);
});

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});
