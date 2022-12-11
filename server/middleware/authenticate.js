const jwt = require("jsonwebtoken")
const User = require("../models/SignupSchema")


const Authenticate = async (req, res, next) => {

    try {

        const token = req.cookies.jwt
        const verifytoken = jwt.verify(token,process.env.SECRET_KEY)
        const rootUser = await User.findOne({_id:verifytoken._id,"tokens.token":token})
        
        if(!rootUser){
            throw new Error("User not found")
        }

        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id
        console.log(rootUser);
        next()

    } catch (err) {
        res.status(401).send("No token provide")
        console.log(err);
    }

}

module.exports = Authenticate