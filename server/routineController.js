const express = require("express");
const routine = require("./routineObject");
const router = express.Router();

router
    .get("/arms", (req,res) => res.send(routine.arms))
    .get("/legs", (req,res) => res.send(routine.legs))

module.exports.router = router;