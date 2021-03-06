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

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.params, req.body)
    db.Workout.findByIdAndUpdate(req.params.id, {
        $push: {
          exercises: req.body
        }
      }, {
        new: true,
        runValidators: true
      })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.get("/api/workouts", (req, res) => {
    console.log("Here")
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  })
  
  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .limit(10)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  })

module.exports = router;