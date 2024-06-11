const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name": String,
        "friendName": String,
        "friendNickName": String,
        "DescribeYourFriend": String
    }
)

let friendmodel=mongoose.model("friends",schema)
module.exports={friendmodel}