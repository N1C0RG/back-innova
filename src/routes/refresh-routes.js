const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv'); 
const { now } = require("sequelize/lib/utils");


router.get('/', async(req, res) => { 

    const cookies = req.cookies; 
    
    if (!cookies?.refreshToken) return res.sendStatus(401);
    const refreshTokenValue = cookies.refreshToken; 

    try {
        const tokenData = await req.orm.RefreshToken.findOne({ 
            where: { token: refreshTokenValue },
            include: [{ model: req.orm.User, as: 'user' }] 
        });
        if (!tokenData || !tokenData.user || new Date() > tokenData.expiryDate) { 
            return res.status(403).json({ error: 'Token inválido o expirado' });
        }

        const user = tokenData.user;
        jwt.verify(
            refreshTokenValue,
            process.env.REFRESH_TOKEN_SECRET, 
            (err, decoded) => { 
                if (err || decoded.email !== user.email) return res.sendStatus(403);

                const accessToken = jwt.sign(
                    { 
                        "email": user.email, 
                        "username": user.username,
                        "role": user.role 
                    }, 
                    process.env.ACCESS_TOKEN_SECRET, 
                    { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION } 
                ); 

                res.json({ accessToken });
            }
        ); 
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

module.exports = router;