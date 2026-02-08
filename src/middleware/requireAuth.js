const jwt = require('jsonwebtoken'); 

function requiereAuth(req, res, next) { 
    const auth = req.headers.authorization || ''; 
    const [header, jwtToken] = auth.split(' '); 

    if (header !== 'Bearer') { 
        return res.status(401).json({ error: 'token faltante o invalido' }); 
    }

    try { 
        const data = jwt.verify(jwtToken, process.env.ACCESS_TOKEN_SECRET); 
        req.user = { username: data.username, email: data.email }; 
        return next(); 
    } catch(err) { 
        return res.status(401).json({ error: err.message})
    }
}; 


module.exports = requiereAuth; 