import React from 'react'; 
import axios from 'axios';
import apiKey from '../apiConfig.js';

import Movie from './Movie';

const searchTerm = "oregon";

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  getMovies(){
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&plot=full`)
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