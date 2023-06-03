const express = require('express');
const controller = express.Router();
const jsonParser = express.json();
const {insertUser, showUser, findbyidUser } = require('../services/service');

controller.post('/comments', jsonParser, insertUser);
controller.get('/comments', showUser);
controller.get('/comments/:id', findbyidUser);

module.exports = controller;