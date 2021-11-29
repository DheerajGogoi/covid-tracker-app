const express = require('express');
const Request = require("../models/request.model");
const router = express.Router();

router.route("/request/find").get(function(req,res){
    Request.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
    }
)

router.route("/request/find/:id").get(function(req,res){
    const id = req.params.id;
    Request.findById(id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
    }
)

router.route("/request/add").post(function(req,res){
    const request = new Request({
        name: req.body.name,
        sirname: req.body.sirname,
        age: req.body.age,
        district: req.body.district,
        mobile: req.body.mobile,
        message: req.body.message,
        agreement: req.body.agreement,
    });
    request.save()
    .then((val) => {
        Request.find()
        .then(data => res.json(data))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch((err) => {
        console.log(err);
    });
})

module.exports = router;