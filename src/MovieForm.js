import React from 'react';

export default function MovieForm({
  setTitleForm, titleForm,
  setDirectorForm, directorForm,
  setYearForm, yearForm,
  setColorForm, colorForm,
  submitMovie
}) {
  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = {
      title: titleForm,
      director: directorForm,
      year: yearForm,
      color: colorForm,
    };

    submitMovie(newMovie);

    setTitleForm('');
    setDirectorForm('');
    setYearForm('');
    setColorForm('');
  }

  return (
    <div className='form-section'>
      <form className='movie-form' onSubmit={handleSubmit}>
        <label>
            Title: 
          <input required value={titleForm} onChange={e =>
            setTitleForm(e.target.value)}/>
        </label>
        <label>
            Director: 
          <input required value={directorForm} onChange={e =>
            setDirectorForm(e.target.value)}/>
        </label>
        <label>
            Year: 
          <input required type='number' value={yearForm} onChange={e =>
            setYearForm(e.target.value)}/>
        </label>
        <label>
            Color: 
          <select required value={colorForm} onChange={e =>
            setColorForm(e.target.value)}>
            <option value="lightgreen">Green</option>
            <option value="lightblue">Blue</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
