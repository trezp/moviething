import React from 'react'; 
import Movie from './Movie';

function MovieList(props){
  if(!props.results){
    return (
      <p className="error">Oops! Your search didn't yield any results. Please try again.</p>
    )
  } 

  return (
    <ul>
      {props.results.map((movie, index) => (
        <Movie movie={movie} key={index}></Movie>
      ))}
    </ul>
  );
}

export default MovieList; 