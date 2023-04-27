import express from "express";
import { connection } from "./DB/connection.js"
import * as userRoute from "./routes/userRoute"
const cors = require('cors');

const { urlencoded } = require('express');
const User = require('./model/userModel')
const Product = require('./model/productModel')


// Datasbase
const db = require('./config/db.config');
const { Sequelize } = require('sequelize');
const { use } = require('./routes/userRout');
const userModel = require('./model/userModel');
const app = express();

var corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// Test Database

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});



// Get all users
app.get('/users',);


// add new user 
app.post('/addNewUser',);

// get oneUser by id 
app.get('/oneUser',)

/*
  const { id, name } = req.body;
  const user = await userModel.update(
    { name },
    {
      where: {
        id
      }
    }
  );
  // []
  if (user[0]) {
    res.json({ message: "Done" });
  } else {
    res.json({ message: "Fail" });
  }
};
*/

// Update user
app.put('/users/:id',);

// Delete user
app.delete('/users/:id',);

// Search for user where name starts with "a" and age less than 30
app.get('/users/op',);

// Search for users by list of ids
app.get('/users/users',);





// Get all users with products
app.get('/usersPro',);


// get all products
app.get('/products',);



// add new product
app.post('/addNewProduct',);


// Delete product (product owner only)
app.delete('/products/:id',);


// Update product (product owner only)
app.put('/products/:id',);


// Search for products where price greater than 3000
app.get('/products',);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});