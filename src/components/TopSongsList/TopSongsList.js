import React from 'react';
import { useSelector } from 'react-redux';
import { songsSelectors } from '../../redux/songs';
import { Link, useHistory } from 'react-router-dom';
import shortid from 'shortid';
import routes from '../../routes';
import './TopSongsList.scss';

export default function TopSongsList() {
  const topSongs = useSelector(songsSelectors.getTopSongs);
  const history = useHistory();
  const location = history.location.pathname;

  return (
    <>
      <h2 className="TopSongsList__descr">
        List of the most popular songs on today
      </h2>
      <ul className="TopSongsList">
        {topSongs.map(({ artist, name, image }) => (
          <li key={shortid()} className="TopSongsList__item">
            <h2 className="TopSongsList__name">{name}</h2>
            <h3 className="TopSongsList__artist">{artist.name}</h3>
            <img
              className="TopSongsList__img"
              src={image[2]['#text']}
              alt={name}
            />
            <Link
              className="TopSongsList__link"
              to={{
                pathname: `${routes.artist}/${artist.name}`,
                state: {
                  from: location,
                },
              }}
            >
              {artist.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
