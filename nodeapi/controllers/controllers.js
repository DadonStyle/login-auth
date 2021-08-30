require("dotenv").config()
const User = require("../models/mongooseSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginController = async (req,res) => {
    const user = await User.find({email: req.body.email});
    // console.log(user)
    if(!(user.length===1)){
        return res.status(400).send("email not found")
    }
    try{
        if(await bcrypt.compare(req.body.password, user[0].password)){
            // jwt example
            const userTokenValue = {_id: user[0]._id, email: user[0].email }
            // console.log(userTokenValue)
            const accessToken = await jwt.sign(userTokenValue, process.env.ACCESS_SECRET_TOKEN, { expiresIn: 1800 }) //1800s = half an hour
            console.log(accessToken.toString())
            res.status(200).send(accessToken)
        }else{
            res.status(400).send("wrong password!")
        }
    }catch{
        res.status(500).send()
    }
}

exports.registerController = async (req,res) => {
    const user = await User.findOne({email: req.body.email});
    console.log(user)
    if(user != null){
        if(req.body.email === user.email ){
            return res.status(400).send("email already exist")
        }
    }
    try{
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        const user = new User({email:req.body.email, password: hashPassword})
        user.save()
        
        return res.status(201).send("success")
    }catch(err){
        return res.status(500).send()
    }
};

