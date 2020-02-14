import React from 'react'; 
import axios from 'axios';
import config from '../config.js';

import Movie from './Movie';

const searchTerm = "oregon";

// When the app deploys to Heroku, process.env.NODE_ENV is set to "production". When you run your app locally,
// the env is set to "development". The expression below checks if it's production. If so, it sets API_KEY variable
// using the env var I set in Heroku. If not, it finds the API Key in the config file in our 
// local copy (that we don't push to github)
const API_KEY = process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_API_KEY}` : config.API_KEY;

console.log(config.API_KEY)

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  getMovies(){
    // Using the api key to request movies using the search term "oregon" 
    axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&plot=full`)
    .then((response) => {
      this.setState({results: response.data.Search}); 
    })
    .catch((error)=> {
      this.setState({error: error});
    })
    .finally(()=>{
      console.log(this.state.results);
    });
  }

  componentDidMount = ()=> {
    this.getMovies();
  }

  render() {
    const styles = {
      listStyleType: "none", 
      padding: 0
    }
    return (
      <ul style={styles}>
        {this.state.results.map((movie, index) => (
          <Movie movie={movie} key={index}></Movie>
        ))}
      </ul>
    );
  }
}