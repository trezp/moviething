import React from 'react'; 

export default class Movie extends React.Component {
  render() {
    const movieUrl = `https://www.imdb.com/title/${this.props.movie.imdbID}`;
    return (
      <li> 
        <a href={movieUrl} rel="noopener noreferrer" target="_blank">
          {this.props.movie.Title}, {this.props.movie.Year}
        </a>
      </li>
    )
  }
}

