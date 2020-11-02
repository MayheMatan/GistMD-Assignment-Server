const express = require('express');
const router = express.Router();
const Patient = require('../model/Patient');

router.get("/patient/:id", async (req, res) => {
    const { id } = req.params;
    const patient = await Patient.findById(id)
    res.send(patient)
});

router.post("/patient", async (req, res) => {
    const patient = new Patient(req.body);
    const newlyCreatedPatient = await patient.save();
    res.send(newlyCreatedPatient);
});

module.exports = router;