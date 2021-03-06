import { useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';
import { useMovieForm } from './useMovieForm';


function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const {
    titleForm, setTitleForm,
    directorForm, setDirectorForm,
    yearForm, setYearForm,
    colorForm, setColorForm,
  } = useMovieForm();

  function submitMovie() {
    const newMovie = {
      id: Math.ceil(Math.random() * Math.random() * 999999),
      title: titleForm,
      director: directorForm,
      year: yearForm,
      color: colorForm
    };

    setAllMovies([...allMovies, newMovie]);

    setTitleForm('');
    setDirectorForm('');
    setYearForm('');
    setColorForm('');
  }

  function deleteMovie(id) {
    const movieIndex = allMovies.findIndex(movie => movie.id === id);

    allMovies.splice(movieIndex, 1);

    setAllMovies([...allMovies]);
  }

  function filterMovies(search) {
    const fewerMovies = allMovies.filter(movie => movie.title.includes(search));

    search ? setFilteredMovies(fewerMovies) : setFilteredMovies(allMovies);
  }

  return (
    <div className="App">
      <div className='current-movie section'>
        <Movie movie={{
          title: titleForm,
          director: directorForm,
          year: yearForm,
          color: colorForm
        }}/>
      </div>
      <div className='movie-filter section'>
        Filter Movies
        <input onChange={(e) => filterMovies(e.target.value)} />
      </div>
      <MovieForm
        submitMovie={submitMovie}
        titleForm={titleForm}
        setTitleForm={setTitleForm}
        directorForm={directorForm}
        setDirectorForm={setDirectorForm}
        yearForm={yearForm}
        setYearForm={setYearForm}
        colorForm={colorForm}
        setColorForm={setColorForm} 
      />
      <MovieList
        movies={filteredMovies.length ? filteredMovies : allMovies}
        deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default App;