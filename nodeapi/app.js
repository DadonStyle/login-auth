const express = require('express');
const morgan = require('morgan')
const dotenv = require('dotenv');
const config = dotenv.config();
const mongoose = require('mongoose')
const routes = require("./routes/routes") 
const cors = require('cors');

const app = express()
//db
mongoose.connect(process.env.MONGO_URI).then(() => {console.log ("db connected!")})
mongoose.connection.on("error", (err) =>{
    console.log(`DB connection err: ${err.message}`)
})


// const myOwnMiddleware = (req,res,next) => {
//     // console.log ("custom middleware applied")
//     next() // very important to tell the node to move on or else the thread will be stuck here
// }

//middleware
app.use(morgan("dev"))
app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.use("/", routes); 

const port = process.env.PORT || 8080
app.listen(port, () => {console.log(`the port is ${port}`)})