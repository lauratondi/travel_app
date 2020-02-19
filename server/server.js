// Back-end framework
const express = require('express');

// Initialize Express in to a variable called app
const app = express();


const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// We create a variable for the port to be able to run the server
const port = process.env.PORT || 5000;


// We want our app listen to that port
app.listen(port, () => {
    console.log("Server is running on" + port + "port");
});

// DB configuration and interaction with our MongoDb database
const db = require('./keys').mongoURI;
const mongoose = require('mongoose')

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('Connection to Mongo DB estabilished'))
    .catch(err => console.log(err));



app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'))
app.use('/user', require('./routes/user'))
