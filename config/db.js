const mongoose = require('mongoose')
const { MONGOURI } = require('./server')

const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURI);
        console.log('DB Connected');
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;