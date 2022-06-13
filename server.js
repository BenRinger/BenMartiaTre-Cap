const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


        


//connect to mogodb
const dbURI = 'mongodb+srv://Martia:nchantedlily0785@capstone.2gv0g.mongodb.net/capstoneretryWrites=true&w=majority';
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('connected to mongoDB');})


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });




const lateNightBrewRouter = require('./routes/lateNightBrewPlace');
const foodRouter = require('./routes/foodRestaurant');
const eventRouter = require('./routes/eventRoutes');
const historyRouter = require('./routes/historyRoutes');

app.use('/brew', lateNightBrewRouter);
app.use('/food', foodRouter);
app.use('/events', eventRouter);
app.use('/historical', historyRouter);


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});