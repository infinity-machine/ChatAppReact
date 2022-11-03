const auth_router = require('express').Router();
const jwt = require('jsonwebtoken');
const { User, Key } = require('../models');
const { loginUser, registerUser } = require('../controllers');

// REGISTER
auth_router.post('/register', async (req, res) => {
    const access_token = await registerUser(req.body);
    if(!access_token) return res.sendStatus(400);
    res.json(access_token);
});

// LOGIN
auth_router.post('/login', async (req, res) => {
    const access_token = await loginUser(req.body);
    console.log(access_token)
    if (!access_token) return res.sendStatus(400);
    res.json(access_token);
});

module.exports = auth_router;