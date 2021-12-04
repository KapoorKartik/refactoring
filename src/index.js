const express = require('express')


const userController = require("./controllers/user.controller")
const resultController = require("./controllers/result.controller")
const studentController = require("./controllers/student.controller")
const evalController = require("./controllers/evaluation.controller")
const firstController = require("./controllers/first.controller")


const app = express()

app.use(express.json())

app.use("/users", userController)
app.use("/results", resultController)
app.use('/students', studentController)
app.use('/evaluations', evalController)
app.use("/first",firstController)


module.exports = app;