const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const surgeonSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true});

surgeonSchema.pre('save', function(next){
    const user = this;
    const salt = bcrypt.genSaltSync(8);
    const encryptedPassword = bcrypt.hashSync(user.password, salt);
    user.password = encryptedPassword;
    next(); 
});

surgeonSchema.methods.comparePassword = function comparePassword(password){
    return bcrypt.compareSync(password, this.password);
};

const Surgeon = mongoose.model('Surgeon', surgeonSchema);

module.exports = Surgeon;