const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sirname: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    blood: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    positive: {
        type: String,
        required: true
    },
    negative: {
        type: String,
        required: true
    },
    agreement: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Doner = mongoose.model("Doner",donerSchema);

module.exports = Doner;