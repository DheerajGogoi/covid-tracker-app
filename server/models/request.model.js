const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
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
    mobile: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    agreement: {
        type: String,
        default: true
    }
}, {timestamps: true});

const Request = mongoose.model("Request",requestSchema);

module.exports = Request;