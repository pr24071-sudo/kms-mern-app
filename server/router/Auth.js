const express = require("express")
const router = express()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const authenticate = require("../middleware/authenticate")

require("../conn")
const User = require("../models/SignupSchema")

router.get("/", (req, res) => {
    res.send("hello i am home router js")
})

//--------------- upadte the userr
router.put("/update/:id",(req,res)=>{
    User.findByIdAndUpdate(req.params.id,{
        $set : req.body
    },(error,data)=>{
        if(error){
            console.log(error);
        }else{
            res.status(200).json({ message: "user is registered" })
            console.log(data);
        }
    })
})

//--------------- Register the userr
router.post("/register", (req, res) => {
    const { username, email, mobile, password, cpassword } = req.body
    if (!username || !email || !mobile || !password || !cpassword) {
        return res.status(422).json({ error: "please fill all the data" })
    }
    User.findOne({ email: email }).then((userExit) => {
        if (userExit) {
            return res.status(422).json({ error: "User is already registered" })
        }

        const user = new User({ username, email, mobile, password, cpassword })

        user.save().then(() => {
            res.status(200).json({ message: "user is registered" })
        }).catch(() => {
            res.status(500).json({ error: "Error while registering the user" })
        })
    }).catch((err) => {
        console.log(err);
    })
})


//--------------- login userr
router.post("/login", async (req, res) => {
    let token
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "fill the credentials" })
        }

        const UserLogin = await User.findOne({ email: email })

        if (UserLogin) {

            const passmatch = await bcrypt.compare(password, UserLogin.password)

            token = await UserLogin.generateAuthToken()
    
            res.cookie("jwt",token,{
                expires : new Date(Date.now()+4500000),
                httpOnly : true
            })

            if (!passmatch) {
                res.status(400).json({ error: "Invalid credentials" })
            }
            else {
                res.status(200).json({ message: "sign in successfully" })
            }
        } else {
            res.status(400).json({ error: "Invalid credentials" })
        }

    } catch (err) {
        console.log("Error occured",err);
    }
})

router.get("/dash",authenticate,(req,res)=>{
    console.log("hello this about page");
    res.send(req.rootUser)
})

//--------------- logout the user
router.get("/logout",(req,res)=>{
    res.clearCookie("jwt",{path:"/"})
    res.status(200).send("user is logged out")
})




module.exports = router
