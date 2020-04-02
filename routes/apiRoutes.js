const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", function(req, res){
    db.Workout.find({})
    .then(dbWorkout=>{
        // console.log(dbWorkout)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
})

//mongoose functions to use:
//create
//findOneAndUpdate or findByIdAndUpdate or UpdateOne
//db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true })


module.exports = router;