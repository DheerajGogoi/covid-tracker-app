const express = require('express');
const Doner = require("../models/doner.model");
const router = express.Router();

router.route("/doner/find").get(function(req,res){
    Doner.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route("/doner/find/:id").get(function(req,res){
    const id = req.params.id;
    Doner.findById(id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route("/doner/add").post(function(req,res){
    const doner = new Doner({
        name: req.body.name,
        sirname: req.body.sirname,
        age: req.body.age,
        district: req.body.district,
        blood: req.body.blood,
        mobile: req.body.mobile,
        sex: req.body.sex,
        positive: req.body.positive,
        negative: req.body.negative,
        agreement: req.body.agreement,
    });
    const doner = new Doner({
        ...req.body
    })

    let {name, sirname ,age} = { ...req.body };

    doner.save()
    .then((val) => {
        Doner.find()
        .then(data => res.json(data))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch((err) => {
        console.log(err);
    });
})


module.exports = router;