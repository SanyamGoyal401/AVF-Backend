const express = require('express');
const Patient = require('../models/patient');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/',auth, async(req, res)=>{
    try{
        const response = await Patient.find({});
        res.json(response);
    }
    catch(error){
        console.log(error);
        res.json(error);
    }
})


router.post('/',auth, async (req, res) => {
    try {
        const newPatient = await Patient.create(req.body);
        res.json(newPatient);
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});

//Update Patient Details
router.put('/:id',auth, async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const newPatient = await Patient.findByIdAndUpdate(id, updateData, {new: true});
        res.json(newPatient);
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});

// Delete Business Page
router.delete('/:id',auth, async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (patient) {
            res.json(patient);
        } else {
            res.status(404).send('Business not found');
        }
    } catch (error) {
        console.log(error);
    }
});

// Display Business Page
router.get('/:route', async (req, res) => {
    try {
        const patient = await Patient.findOne({ route: req.params.route });
        if (patient) {
            res.json(patient);
        } else {
            res.status(404).send('Patient not found');
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
