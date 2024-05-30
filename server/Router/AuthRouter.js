const express = require('express')
const app = express();
require('dotenv').config();
const router = express.Router();
const { UserRegistrations } = require('../model/AuthSchema')


// router.get("/LogIn", async (req, res) => {
//     try {
//         res.render("authentication-login")
//     } catch (error) {
//         console.log(error);
//     }
// })

// router.post("/singIn", async (req, res) => {
//     try {
//         const { UserName, Password, UserType } = req.body;
//         if (UserType == "Admin") {
//             const findUser = await AdminUserauth.findOne({ UserName });
//             if (!findUser) {
//                 res.json({
//                     msg: "Not Granted"
//                 })
//             } else {
//                 const hash = await bcrypt.compare(Password, findUser.Password);
//                 if (hash === true) {
//                     //genrate the tocken and store in cookie
//                     const token = genrateTocken(findUser.id, UserType);
//                     res.cookie('singIn', token, process.env.JWT_SECRET, {
//                         expires: new Date(Date.now() + 50000),
//                         httpOnly: true,
//                     })
//                     res.redirect("/Dashboard")
//                 } else {
//                     res.json({
//                         msg: "UserName or Password may be wrong",
//                     })
//                 }
//             }

//         } else if (UserType == "Student") {
//             const findUser = await StudentDetails.findOne({ Student_ID: UserName, password: Password });
//             if (findUser) {
//                 const token = genrateTocken(findUser.id, UserType);
//                 res.cookie('singIn', token, process.env.JWT_SECRET, {
//                     expires: new Date(Date.now() + 50000),
//                     httpOnly: true,
//                 })
//                 res.redirect("/Dashboard")
//             } else {
//                 res.json({
//                     msg: "Wrong Credantiol"
//                 })
//             }
//         } else {
//             const findUser = await FacultyDetails.findOne({ Faculty_ID: UserName, password: Password });
//             if (findUser) {
//                 const token = genrateTocken(findUser.id, UserType);
//                 res.cookie('singIn', token, process.env.JWT_SECRET, {
//                     expires: new Date(Date.now() + 50000),
//                     httpOnly: true,
//                 })
//                 res.redirect("/Dashboard")
//             } else {
//                 res.json({
//                     msg: "Wrong Credantiol"
//                 })
//             }
//         }
//     } catch (error) {
//         console.log(error);
//     }
// })

router.post('/Registraion', async(req, res) => {
    try {
        const { UserName,MobileNo,Password} = req.body
        const newuser = new UserRegistrations({UserName,MobileNo,Password})
        newuser.save()
        res.send('Registration Done...')
    } catch (error) {
        console.log(error);
    }
})
//===========export router=============
module.exports = router;