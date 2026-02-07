const jwt = require('jsonwebtoken'); 

// function getJwtTokenScope(token) { 
//     var data = jwt.verify(jwtToken, process.env.JWT_SECRET); 
//     return data.scope;
// }

function requiereAuth(req, res, next) { 
    const auth = req.headers.authorization || ''; 
    const [header, jwtToken] = auth.split(' '); 

    if (header !== 'Bearer') { 
        return res.status(401).json({ error: 'token faltante o invalido' }); 
    }

    try { 
        const data = jwt.verify(jwtToken, process.env.JWT_SECRET); 
        req.user = { username: data.username, email: data.email }; 
        return next(); 
    } catch(err) { 
        return res.status(401).json({ error: err.message})
    }
}; 


module.exports = requiereAuth; 