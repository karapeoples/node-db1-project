const express = require("express");
const AccountsRouter = require('../accounts/accounts-router')


const server = express();

server.use(express.json());
server.use ('/accounts', AccountsRouter )

module.exports = server;
