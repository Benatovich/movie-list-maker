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

  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
