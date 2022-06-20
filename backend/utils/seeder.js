const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');


const products = require('../data/products.json');

// Setting up the config file
dotenv.config({ path: 'backend/config/config.env'});

// Connecting the database
connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log('All Prducts are deleted successfully');

    await Product.insertMany(products);
    console.log('All Prducts are inserted successfully');

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit();
  }
}

seedProducts();