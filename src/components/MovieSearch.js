import React from 'react';
import MovieList from './MovieList'

import '../App.css';

import axios from 'axios';

export default class MovieSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      searchTerm: 'butterfly',
      searchResults: []
    };
  }

  componentDidMount = ()=> {
    this.getMovies();
  }

  getMovies(){
    axios.get(`http://localhost:3001/${this.state.searchTerm}`)
    .then((response) => {
      this.setState({searchResults: response.data}); 
    })
    .catch((error)=> {
      this.setState({error: error});
    })
    .finally(()=>{
      console.log(this.state.searchResults);
    });
  }

  handleSearch = (event)=> {
    this.getMovies();
    this.setState({inputValue: ''});

  }

  handleChange = (event)=> {
    this.setState({inputValue: event.target.value});
    this.setState({searchTerm: event.target.value});
  }

  render() {
    const searchStyles = {
      paddingTop: "30px",
    }
    return (
      <div>
        <form class="search">
          <input aria-label="search" id="movieSearch" type="text" 
            value={this.state.inputValue}
            onChange={this.handleChange}>
          </input>
          <button type="button" onClick={this.handleSearch}>Search</button>
        </form>
        
        <MovieList results={this.state.searchResults}></MovieList>
      </div>
    );
  }
}