import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { songsOperations } from '../../redux/songs';
import './Form.scss';
import SearchIcon from '../SearchIcon';
import { emptyFormInfo } from '../ToasterInfo';
import { ToastContainer } from 'react-toastify';

export default function Form() {
  const [query, setQuery] = useState('');

  const handleChangeQuery = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query === '') {
      emptyFormInfo();
      return;
    }

    searchSongs(query);

    setQuery('');
  };
  const dispatch = useDispatch();

  const searchSongs = useCallback(
    query => dispatch(songsOperations.fetchSearchSongs(query)),
    [dispatch],
  );

  return (
    <>
      <ToastContainer />
      <h2 className="SearchSongsList__descr">Find a song for yourself</h2>
      <form className="SearchSongsList__form" onSubmit={handleSubmit}>
        <input
          className="SearchSongsList__input"
          value={query}
          onChange={handleChangeQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search song"
        />
        <button className="Form__button" type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
}
