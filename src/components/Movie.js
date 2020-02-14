import React from 'react'; 

export default class Movie extends React.Component {
  render() {
    return (
      <li> 
        <h2>{this.props.movie.Title}</h2>
        <p>{this.props.movie.Year}</p>
      </li>
    )
  }
}

