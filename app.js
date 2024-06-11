const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const friend = require("./models/friend")
const {friendmodel} = require("./models/friend")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://vivek:q3w3r7yr77i@cluster0.lzcnjke.mongodb.net/friendDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let friend = new friendmodel(input)
    friend.save()
    console.log(friend)
    res.json({"status":"success"})
})



app.get("/view",(req,res)=>{
    friendmodel.find()
    .then(
        (data)=>{
                res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8080,()=>{
    console.log("Server Running...")
})