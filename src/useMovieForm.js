import { useState } from 'react';

export function useMovieForm() {
  const [titleForm, setTitleForm] = useState('');
  const [directorForm, setDirectorForm] = useState('');
  const [yearForm, setYearForm] = useState('');
  const [colorForm, setColorForm] = useState('');

  return {
    titleForm, setTitleForm,
    directorForm, setDirectorForm,
    yearForm, setYearForm,
    colorForm, setColorForm,
  };
}