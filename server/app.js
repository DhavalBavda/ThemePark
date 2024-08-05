require('dotenv').config();
port=process.env.PORT || 35000
const express =require("express");
const app=express();
const mongoose = require('mongoose');
const path = require('path')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const url = require('url');

const filename = path.join(__dirname,__filename)
const fileUrl = url.pathToFileURL(filename).href;


//============================================================
app.use(bodyParser.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "/client/build")));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
//=================connection to the db===============
mongoose.connect(process.env.MONGODB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("congo! connection is done!!!")
}).catch((error)=>{
    console.log("not connected",error);
});

const AuthRouter= require("./Router/AuthRouter");
const { AdminUsers } = require('./model/AuthSchema');
app.use("/",AuthRouter);



app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await AdminUsers.findOne({ username });
    console.log("sfs")
    if (!user) return res.status(400).send('Invalid credentials');

    if (user){
        console.log("accepted")
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) return res.status(400).send('Invalid credentials');

    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    const token = jwt.sign({ username : user.Username }, process.env.JWT_SECRET);
    console.log(token)
    res.json({token});
});





//==================server=========================
app.listen(port,()=>{
    try{
        console.log(`connection is working on '${port}'`)
    } catch(error){
        console.log(error);
    }
})


