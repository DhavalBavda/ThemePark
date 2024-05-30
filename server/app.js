require('dotenv').config();
port=process.env.PORT || 35000
const express =require("express");
const app=express();
const mongoose = require('mongoose');
const path = require('path')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

//============================================================
app.use(bodyParser.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")));


//=================connection to the db===============
mongoose.connect(process.env.MONGODB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("congo! connection is done!!!")
}).catch((error)=>{
    console.log("not connected",error);
});

const AuthRouter= require("./routes/AuthRouter");
app.use("/",AuthRouter);


//==================server=========================
app.listen(port,()=>{
    try{
        console.log(`connection is working on '${port}'`)
    } catch(error){
        console.log(error);
    }
})


