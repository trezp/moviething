import React from 'react'; 
import axios from 'axios';
//import config from '../config.js';

import Movie from './Movie';

const searchTerm = "oregon";

//const API_KEY = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_KEY : config.API_KEY;
const API_KEY = process.env.REACT_APP_API_KEY;

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