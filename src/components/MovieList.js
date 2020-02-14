import React from 'react'; 
import axios from 'axios';
//import config from '../apiConfig.js';

import Movie from './Movie';

const searchTerm = "oregon";
//const apiKey = process.env.NODE_ENV === 'production' ? process.env.API_KEY : config.API_KEY;
const apiKey = process.env.API_KEY;

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  getMovies(){
    axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&plot=full`)
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