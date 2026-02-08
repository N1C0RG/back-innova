const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv'); 
const { now } = require("sequelize/lib/utils");

const createAccessToken = (user) => { 
    const data = { username: user.username, email: user.email }; 
    const expirationDate = { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION || '15m'}; 
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, expirationDate); 
}; 

const createRefreshToken = (user) => { 
    const data = { username: user.username, email: user.email }; 
    const expirationDate = { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION || '7h'}; 
    return jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, expirationDate); 
}

router.post('/signup', async(req, res) => { 
    try { 
        const { username, email, password} = req.body; 
        if (!username || !password || !email) { 
            return res.status(400).json({ error: 'username, email y y contraseña son campos obligatorios'}); 
        }

        const alreadyIsUsed = await req.orm.User.findOne({ where: { email: email } }); 
        if (alreadyIsUsed) { 
            return res.status(400).json({ error: 'el correo ya existe'})
        }
        
        const saltRounds = parseInt(process.env.SALT_ROUNDS, 10); 
        const hashedUserPassword = await bcrypt.hash(password, saltRounds); 

        const user = await req.orm.User.create({ 
            username: username, 
            email: email, 
            password: hashedUserPassword,
        }); 

        const accessTokenValue = createAccessToken(user); 

        const refreshTokenValue = createRefreshToken(user); 

        await req.orm.RefreshToken.create({
            token: refreshTokenValue, 
            userId: user.id, 
            expiryDate: new Date(Date.now() + 7 * 60 * 60 * 1000) //7 horas 
        })

        res.cookie('refreshToken', refreshTokenValue, { httpOnly: true, secure: true , maxAge: 7 * 60 * 60 * 1000});
        res.json({ accessTokenValue, user });

    } catch(err) { 
        return res.status(500).json({ error: err.message }); 
    }
});


router.post('/login', async (req, res) => {
    try { 
        const { username, email, password} = req.body; 

        const user = await req.orm.User.findOne({ where: {username: username} && {email: email} }); 
        if (!user) { 
            return res.status(400).json({ error: 'error al crear/ingresar usuario'})
        }        
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) { 
            return res.status(200).json({ error: 'credenciales invalidas'})
        }

        const accessTokenValue = createAccessToken(user); 
        const refreshTokenValue = createRefreshToken(user); 

        await req.orm.RefreshToken.create({
            token: refreshTokenValue, 
            userId: user.id, 
            expiryDate: new Date(Date.now() + 7 * 60 * 60 * 1000) //7 horas 
        })

        res.cookie('refreshToken', refreshTokenValue, { httpOnly: true, secure: true , maxAge: 7 * 60 * 60 * 1000});
        res.json({ accessTokenValue, user })

    } catch(err) { 
        return res.status(400).json({ error: err.message }); 
    }
})

module.exports = router; 