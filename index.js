require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./routers/routes");
// const Admin = require('./models/Admin');
const mongoConnect = require('./db')
const PORT = 8000;
const cors = require("cors");

app.use(cors())
app.use(express.json());
app.use(require("./routers/routes")); //Ludo idar ye daalna tha jo maine daala hai tune router toh banaya lekin usko use nahi kiya index.js me call karke


mongoConnect(process.env.MONGO_URL).then(async () => {

  // const newAdmin = new Admin();
  // try {
  //   await newAdmin.save();
  //   console.log('Admin saved to the database');
  // } catch (error) {
  //   console.error('Error saving admin:', error);
  // }

  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error(err);
});