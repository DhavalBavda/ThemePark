const express = require('express')
const app = express();
require('dotenv').config();
const router = express.Router();
const { UserRegistrations,Packages,Rides,RidesFeedBacks,FeedBacks,FoodMenus } = require('../model/AuthSchema');
const { default: mongoose } = require('mongoose');

router.get("/ShowAllTickets", async (req, res) => {
    try {
        const AllTicket = await UserRegistrations.find();
        res.status(200).json(AllTicket);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })
    }
})

router.post("/ShowuserTicket/:id", async (req, res) => {
    try {
        const userid=req.params.id()
        const userTicket = await UserRegistrations.findById(userid);
        res.status(200).json(userTicket);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })
    }
})

//---------------New Ticket Book----------------------------------
router.post('/UserRegistraion', async (req, res) => {
    try {
        console.log(req.body);
        const { CustomerName, MobileNo, Email, Packages,PaymentStatus, NumberOfMember, TransactionID, TicketPerPerson, TotalPayment, Date,Claimed } = req.body
        const newuser = new UserRegistrations({ CustomerName, MobileNo,PaymentStatus, Email, Packages, NumberOfMember, TransactionID, TicketPerPerson,Claimed, TotalPayment, Date })
        newuser.save()
        res.send('Registration Done...')
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

//---------------Ticket Claimed----------------------------------
router.put('/TicketClaimed/:id', async (req, res) => {
    try {
        TicketId = req.params.Id
        const Claimeduser = await UserRegistrations.findByIdAndUpdate(TicketId, { Claimed: True })
        res.status(200).send('Claimed...').json(Claimeduser)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

//---------------Ticket cancelation----------------------------------
router.delete('/TicketCancelation/:id', async (req, res) => {
    try {
        TicketId = req.params.Id
        const TicketCancel = await UserRegistrations.findByIdAndDelete(TicketId)
        res.status(200).send('Ticket Canceled').json(TicketCancel)
    } catch (error) {
        res.status(500).send(error)
    }
})



//==================Package==================================================================================================


router.get("/ShowPackage", async (req, res) => {
    try {
        const AllPackage = await Packages.find();
        res.status(200).json(AllPackage);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })
    }
})
//---------------New Package Add----------------------------------
router.post('/AddPackage', async (req, res) => {
    try {
        const { PackageName,Price } = req.body
        const NewPackage = new Packages({PackageName,Price })
        NewPackage.save()
        res.status(200),send('NewPackage Added...')
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})
//---------------Edit Package----------------------------------
router.put('/EditPackage/:id', async (req, res) => {
    try {
        PackageId = req.params.Id
        const {PackageName} =req.body
        const EditPackage = await Packages.findByIdAndUpdate(PackageId, { PackageName })
        res.status(200).send('Package Edited...').json(EditPackage)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})
//---------------Package Delete----------------------------------
router.delete('/PackageDelete/:id', async (req, res) => {
    try {
        PackageId = req.params.Id
        const PackagesDelete = await Packages.findByIdAndDelete(PackageId)
        res.status(200).send('Package Deleted').json(PackagesDelete)
    } catch (error) {
        res.status(500).send(error)
    }
})



//==================Rides==================================================================================================


router.get("/ShowRide", async (req, res) => {
    try {
        const AllRide = await Rides.find();
        res.status(200).json(AllRide);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })
    }
})
//---------------New Ride Add----------------------------------
router.post('/AddRide', async (req, res) => {
    try {
        const { Packageid,RideName,RideImage,RideDescription } = req.body
        const NewRide = new Rides({Packageid,RideName,RideImage,RideDescription })
        NewRide.save()
        res.status(200),send('New Ride Added...')
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})
//---------------Edit Ride----------------------------------
router.put('/EditRide/:id', async (req, res) => {
    try {
        RideId = req.params.Id
        const {RideName} =req.body
        const EditRide = await Rides.findByIdAndUpdate(RideId, { RideName })
        res.status(200).send('Ride Edited...').json(EditRide)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})
//---------------Ride Delete----------------------------------
router.delete('/RideDelete/:id', async (req, res) => {
    try {
        RideId = req.params.Id
        const RideDelete = await Rides.findByIdAndDelete(RideId)
        res.status(200).send('Ride Deleted').json(RideDelete)
    } catch (error) {
        res.status(500).send(error)
    }
})



//==================RideFeedBacks FeedBack==================================================================================================


router.get("/ShowRideFeedBack", async (req, res) => {
    try {
        const AllRideFeedBack = await RidesFeedBacks.find();
        res.status(200).json(AllRideFeedBack);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })
    }
})
//---------------New RideFeedBack Add----------------------------------
router.post('/AddRideFeedBack', async (req, res) => {
    try {
        const { Rideid,UserName,FeedBack } = req.body
        const NewRideFeedBack = new RidesFeedBacks({Rideid,UserName,FeedBack })
        NewRideFeedBack.save()
        res.status(200),send('New RideFeedBack Added...')
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

//==================FeedBacks FeedBack==================================================================================================


router.get("/ShowFeedBack", async (req, res) => {
    try {
        const AllFeedBack = await FeedBacks.find();
        res.status(200).json(AllFeedBack);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })
    }
})
//---------------New FeedBack Add----------------------------------
router.post('/AddFeedBack', async (req, res) => {
    try {
        const { UserName,FeedBack } = req.body
        const NewFeedBack = new FeedBacks({UserName,FeedBack })
        NewFeedBack.save()
        res.status(200),send('New FeedBack Added...')
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


//==================FoodMenu==================================================================================================


router.get("/ShowFoodMenu", async (req, res) => {
    try {
        const AllFoodMenu = await FoodMenus.find();
        res.status(200).json(AllFoodMenu);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })
    }
})
//---------------New FoodMenu Add----------------------------------
router.post('/AddFoodMenu', async (req, res) => {
    try {
        const { PackageName,Price } = req.body
        const NewFoodMenu = new FoodMenus({PackageName,Price })
        NewFoodMenu.save()
        res.status(200),send('NewFoodMenu Added...')
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})
//---------------Edit FoodMenu----------------------------------
router.put('/EditFoodMenu/:id', async (req, res) => {
    try {
        FoodMenuId = req.params.Id
        const {FoodMenuName} =req.body
        const EditFoodMenu = await FoodMenus.findByIdAndUpdate(PackageId, { FoodName,Price })
        res.status(200).send('FoodMenu Edited...').json(EditFoodMenu)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})
//---------------FoodMenu Delete----------------------------------
router.delete('/FoodMenuDelete/:id', async (req, res) => {
    try {
        FoodMenuId = req.params.Id
        const FoodMenusDelete = await FoodMenus.findByIdAndDelete(FoodMenuId)
        res.status(200).send('FoodMenu Deleted').json(FoodMenusDelete)
    } catch (error) {
        res.status(500).send(error)
    }
})

//===========export router=============
module.exports = router;