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

router.put("/workouts/:id", (req, res) => {
    console.log(req.params, req.body)
    Workout.findByIdAndUpdate(req.params.id, {
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
        res.status.json(err);
      });
  });
  
  router.get("/workouts", (req, res) => {
    console.log("Here")
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status.json(err);
      });
  })
  
  router.get("/workouts/range", (req, res) => {
    Workout.find({})
      .limit(10)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status.json(err);
      });
  })

module.exports = router;