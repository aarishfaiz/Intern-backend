const mongoose = require("mongoose");
require("dotenv").config();
DATABASE = process.env.DATABASE_URL;


module.exports.connect = () => {
  mongoose.connect(DATABASE, console.log("Database is Connected "));
};
