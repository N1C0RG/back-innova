const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');


router.post('/signup', async (req, res) => {
  console.log('POST /signup body:', req.body);
  try {
    const existingUser = await req.orm.User.findOne({ where: { email: req.body.email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const user = await req.orm.User.create(req.body);
    res.status(201).json({ success: true, user });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(400).json({ error: error.message });
  }
});


router.post('/login', async (req, res) => {
  try {
    const existingUser = await req.orm.User.findOne({ where: { email: req.body.email } });
    if (!existingUser) {
      return res.status(400).json({ success: false, error: 'User does not exist' });
    }

    const isPasswordValid = existingUser.password === req.body.password;
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, error: 'Invalid password' });
    }

    const body = {
      id: existingUser.id,
      username: existingUser.username,
      email: existingUser.email,
      role: existingUser.role,
      accountType: existingUser.accountType
    };

    return res.status(200).json({ success: true, user: body});
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});


module.exports = router;

