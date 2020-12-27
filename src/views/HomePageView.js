import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { songsOperations, songsSelectors } from '../redux/songs';
import TopSongsList from '../components/TopSongsList';
import Loader from 'react-loader-spinner';

export default function HomePageView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(songsOperations.fetchTopSongs());
  }, [dispatch]);

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
      {loading && <TopSongsList />}
    </>
  );
}
