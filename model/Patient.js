const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    gender: String,
    age: Number,
    language: String,
    operation: String
})

const Patient = mongoose.model("Patient", patientSchema)
module.exports = Patient
