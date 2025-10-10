const app = require('./app.js');
const db = require('./models');
const dotenv = require('dotenv');
const http = require('http');

dotenv.config();

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Server running...')
})

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
        console.log(`Listening in port ${PORT}`);
    })
    .catch((error) => { console.log('Unable to connect to the database:', error); });