const mongoose = require("mongoose");

var Order = mongoose.model("order", {
    warehouseID : int,
    customerName: String,
    Orders{
        item: String,
        qty: int
    }
})


module.exports ={
    User
}