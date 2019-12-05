const express = require("express");
const router = express.Router();
const User = require('../Schemas/User.js')
const Itinerary = require("../Schemas/Itinerary.js");

router.post("/getfavourites", (req, res) => {
  let user = req.body.user.email;
  console.log( user);

  User.findOne({ email: user })
    .then(user => {
      let itineraries = user.favourite;

      return itineraries;
    })
    .then(itineraries => {
      Itinerary.find({ _id: { $in: itineraries } }).then(itinerariesFull => {
        res.status(200).send(itinerariesFull);
        return itinerariesFull;
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.post("/deleteFavourite", (req, res) => {
  User.findOneAndUpdate(
    { email: req.body.user.email },
    { $pull: { favourite: req.body.id } },
    { upsert: true }
  )

    .then(account => {
      let favouriteArray = [];
      let oldArray = user.favourite;
      oldArray.forEach(item => {
        if (item != req.body.id) {
          favouriteArray.push(item);
        }
      });

      return favouriteArray;
    })
    .then(favouriteArray => {
      Itinerary.find({ _id: { $in: favouriteArray } }).then(itinerariesFull => {
        res.status(200).send(itinerariesFull);
        return itinerariesFull;
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

export const removeFavourite = (id, user) => dispatch => {
  axios
    .post("/favourite/deleteFavourite", { id: id, user: user })
    .then(res => {
      console.log("this should be the itineraries after deleting", res.data);
      dispatch({
        type: GET_FAVOURITES,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error.response);
    });
};

module.exports = router;