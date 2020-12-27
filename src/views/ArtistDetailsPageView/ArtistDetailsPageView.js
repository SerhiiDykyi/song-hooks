import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { songsOperations, songsSelectors } from '../../redux/songs';
import ArtistDetail from '../../components/ArtistDetail';
import Loader from 'react-loader-spinner';
import routes from '../../routes';
import './ArtistDetailsPage.scss';

export default function ArtistDetailsPage() {
  const match = useRouteMatch();
  const artistName = match.params.artistName;

  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(songsOperations.fetchArtistDetails(artistName));
  }, [dispatch, artistName]);

  const loading = useSelector(songsSelectors.getLoading);

  const handleGoBack = () => {
    history.push(history?.location?.state?.from || routes.home);
  };

  return (
    <>
      <button
        className="ArtistDetailsPage__btn"
        type="button"
        onClick={handleGoBack}
      >
        Go back
      </button>
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
