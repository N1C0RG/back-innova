const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv'); 

const singInJwtToken = (user) => { 
    const data = { username: user.username, email: user.email }; 
    const expirationDate = { expiresIn: process.env.JWT_EXPIRATION || '1h'}; 
    return jwt.sign(data, process.env.JWT_SECRET, expirationDate); 
}; 

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

        const jwtToken = singInJwtToken(user); 

        return res.status(201).json({ 
            message: 'usuario creado exitosamente', 
            jwtToken, 
            user: { 
                username: user.username, 
                email: user.email, 
            }, 
        }); 
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

        const jwtToken = singInJwtToken(user); 

        return res.status(200).json({ 
            message: 'login exitoso', 
            jwtToken, 
            user: { 
                username: user.username, 
                email: user.email, 
            }, 
        }); 

    } catch(err) { 
        return res.status(400).json({ error: err.message }); 
    }
})

module.exports = router; 