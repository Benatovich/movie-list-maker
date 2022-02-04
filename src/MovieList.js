import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return (
    <div className='list-section'>
      {
        props.movies.map(movie => <Movie
          key={movie.id}
          movie={movie}
          deleteMovie={props.deleteMovie}
        />)
      }
    </div>
  );
}