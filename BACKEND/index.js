const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT;
app.use(express.json())
app.use(cors())

const Authrouter=require('../BACKEND/routes/auth').module
const Usersrouter=require('../BACKEND/routes/User').module
const AnnouncementRouter=require('../BACKEND/routes/Announcement').module
const incidenceRouter=require('../BACKEND/routes/Incidence').module
const clientRouter=require('../BACKEND/routes/Client').module
const ShiftRouter=require('../BACKEND/routes/Shift').module

app.use('/api/v1/auth',Authrouter)
app.use('/api/v1/users',Usersrouter)
app.use('/api/v1/announcements',AnnouncementRouter)
app.use('/api/v1/incidence',incidenceRouter)
app.use('/api/v1/clients',clientRouter)
app.use('/api/v1/shifts',ShiftRouter)

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
};
Connection().then(() => {
  app.listen(port, () => {
    console.log("connected to db");
    console.log(`app listening on port ${port}`);
  });
});
