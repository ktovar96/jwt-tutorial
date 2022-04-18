//index.js

const express = require('express');
const app = express();
const cors = require('corrs');
const exp = require('constants');

//set up port
const PORT = process.env.PORT  || 3000;

app.use(express.json());
app.use(cors());

//add routes
const router = require('./routes/routes.js');
app.use('/api', router);

//run server
app.listen(PORT, () => console.log('Servidor corriendo en el puerto' + PORT));