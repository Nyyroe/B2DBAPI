//import required modules
const express = require('express'); //web framework
const cors = require('cors'); //allows communication between frontend & backend
const invRoutes = require('./routes/bakeryList'); //import API routes

const app = express ();
app.use(cors());
app.use(express.json());
app.use('/bakeryList', invRoutes);

//start server
app.listen(4000, () => {
    console.log('Bakery server started');
});

