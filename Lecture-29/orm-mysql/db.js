const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog_app', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});


const connectDB = async () => {
    
    try {
        await sequelize.authenticate();
        console.log("CONNECTION OPEN"); 
    }
    catch (e) {
        console.log("DB CONNECTION FAILED");
    } 
}

module.exports = connectDB;
global.sequelize = sequelize;