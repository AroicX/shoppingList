const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// add routes
const items = require('./routes/api/items');

const app = express();

//bodyParser middleware

app.use(bodyParser.json());

// db config
const db = require('./config/keys').mongoURI;
//const url = process.env.MONGODB_URI || "mongodb://localhost:27017/mern"

//connect to mongodb
mongoose.connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// use routes

app.use( '/api/items', items);

//serve static assets if in production
if (process.env.NODE_ENv === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>{
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });


}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
