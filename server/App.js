const dotenv = require("dotenv")
const express = require("express")
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())

dotenv.config({path:"./config.env"})
require("./conn")
app.use(express.json())
const PORT = process.env.PORT

app.use(require("./router/Auth"))



app.get("/",(req,res)=>{
    res.send("hello world from the server")
})

// app.get("/about",middleware,(req,res)=>{
//     res.send("this is about page rahul")
// })
app.listen(PORT,()=>{
    console.log(`server is listening ${PORT}`);
})