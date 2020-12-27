import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { songsSelectors } from '../../redux/songs';
import routes from '../../routes';
import shortid from 'shortid';
import './SearchSongsList.scss';

export default function SearchSongsList() {
  const searchSongs = useSelector(songsSelectors.getSearchSongs);
  const history = useHistory();
  const location = history.location.pathname;

  return (
    <>
      <ul className="SearchSongsList">
        {searchSongs.map(({ artist, name }) => (
          <li className="SearchSongsList__item" key={shortid()}>
            <h2 className="SearchSongsList__name">{name}</h2>
            <Link
              className="SearchSongsList__link"
              to={{
                pathname: `${routes.artist}/${artist}`,
                state: {
                  from: location,
                },
              }}
            >
              {artist}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
