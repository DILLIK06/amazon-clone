const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
// second parenthesis contain secret key of stripe
const stripe = require("stripe")('sk_test_51Ho4xMKuJ0naCzItSwGlN2DNJq40ZkbXbaNkKz9jFb3G57LZaJc8ZSp5znR5jRjNCLcVxOmd6EK1SunZFvJo6ps500jXmxL6Xt');

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API route_specifier
app.get('/', (requset, response) => response.status(200).send('Hello World'));

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received Boom!! for this amount >>>", total);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, // Subunits of the currency
            currency: "usd",
            description: "From Amazone_cone by clever programmer",
            address
        });
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })
    }
    catch(error){
        console.log("stripe error", error);
        response.status(500);
    }
});

// - Listen Command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-3328f/us-central1/api