const mongoose = require('mongoose');

//=============Authentication==================================================
const UserRegistration = new mongoose.Schema(
    {
        UserName: {
            type: String,
            required: true,
        },
        MobileNo: {
            type: String,
            required: true,
            index: true,
        },
        Password: {
            type: String,
            required: true,
            
        },     
    }
)
const UserRegistrations =new  mongoose.model('UserRegistrations', UserRegistration);

/*=============Export the model==============*/

module.exports={UserRegistrations}