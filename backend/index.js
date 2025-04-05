//import required modules
var express = require('express'); //web framework
var cors = require('cors'); //allows communication between frontend & backend
var invRoutes = require('./routes/inventory'); //import API routes

var app = express ();
app.use(cors());
app.use(express.json());
app.use('/inventory', invRoutes);

//start server
app.listen(4000, () => {
    console.log('Bakery server started');
});

