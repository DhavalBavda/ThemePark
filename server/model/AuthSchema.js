const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId


//=============AdminUser==================================================
const AdminUser = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }
})
const AdminUsers = new mongoose.model('AdminUsers',AdminUser)

//=============UserRegistration==================================================
const UserRegistration = new mongoose.Schema(
    {
        TicketId: {
            type: String,
            required: true,
        },
        CustomerName: {
            type: String,
            required: true,
        },
        MobileNo: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
        },
        Packages : {
            type: String,
            required: true,   
        },
        PaymentStatus : {
            type: String,  
        },
        NumberOfMember: {
            type: String,
            required: true,   
        },
        TransactionID:{
            type: String,
            required: true, 
        },
        TicketPerPerson: {
            type: String,
            required: true,   
        },
        TotalPayment: {
            type: String,
            required: true,   
        },
        Claimed: {
            type: String,
            required: true,   
        },
        Date: {
            type: String,
            required: true,   
        },
       
    },
    { timestamps: true }
)
const UserRegistrations =new  mongoose.model('UserRegistrations', UserRegistration);

//=============Packages==================================================
const Package = new mongoose.Schema(
    {
        PackageName: {
            type: String,
            required: true,
        },
        Price: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)
const Packages =new  mongoose.model('Packages', Package);

//=============Rides==================================================
const Ride = new mongoose.Schema(
    {
        Packageid: {
            type: ObjectId,
            ref: 'Packages',
        },
        Para: {
            type: String,
            ref: 'Packages',
        },
        Rating: {
            type: String,
            ref: 'Packages',
        },
        RideName: {
            type: String,
            required: true,
        },
        RideImage: {
            type: String,
            required: true,
        },
        RideDescription: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)
const Rides =new  mongoose.model('Rides', Ride);

//=============Rides FeedBack==================================================
const RidesFeedBack = new mongoose.Schema(
    {
        Rideid: {
            type: ObjectId,
            ref: 'Rides',
        },
        UserName: {
            type: String,
            required: true,
        },
        FeedBack: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)
const RidesFeedBacks =new  mongoose.model('RidesFeedBacks', RidesFeedBack);

//=============FeedBack==================================================
const FeedBack = new mongoose.Schema(
    {
        UserName: {
            type: String,
            required: true,
        },
        FeedBack: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)
const FeedBacks =new  mongoose.model('FeedBacks', FeedBack);

//=============Food Menu==================================================
const FoodMenu = new mongoose.Schema(
    {
        FoodName: {
            type: String,
            required: true,
        },
        Price: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)
const FoodMenus =new  mongoose.model('FoodMenus', FoodMenu);

/*=============Export the model==============*/

module.exports={AdminUsers,UserRegistrations,Packages,Rides,RidesFeedBacks,FeedBacks,FoodMenus}