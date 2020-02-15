const express = require('express')
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

const API_KEY = process.env.REACT_APP_API_KEY;
const searchTerm = "sunshine";

app.use(cors());

app.get('/', (req, res) => {
  axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`)
  .then((response) => {
    res.json(response.data.Search);
  })
  .catch((error)=> {
    res.json(error)
  });
})

app.listen(port, () => console.log(`Tiny server listening on port ${port}!`))