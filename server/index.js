const express = require("express");
const server = express();
const routineController = require("./routineController")

server.use("/routines", routineController.router);
server.use("/home", express.static("./client"))

server.listen(3000);

console.log("http://localhost:3000");