import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { songsOperations, songsSelectors } from '../../redux/songs';
import ArtistDetail from '../../components/ArtistDetail';
import Loader from 'react-loader-spinner';

export default function ArtistDetailsPage() {
  const match = useRouteMatch();
  const artistName = match.params.artistName;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(songsOperations.fetchArtistDetails(artistName));
  }, [dispatch, artistName]);

  const loading = useSelector(songsSelectors.getLoading);
  return (
    <>
      {!loading && (
        <Loader
          type="Bars"
          color="#ce6c10"
          height={50}
          width={100}
          visible={true}
        />
      )}
      {loading && <ArtistDetail />}
    </>
  );
}
