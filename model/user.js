const mongoose = require("mongoose");

var User = mongoose.model("user", {
    username : {
        type: String,
        unique: true,
    },
    password : String,
    firstname: String,
    lastname: String,
    warehouseid: int
})


module.exports ={
    User
}