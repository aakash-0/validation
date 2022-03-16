const express = require("express");
const app = express();

app.use(express.json());

const usersController = require("./controller/user.controller");

app.use("/users",usersController)


module.exports = app;