import React from 'react';
import { useSelector } from 'react-redux';
import { songsSelectors } from '../../redux/songs';
import shortid from 'shortid';
import './ArtistDetail.scss';

export default function ArtistDetail() {
  const { name, tags, bio } = useSelector(songsSelectors.getArtistDetais);
  return (
    <>
      {name && (
        <>
          <h2 className="ArtistDetail__descr">Additional information</h2>
          <h3 className="ArtistDetail__artist">{name}</h3>
          <ul className="ArtistDetail__list">
            {tags.tag.map(({ name }) => (
              <li className="ArtistDetail__item" key={shortid()}>
                {name}
              </li>
            ))}
          </ul>
          <p className="ArtistDetail__text">{bio.summary}</p>
        </>
      )}
    </>
  );
}
