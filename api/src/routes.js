const express = require('express');
const routes = express.Router()
const usersController = require('./controllers/usersControllers')
routes.get("/users", usersController.getUser)
routes.post("/users", usersController.createUser)

module.exports = routes