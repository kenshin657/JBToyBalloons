const express = require("express");
const bodyparser = require("body-parser");
const session = require("express-session");
const cookieparser = require("cookie-parser");
const mongoose = require("mongoose");
const passport = require("passport");


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/JBToyBalloons", {
    useNewUrlParser : true
})

const urlencoder = bodyparser.urlencoded({
    extended: false
})

app.use(cookieparser())
app.use(express.static(__dirname + "/public"));
app.use(session({
    secret : "secret name",
    resave : true,
    saveUninitialized : true,
    name : "cookie monster",
    cookie : {
        maxAge : 1000*60*60*24*365*2
    }
}))

app.get(["/","/home"], function(req,res){
    console.log("GET HOME")
    res.render("homepage.hbs")
})


app.get("/Services", function(req,res){
    console.log("GET SERVICES")
    res.render("services.hbs")
})

app.get("/aboutUs", function(req,res){
    console.log("GET ABOUT")
    res.render("about.hbs")
})

app.get("/contactUs", function(req,res){
    console.log("GET CONTACT")
    res.render("contact.hbs")
})

app.get("/register", function(req,res){
    console.log("GET REGISTER")
    res.render("register.hbs")
})

app.post("/register", urlencoder, function(req,res){
   //REGISTER POST
})

app.get("/login", function(req,res){
    console.log("GET LOGINPAGE")
    res.render("login.hbs")
})

app.post("/login", urlencoder, function(req,res){
   //LOGIN POST
})



//SERVERRRR LAAAAA
app.get("/admin", function(req,res){
   
})

app.post("/add", urlencoder, function(req,res){

})

app.post("/update", urlencoder, function(req,res){
    
})

app.post("/delete", urlencoder, function(req,res){
    
})


app.listen(3001, function(){
    console.log("Live at port 3001");
})