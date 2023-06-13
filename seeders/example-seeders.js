require('dotenv').config();
const mongoose = require('mongoose')
const Product = require('../models/product');
const url = process.env.DB_URI_DEV

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB for seeder... ", url)
    })
    .catch((err) => {
        console.log(err)
    });

const seedProducts = [
    {
        name: "milk",
        price: 100,
        category: "diary"
    },
    {
        name: "apple",
        price: 150,
        category: "fruit"
    },
    {
        name: "oats",
        price: 400,
        category: "grain"
    }
];

const seedDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
}

seedDB().then(() => {
    mongoose.connection.close()
})