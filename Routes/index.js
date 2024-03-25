const express = require("express");
const router = express.Router();
const admin = require("./AdminRoute");
const ApplicationRoute = require("./ApplicationRoute")

router.get("/", (req, res) => {
  res.send("This is Backend");
});

router.use("/admin", admin);
router.use("/application", ApplicationRoute)

module.exports = router;
