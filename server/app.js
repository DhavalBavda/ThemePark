require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const url = require('url');

const app = express();
const port = process.env.PORT || 35000;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use('/upload',express.static(path.join(__dirname, "Public/upload")));

// CORS configuration
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB!");
}).catch((error) => {
    console.log("MongoDB connection error:", error);
});

// Routes
const AuthRouter = require("./Router/AuthRouter");
const { AdminUsers } = require('./model/AuthSchema');
app.use("/", AuthRouter);

app.get('/', (req, res) => {
    res.send("Hello, World!");
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await AdminUsers.findOne({ username });

    if (!user) return res.status(400).send('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
});

// Start server
app.listen(port, () => {
    try {
        console.log(`Server running on port ${port}`);
    } catch (error) {
        console.log(error);
    }
});
