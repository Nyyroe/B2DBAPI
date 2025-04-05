var express = require('express'); 
var db = require('../db'); //Connect to SQLite database
var router = express.Router(); //create router

//GET commands
//Fetch all baked goods from the database

router.get('/', (req,res) => {
    db.all('SELECT * FROM bakery', [], (err, rows) => {
        if (err) {
            //responds with error message in case of failure
            res.status(500).json({error: err.message});
        }
        else{
            //sends all baked goods as JSON if no error occurs
            res.json(rows);
        }
    });
});

//Fetch a single baked good from the list by its ID
router.get('/:id', (req, res) => {
    var id = req.params.id;
    db.get('SELECT * FROM bakery WHERE id = ?', [id], (err,row) => {
        if (err) {
            res.status(500).json({error: err.message});
        }
        else {
            res.json(row); //sends the item with matching ID as JSON (or null if item not found)
        }
    });
});

//POST commands
//Update an existing inventory item
router.put('/:id', (req, res) => {
    var id= req.params.id;
    var {name, allergens, price, date} = req.body;

    db.run('UPDATE bakery SET name = ?, allergens = ?, price = ?, date = ? WHERE id = ?',   [name, allergens, price, date, id],
        function (err) {
            if (err) {
                res.status(400).json({error: err.message});
            }
            else {
                res.json({ message: 'Item successfully updated'});
            }
        }
    );
});

//DELETE commands
//Remove a baked good from the inventory with it's ID
router.delete('/:id', (req, res) => {
    var id = req.params.id;

    db.run('DELETE FROM bakery WHERE id = ?', [id], function (err){
        if (err) {
            res.status(400).json({error: err.message});
        }
        else {
            res.json({ message: 'Item successfully deleted'});
        }
    });
});

module.exports = router;