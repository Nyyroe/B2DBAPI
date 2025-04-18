//establish variables
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bakeryDB');

//check if db exists and create it if it doesn't
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS bakery (name VARCHAR(30) NOT NULL, allergens VARCHAR(50), price DOUBLE NOT NULL, date DATE NOT NULL)");
    //delete any data currently present in db
    db.run("DELETE FROM bakery");
    //insert data into database
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Peanut Butter Brownies", "peanuts", 2.49, "2025-03-29");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Chocolate Chip Cookie", null, 1.49, "2025-03-26");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Vanilla Macaron", "Almond", 2.99, "2025-04-03");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Croissant", null, 3.49, "2025-04-01");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Bagel", null, 1.99, "2025-03-29");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Cheese Danish", "dairy", 2.99, "2025-04-03");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Blueberry Muffin", null, 3.49, "2025-04-01");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Fruit Scone", null, 2.99, "2025-04-04");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Baguette", null, 5.49, "2025-04-02");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Ciabatta", null, 5.99, "2025-03-31");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Cinnamon Roll", null, 4.49, "2025-03-29");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Cheese Eclair", "dairy", 4.75, "2025-03-31");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Lemon Tart", null, 6.49, "2025-03-30");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Apple Pie", null, 11.99, "2025-03-28");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Oreo Cupcake", null, 3.99, "2025-04-01");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Cheesecake", "dairy", 12.99, "2025-04-04");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Puff Pastry Twist", null, 2.99, "2025-03-31");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Brioche", null, 6.99, "2025-03-28");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Focaccia", null, 7.99, "2025-03-31");
    db.run("INSERT INTO bakery (name, allergens, price, date) VALUES (?,?,?,?)","Sourdough", null, 7.99, "2025-04-03");
});