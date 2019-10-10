
const mongoose = require('mongoose');
const User = require('./models/User');
const bodyParser = require('body-parser');


const express = require('express');
const app = express();

// ------------------------------------MONGODB -------------------------------------------
mongoose.connect("mongodb+srv://sopa:Megaman69!@cluster0-spcvx.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then( () => {
    console.log('Connected to database!');
  }).catch( () => {
  console.log('Connection Failed!');
});

const newUser  = new User({
  firstName: 'Soup',
  lastName: 'Peou',
  isActive: 1
});

newUser.save();

// ------------------------------------ END MONGODB ----------------------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));



app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, " +
    "Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();

});

// app.get('/',(req, res) => {
//
//   res.send('it works!');
//
// });

app.listen(4500, () => {
  console.log(`
    listening on port 4500
  `)

});

module.exports = app;


// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// });
//
// app.use((req, res, next)=> {
//   res.send('hello from express!');
//
// });
