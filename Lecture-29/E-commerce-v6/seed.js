const mongoose = require('mongoose');
const Product = require('./models/product');


const products = [
    {
        name: "Iphone 12",
        img: "https://images.unsplash.com/photo-1605637064671-c03a5fae76cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "Macbook Pro",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 900000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "Titan Watch",
        img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 20000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "HP Laptop",
        img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "Rolex",
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "BoAt Headphones",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "Drone",
        img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },

]

const seedDB = async ()=>{
    
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports = seedDB;
