import React from 'react'; 
import Movie from './Movie';

export default class MovieList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.results.map((movie, index) => (
          <Movie movie={movie} key={index}></Movie>
        ))}
      </ul>
    );
  }
}