const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, "..", 'public');
const port = process.env.PORT || 3001;

const axios = require('axios');
const cors = require('cors');

const app = express();

// when you run your express serve locally, you'll run it like this, passing along your api key: 
// REACT_APP_API_KEY=yourapikeynoquotes node server.js
const API_KEY = process.env.REACT_APP_API_KEY;
//const searchTerm = "sunshine";

app.use(express.static(publicPath));
// goodbye, stupid cors errors
app.use(cors());

app.get('/:query', (req, res) => {
  axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${req.params.query}`)
  .then((response) => {
    // get the data from the api and send as json 
    res.json(response.data.Search);
  })
  .catch((error)=> {
    res.json(error)
  });
})

app.listen(port, () => console.log(`Tiny server listening on port ${port}!`))