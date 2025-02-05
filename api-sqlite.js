var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('bakeryDB');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS bakery (name VARCHAR(30) NOT NULL, allergens VARCHAR(50), price DOUBLE NOT NULL, date DATE NOT NULL)");
    db.run("DELETE FROM bakery");

    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Peanut Butter Brownies", "peanuts", 2.49, "2025-01-29");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Chocolate Chip Cookie", null, 1.49, "2025-01-26");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Vanilla Macaron", "Almond", 2.99, "2025-02-03");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Croissant", null, 3.49, "2025-02-01");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Bagel", null, 1.99, "2025-01-29");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Cheese Danish", "dairy", 2.99, "2025-02-03");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Blueberry Muffin", null, 3.49, "2025-02-01");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Fruit Scone", null, 2.99, "2025-02-04");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Baguette", null, 5.49, "2025-02-02");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Ciabatta", null, 5.99, "2025-01-31");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Cinnamon Roll", null, 4.49, "2025-01-29");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Cheese Eclair", "dairy", 4.75, "2025-01-31");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Lemon Tart", null, 6.49, "2025-01-30");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Apple Pie", null, 11.99, "2025-01-28");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Oreo Cupcake", null, 3.99, "2025-02-01");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Cheesecake", "dairy", 12.99, "2025-02-04");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Puff Pastry Twist", null, 2.99, "2025-01-31");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Brioche", null, 6.99, "2025-01-28");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Focaccia", null, 7.99, "2025-01-31");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Sourdough", null, 7.99, "2025-02-03");
});

var express = require ('express');
var app = express();

app.get('/', function(req, res){
    res.send("Welcome to Sunderland Bakery!")
})

app.get('/inventory', function(req,res){
    db.all("SELECT * FROM bakery", function(err,rows){
        res.jsonp(rows);
    });
});

app.listen(4000);
console.log("Site Loaded");
