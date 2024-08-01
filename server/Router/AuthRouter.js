const express = require("express");
const app = express();
require("dotenv").config();
const multer = require("multer");
const router = express.Router();
const path = require("path");
const {
  UserRegistrations,
  Packages,
  Rides,
  RidesFeedBacks,
  FeedBacks,
  FoodMenus,
  EventDetails,
  EventUserRegistrations,
} = require("../model/AuthSchema");
const { default: mongoose } = require("mongoose");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(12345);
    cb(null, "public/upload/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.get("/ShowAllTickets", async (req, res) => {
  try {
    const AllTicket = await UserRegistrations.find();
    res.status(200).json(AllTicket);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

router.post("/ShowuserTicket/:id", async (req, res) => {
  try {
    const userid = req.params.id();
    const userTicket = await UserRegistrations.findById(userid);
    res.status(200).json(userTicket);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

//---------------New Ticket Book----------------------------------
router.post("/UserRegistraion", async (req, res) => {
  try {
    console.log(req.body);
    const {
      TicketId,
      CustomerName,
      MobileNo,
      Email,
      Packages,
      PaymentStatus,
      NumberOfMember,
      TransactionID,
      TicketPerPerson,
      TotalPayment,
      Dates,
      Claimed,
    } = req.body;
    const newuser = new UserRegistrations({
      TicketId,
      CustomerName,
      MobileNo,
      PaymentStatus,
      Email,
      Packages,
      NumberOfMember,
      TransactionID,
      TicketPerPerson,
      Claimed,
      TotalPayment,
      Date: Dates,
    });
    newuser.save();
    res.json("newuser");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//---------------Ticket Claimed----------------------------------
router.put("/TicketClaimed/:id", async (req, res) => {
  try {
    TicketId = req.params.id;
    console.log(TicketId, "Claimed");
    const Claimeduser = await UserRegistrations.findByIdAndUpdate(TicketId, {
      Claimed: "Claimed",
    });
    res.status(200).json(Claimeduser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//---------------Ticket cancelation----------------------------------
router.put("/TicketCancelation/:id", async (req, res) => {
  try {
    TicketId = req.params.id;
    const TicketCancel = await UserRegistrations.findByIdAndUpdate(TicketId, {
      Claimed: "Canceled",
    });
    console.log(TicketCancel);
    res.status(200).json(TicketCancel);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.post("/ShowTickets", async (req, res) => {
  try {
    const { MobileNo } = req.body;
    const AllTicket = await UserRegistrations.find({ MobileNo });
    res.status(200).json(AllTicket);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

//==================Package==================================================================================================

router.get("/ShowPackage", async (req, res) => {
  try {
    const AllPackage = await Packages.find();
    res.status(200).json(AllPackage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});
//---------------New Package Add----------------------------------
router.post("/AddPackage", async (req, res) => {
  try {
    const { PackageName, Price } = req.body;
    const NewPackage = new Packages({ PackageName, Price });
    NewPackage.save();
    res.status(200).json(NewPackage);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
//---------------Edit Package----------------------------------
router.put("/EditPackage/:id", async (req, res) => {
  try {
    PackageId = req.params.id;
    const { PackageName, Price } = req.body;
    const EditPackage = await Packages.findByIdAndUpdate(PackageId, {
      PackageName,
      Price,
    });
    res.status(200).json(EditPackage);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
//---------------Package Delete----------------------------------
router.delete("/PackageDelete/:id", async (req, res) => {
  try {
    PackageId = req.params.id;
    const PackagesDelete = await Packages.findByIdAndDelete(PackageId);
    res.status(200).json(PackagesDelete);
  } catch (error) {
    res.status(500).send(error);
  }
});

//==================Rides==================================================================================================

router.get("/ShowRide", async (req, res) => {
  try {
    const allRides = await Rides.find().populate("Packageid", "PackageName"); // Populate Packageid with PackageName
    // console.log(allRides);
    res.status(200).json(allRides);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});
//---------------New Ride Add----------------------------------
router.post("/AddRide", upload.single("RideImage"), async (req, res) => {
  try {
    const { Packageid, RideName, RideDescription, Para, Rating } = req.body;
    console.log(req.body);
    console.log(req.file);
    const NewRide = new Rides({
      Packageid,
      RideName,
      RideImage: `upload/${req.file.filename}`,
      RideDescription,
      Para,
      Rating,
    });
    NewRide.save();
    res.status(200).json(NewRide);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
//---------------Edit Ride----------------------------------
router.put("/EditRide/:id", async (req, res) => {
  try {
    RideId = req.params.id;
    console.log(123456789, RideId, req.body);
    const { Packageid, RideName, RideDescription, Para, Rating } = req.body;
    const EditRide = await Rides.findByIdAndUpdate(RideId, {
      Packageid,
      RideName,
      RideDescription,
      Para,
      Rating,
    });
    res.status(200).json(EditRide);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
//---------------Ride Delete----------------------------------
router.delete("/RideDelete/:id", async (req, res) => {
  try {
    RideId = req.params.id;
    console.log(RideId);
    const RideDelete = await Rides.findByIdAndDelete(RideId);
    res.status(200).json(RideDelete);
  } catch (error) {
    res.status(500).send(error);
  }
});

//==================RideFeedBacks FeedBack==================================================================================================

router.get("/ShowRideFeedBack", async (req, res) => {
  try {
    const AllRideFeedBack = await RidesFeedBacks.find();
    res.status(200).json(AllRideFeedBack);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});
//---------------New RideFeedBack Add----------------------------------
router.post("/AddRideFeedBack", upload.single("Image"), async (req, res) => {
  try {
    const { UserName, Email, RideName, Rating, Comment } = req.body;
    //   const imagePath = req.file ? req.file.path : null;
    //   console.log(imagePath); // Log the image path
    const NewRideFeedBack = new RidesFeedBacks({
      UserName,
      Email,
      RideName,
      Rating,
      Comment,
      Image: `upload/${req.file.filename}`,
    });

    await NewRideFeedBack.save();
    res.status(200).json(NewRideFeedBack);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete('/DeleteRideFeedback/:id', async (req,res)=>{
  try{
    const FeeId = req.params.id;
    const dleEvent = await RidesFeedBacks.findByIdAndDelete(FeeId)
    res.status(200).json(dleEvent)
  }catch(err){}
})
//==================FeedBacks FeedBack==================================================================================================

router.get("/ShowFeedBack", async (req, res) => {
  try {
    console.log("cllaed")
    const AllFeedBack = await FeedBacks.find();
    res.status(200).json(AllFeedBack);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});
//---------------New FeedBack Add----------------------------------
router.post("/AddFeedBack", upload.none(), async (req, res) => {
  try {
    const { FeedBack } = req.body;
    const NewFeedBack = new FeedBacks({ FeedBack });
    NewFeedBack.save();
    res.status(200).json(NewFeedBack);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/DeleteFeedBack/:id", async (req, res) => {
  try {
    const FeedId = req.params.id;
    const deletedFeed = await FeedBacks.findByIdAndDelete(FeedId);
    res.status(200).json(deletedFeed);
  } catch (err) {
    res.status(500).send(err);
  }
});

//==================FoodMenu==================================================================================================

router.get("/ShowFoodMenu", async (req, res) => {
  try {
    const AllFoodMenu = await FoodMenus.find();
    res.status(200).json(AllFoodMenu);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});
//---------------New FoodMenu Add----------------------------------
router.post("/AddFoodMenu", upload.single("FoodImage"), async (req, res) => {
  try {
    const { FoodName, Price } = req.body;
    console.log(req.body);
    console.log(req.file);
    // const NewRide = new Rides({Packageid,RideName,RideImage: `upload/${req.file.filename}`,RideDescription,Para,Rating })
    const NewFoodMenu = new FoodMenus({
      FoodName,
      Price,
      FoodImage: `upload/${req.file.filename}`,
    });
    NewFoodMenu.save();
    res.status(200).json(NewFoodMenu);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
//---------------Edit FoodMenu----------------------------------
router.put("/EditFoodMenu/:id", async (req, res) => {
  try {
    FoodMenuId = req.params.id;
    const { FoodName, Price } = req.body;
    console.log(FoodName, Price, FoodMenuId);
    const EditFoodMenu = await FoodMenus.findByIdAndUpdate(FoodMenuId, {
      FoodName,
      Price,
    });
    res.status(200).json(EditFoodMenu);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
//---------------FoodMenu Delete----------------------------------
router.delete("/FoodMenuDelete/:id", async (req, res) => {
  try {
    FoodMenuId = req.params.id;
    const FoodMenusDelete = await FoodMenus.findByIdAndDelete(FoodMenuId);
    res.status(200).json(FoodMenusDelete);
  } catch (error) {
    res.status(500).send(error);
  }
});

//================== Events ==================================================================================================

//---------------Event Details Show----------------------------------
router.get("/ShowEvents", async (req, res) => {
  try {
    const AllEvents = await EventDetails.find();
    res.status(200).json(AllEvents);
  } catch (e) {
    res.status(500).send(e);
  }
});

//---------------Event Details Add----------------------------------
router.post("/AddEvent", upload.none(), async (req, res) => {
  try {
    const {
      EventName,
      EventDescription,
      EventDate,
      EventTime,
      EventPrice,
      Completed,
    } = req.body;
    const newEvent = new EventDetails({
      EventName,
      EventDescription,
      EventDate,
      EventTime,
      EventPrice,
      Completed,
    });
    newEvent.save();
    res.status(200).json(newEvent);
  } catch (e) {
    res.status(500).send(e);
  }
});

//---------------Event Details Edit----------------------------------
router.put("/EditEventDeatils/:id", upload.none(), async (req, res) => {
  try {
    EventId = req.params.id;
    const {
      EventName,
      EventDescription,
      EventDate,
      EventTime,
      EventPrice,
      Completed,
    } = req.body;
    const EditEvent = await EventDetails.findByIdAndUpdate(EventId, {
      EventName,
      EventDescription,
      EventDate,
      EventTime,
      EventPrice,
      Completed,
    });
    res.status(200).json(EditEvent);
  } catch (e) {
    res.status(500).send(e);
  }
});

//---------------Event Details Delete----------------------------------
router.delete("/DeleteEvent/:id", async (req, res) => {
  try {
    EventId = req.params.id;
    const DeleteEvnet = await EventDetails.findByIdAndDelete(EventId);
    res.status(200).json(DeleteEvnet);
  } catch (e) {
    res.status(500).send(e);
  }
});

//================== Events Booking User ==================================================================================================
router.get("/ShowEventAllTickets", async (req, res) => {
  try {
    const AllTicket = await EventUserRegistrations.find();
    res.status(200).json(AllTicket);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

router.post("/ShowuserEventTicket/:id", async (req, res) => {
  try {
    const userid = req.params.id();
    const userTicket = await EventUserRegistrations.findById(userid);
    res.status(200).json(userTicket);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

//---------------New Ticket Book----------------------------------
router.post("/EventUserRegistraion", async (req, res) => {
  try {
    console.log(req.body);
    const {
      TicketId,
      CustomerName,
      MobileNo,
      Email,
      Events,
      PaymentStatus,
      NumberOfMember,
      TransactionID,
      TicketPerPerson,
      TotalPayment,
      Dates,
      Claimed,
    } = req.body;
    const newuser = new EventUserRegistrations({
      TicketId,
      CustomerName,
      MobileNo,
      PaymentStatus,
      Email,
      Events,
      NumberOfMember,
      TransactionID,
      TicketPerPerson,
      Claimed,
      TotalPayment,
      Date: Dates,
    });
    newuser.save();
    res.json("newuser");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//---------------Ticket Claimed----------------------------------
router.put("/EventTicketClaimed/:id", async (req, res) => {
  try {
    TicketId = req.params.id;
    console.log(TicketId, "Claimed");
    const Claimeduser = await EventUserRegistrations.findByIdAndUpdate(
      TicketId,
      { Claimed: "Claimed" }
    );
    res.status(200).json(Claimeduser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//---------------Ticket cancelation----------------------------------
router.put("/EventTicketCancelation/:id", async (req, res) => {
  try {
    TicketId = req.params.id;
    const TicketCancel = await EventUserRegistrations.findByIdAndUpdate(
      TicketId,
      { Claimed: "Canceled" }
    );
    console.log(TicketCancel);
    res.status(200).json(TicketCancel);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.post("/ShowEventTickets", async (req, res) => {
  try {
    const { MobileNo } = req.body;
    const AllTicket = await EventUserRegistrations.find({ MobileNo });
    res.status(200).json(AllTicket);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});
//===========export router=============
module.exports = router;
