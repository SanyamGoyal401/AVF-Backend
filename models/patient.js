const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
              return /^[6-9]\d{9}$/.test(v); // Matches numbers starting with 6-9 and 10 digits long.
            },
            message: props => `${props.value} is not a valid phone number!`,
        },
        unique: true
    },
    age: {
        type: Number,
        required: false,
        min: [1, 'Cant record below 1'],
    },
    gender: {
        type: String,
        required: false,
        enum: ['Male', 'Female']
    },
    comorbidity: {
        type: String,
        required: false,
        enum: ['Yes', 'No']
    },
    smoking: {
        type: String,
        required: false,
        enum: ['Yes', 'No']
    },
    alcohol: {
        type: String,
        required: false,
        enum: ['Yes', 'No']
    },
    basicDisease: {
        type: String,
        required: false,
        enum: ['Hypertension', 'Diabetes', 'CGN/Unknown']
    },
    avf: {
        type: String,
        required: false,
        enum: ['RCF', 'BCF', 'BBF']
    },
    surgeonExperience: {
        type: String,
        required: false,
        enum: ['>2 years', '<2 years']
    },
    venousCourse: {
        type: String,
        required: false,
        enum: ['Straight', 'Tortuous']
    },
    venousCaliber: {
        type: String,
        required: false,
        enum: ['Good', 'Narrow']
    },
    venousStenosis: {
        type: String,
        required: false,
        enum: ['Yes', 'No']
    },
    typeOfAnastomosis: {
        type: String,
        required: false,
        enum: ['End to Side', 'Side to Side']
    },
    arterialWall: {
        type: String,
        required: false,
        enum: ['Healthy', 'Calcified'] 
    },
    avfGroup: {
        type: String,
        required: false,
        enum: ['Functional', 'Failure']
    },
    veinDiameter: {
        type: Number,
        required: false,
        min: 1.5,
        max: 5
    },
    arteryDiameter: {
        type: Number,
        required: false,
        min: 1.5,
        max: 5
    },
    arteryToVeinDistance: {
        type: Number,
        required: false,
        min: 0.5,
        max: 4.5
    },
    postOpComplications: {
        type: String, 
        required: false,
        enum: ['Thrombosis', 'Stenosis', 'Infection', 'Pseudoaneurysm', 'Lymphocele', 'None']
    },
    postOpThrill: {
        type: String,
        required: false,
        enum: ['Good', 'Weak']
    },
    postOpBruit: {
        type: String,
        required: false,
        enum: ['Good', 'Weak']
    },
}, { timestamps: true });

patientSchema.pre('findByIdAndUpdate', function (next) {
    this.options.runValidators = true;
    next();
});
  

module.exports = mongoose.model('Patient', patientSchema);