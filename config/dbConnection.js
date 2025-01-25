const mongoose = require('mongoose');
const config = require('config');

const dbConnection = async () => {
    try {
        await mongoose.connect(config.get('db.url'));
        console.log("Connected to Database...");
    } catch(err){
        console.error("Database connection error: ", err);
    }
};


module.exports = dbConnection;