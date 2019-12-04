const express = require('express')
const router = express.Router();
const User = require('../Schemas/User.js')
const key = require("../config/config");
const jwt = require("jsonwebtoken");
const passport = require('passport');

router.get('/', async (req, res) => {
    var usersFromRoutes = await User.find(function (err, allUsers) {
        if (err) return console.error(err);
        console.log("Todos los users desde User.find");
    })
    res.json({ usersFromRoutes })
});


router.get('/:id', async (req, res) => {
    var singleUserFromRoutes = await User.find({ 
        "username": req.params.id
    },
    function (err, singleUser) {
        if (err) return console.error(err);
        console.log("Printing singleUser");
    })
    res.json({ singleUserFromRoutes })
});


router.post('/adduser', async function (req, res) {
    try {
        const user = new User(req.body);
        await user.save();
        res.send(user);
    } catch (e) {
        res.send(e);
    }
});


router.post('/login', async function (req, res) {
    await User.find({ "username": req.body.username }, async function (err, userFound) {
        if (userFound.length != 0 && userFound[0].password === req.body.password) {
            const payload = {
                id: userFound[0].id,
                username: userFound[0].username
                //avatarPicture: userFound[0].avatarPicture
            };
            const options = { expiresIn: 2592000 };
            jwt.sign(
                payload,
                key.secretOrKey,
                options,
                (err, token) => {
                    if (err) {
                        res.json({
                            success: false,
                            token: "There was an error"
                        });
                    } else {
                        res.json({
                            success: true,
                            token: token
                        });
                    }
                }
            );
        } else {
            return res.send('x')
        }
    })
});

router.get('/test', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log("estoy")
    User.findOne({ _id: req.user.id })
        .then(user => {
            res.json(user);
        })
        .catch(err => res.status(404).json({ error: "User does not exist!" }));
}
);

router.get('/auth/google', passport.authenticate('google', { scope: ["profile"] }));

  router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
      console.log("que paso?")
});

router.post("/getfavourites", (req, res) => {
    let user = req.body.user.email;
    console.log("back", user);
  
    User.findOne({ email: user })
        .then(user => {
            let itineraries = user.favourite;
    
            return itineraries;
        })
        .then(itineraries => {
                Itinerary.find({ _id: { $in: itineraries } })
                
                .then(itinerariesFull => {
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

/*
router.post('/addUserFavoriteItinerary', async function (req, res) {
    try {
        const user = new User(req.body);
        await user.save();
        res.send(user);
    } catch (e) {
        res.send(e);
    }
});*/

router.put('/:id', async function(req, res){
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send(user);
    } catch(e){
        res.send(e);
    }
});



module.exports = router;