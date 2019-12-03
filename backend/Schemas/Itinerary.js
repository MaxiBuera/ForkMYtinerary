var mongoose = require('mongoose');

var Schema = mongoose.Schema;


//   newItinerary.save(function (err, newItinerary) {
//     if (err) return console.error(err);
//     console.log("Guarde un itinerario en la DB! Se llama ", newItinerary.title);
// });


//POSIBLE SCHEMA
var itinerarySchema = new Schema({
    title: String,
    city: String,
    country: String,
    username: String,
    userPhoto: String,
    rating: Number,
    duration: Number,
    price: String,
    hashtags: Array,
    activities: Array
});

console.log("Soy Itinerary.js")

var Itinerary = mongoose.model('Itinerary', itinerarySchema);

//MUY IMPORTANTE, SI NO ESTÁ RUTEADO HACIA EL SERVER NO LEVANTA LOS SCHEMAS

// var newItinerary = new Itinerary({
//     title: 'Placa\'s Plus Cocktails',
//     city: "Barcelona",
//     country: "Spain",
//     username: "BoozyBabeXOXO",
//     userPhoto: "https://i.imgur.com/GI4bb2T.png",
//     rating: 1.8,
//     duration: 12,
//     price: "$$$",
//     hashtags: ['#Cocktails', '#Placa\'s', '#Barcelona'],
//     activities: [
//         {
//             Name: "Virreina Square",
//             Adress: "Carrer de l'Or, 42, 08012 Barcelona",
//             Photo: "",
//             Time: 1,
//             Cost: 5,
//             Comments: "Pretty Square"
//         }
//         , {
//             Name: "Placa Revolucio",
//             Adress: "Plaça Revolució de Setembre 1868, 12, 08012 Barcelona",
//             Photo: "",
//             Time: 1,
//             Cost: 5,
//             Comments: ""
//         }, {
//             Name: "Plaça del Sol",
//             Adress: "Plaça del Sol, 08012 Barcelona",
//             Photo: "",
//             Time: 3,
//             Cost: 40,
//             Comments: "Food is super cheap, the only reason it's so expensive is because we stayed and kept ordering canyas (beers) :L Really cool square, people come and sit with their own beers and chill in the sun. Super Guay!"
//         }, {
//             Name: "Vila de Gràcia Square",
//             Adress: "Vila de Gracia Square 08012 Barcelona",
//             Photo: "",
//             Time: 1,
//             Cost: 5,
//             Comments: "Adorable kids with their families running around everywhere and playing"
//         }, {
//             Name: "Bobby Gin Bar",
//             Adress: "Carrer de Francisco Giner, 47, 08012 Barcelona",
//             Photo: "bobby-gin-bar.jpg",
//             Time: 1.5,
//             Cost: 25,
//             Comments: "'God Save the Gin!' - Best slogan ever created, ever."
//         }, {
//             Name: "Cocktail at the Old Fashioned Gin Tonic & Cocktail Bar",
//             Adress: "Carrer de Santa Teresa, 1, 08012 Barcelona",
//             Photo: "old-fashioned-cocktail-bar.jpg",
//             Time: 1.5,
//             Cost: 13,
//             Comments: "Amaaazing cocktails! Cute barmen in bowties and a reallly small but intimate venue. One cocktail comes in a gumball machine!"
//         }, {
//             Name: "Restaurant Hoffman",
//             Adress: "Carrer de la Granada del Penedès, 14, 08006 Barcelona",
//             Photo: "",
//             Time: 3,
//             Cost: 70,
//             Comments: "NOOOMMM, great wine list, amazing tapas, never seen the patatas bravas done the way they do it. Absolutely delish!"
//         }
//     ]
// });

// console.log(newItinerary.title, newItinerary.rating);

// newItinerary.save(function (err, newItinerary) {
//     if (err) return console.error(err);
//     console.log("Guarde un itinerario en la DB! Se llama ", newItinerary.title);
// });




module.exports = Itinerary;