const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    comorbidity: {
        type: String,
        required: false,
    },
    smoking: {
        type: String,
        required: false,
    },
    alcohol: {
        type: String,
        required: false,
    },
    basicDisease: {
        type: String,
        required: false,
    },
    avf: {
        type: String,
        required: false,
    },
    surgeonExperience: {
        type: String,
        required: false,
    },
    venousCourse: {
        type: String,
        required: false,
    },
    venousCaliber: {
        type: String,
        required: false
    },
    venousStenosis: {
        type: String,
        required: false
    },
    typeOfAnastomosis: {
        type: String,
        required: false
    },
    arterialWall: {
        type: String,
        required: false
    },
    avfGroup: {
        type: String,
        required: false
    },
    veinDiameter: {
        type: Number,
        required: false
    },
    arteryDiameter: {
        type: Number,
        required: false
    },
    arteryToVeinDistance: {
        type: Number,
        required: false
    },
    postOpComplications: {
        type: String, 
        required: false
    },
    postOpThrill: {
        type: String,
        required: false
    },
    postOpBruit: {
        type: String,
        required: false
    },
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);