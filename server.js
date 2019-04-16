//引入express框架
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
//实例化app
const app =express();
//引入users.js

const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");


//db config
const db = require("./config/keys").mongoURI;

//使用body-parser中间件
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

//connect mongodb
mongoose.connect(db)
    .then(()=>{
        console.log("MongoDB connected");
    }).catch(err =>{
    console.log(err);
});
//passport初始化
app.use(passport.initialize());
require("./config/passport")(passport);

// app.get("/",(req,res) =>{
//     res.send("Hello World!");
// });

//使用routes
app.use("/api/users",users);
app.use("/api/profiles",profiles);
//给个端口号
const  port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});