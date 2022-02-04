import React from 'react';

export default function Movie(props) {
  return (
    <div 
      className='movie' style={{ backgroundColor: props.movie.color }}
      onClick={() => props.deleteMovie && props.deleteMovie(props.movie.id)}>
      <h3>{props.movie.title}</h3>
      <p>{props.movie.year}</p>
      <p>directed by {props.movie.director}</p>
    </div>
  );
}
