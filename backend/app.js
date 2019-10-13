const mongoose = require('mongoose');
const User = require('./models/User');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const bcrypt = require('bcryptjs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

mongoose.Promise = global.Promise;

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, " +
    "Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();

});

// ------------------------------------MONGODB -------------------------------------------

mongoose.connect("mongodb+srv://sopa:Megaman69!@cluster0-spcvx.mongodb.net/login?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then( () => {
    console.log('Connected to database!');
  }).catch( () => {
  console.log('Connection Failed!');
});

// ------------------------------------ END MONGODB ----------------------------------------------------------

app.post('/register', (req , res) => {
  const newUser = new User();

  newUser.email = req.body.email;
  newUser.password = req.body.password;

  bcrypt.genSalt(10, (err, salt)=> {
    bcrypt.hash(newUser.password, salt, (err,hash)=>{

      if(err) {return err}

      newUser.password = hash;
      newUser.save().then(userSaved => {
        res.send('USER SAVED');
      }).catch( err => {
        res.send(err);
      });
    });
  });
});

app.post('/login', (req, res)=>{
  User.findOne({ email: req.body.email }).then(user => {
    if(user){
      bcrypt.compare(req.body.password, user.password, (err, matched) => {
        if(matched){
          res.send('USER LOGGED IN');
        } else {
          res.send('USER DIDN &#39;T LOG IN');
        }
      });
    }
  });
});

app.post('/users', (req, res) => {

  const newUser  = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    isActive: req.body.isActive
  });

  newUser.save().then((savedUser)=>{
    res.send('USER SAVED BY ME!');
  }).catch(err=>{
    res.status(404).send('USER NOT SAVED');
  });
});

app.get('/users', (req,res)=>{
  User.find({}).then( users => {
    res.status(200).send(users);
  });
});

app.put('/users/:id',(req, res) => {
  const id = req.params.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  User.findOne({ _id : id})
  .then(user => {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;

    user.save().then(userSaved => {
      res.send(userSaved);
    }).catch( err =>
      console.log(err));
  });
});

app.delete('/users/:id',(req, res) =>{
  User.findByIdAndRemove({_id: req.params.id}).then( user => {
    user.remove().then(userRemoved => {
      res.send(`user ${userRemoved.firstName} removed`);
    });
  });
});

app.listen(4500, () => {
  console.log(`
    listening on port 4500
  `)
});
module.exports = app;

/////////// CODE WASTE ZONE ////////////////////////

// app.get('/',(req, res) => {
//
//   res.send('it works!');
//
// });

// app.patch('/users/:id',( req, res) => {
//   const id = req.params.id;
//   const firstName = req.body.firstName;
//   const lastName = req.params.lastName;
//
//   User.findByIdAndUpdate(id, {$set: { firstName: firstName, lastName: lastName }}, {new: true} )
//     .then(savedUser => {
//       res.send('USER SAVED BY PATCH');
//     });
// });


// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// });
//
// app.use((req, res, next)=> {
//   res.send('hello from express!');
//
// });
