const { Sequelize, DataTypes } = require('sequelize');

const Blog = sequelize.define('Blog', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1,
        primaryKey:true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING
    }
});


Blog.sync()
    .then(() => {
        console.log("Table Created");
    })
    .catch((err) => {
        console.log("Could Not create the table");
        console.log(err);
    })


module.exports = Blog;