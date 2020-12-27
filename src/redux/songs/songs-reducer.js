import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import songsActions from './songs-actoins';

const topSongs = createReducer([], {
  [songsActions.fetchTopSongsSuccess]: (_, { payload }) => payload,
});

const searchSongs = createReducer([], {
  [songsActions.fetchSeatchSongsSuccess]: (_, { payload }) => payload,
});

const artistDetails = createReducer([], {
  [songsActions.fetchArtistDetailsSuccess]: (_, { payload }) => payload,
});

const isloading = createReducer(false, {
  [songsActions.fetchTopSongsRequest]: () => false,
  [songsActions.fetchTopSongsSuccess]: () => true,
  [songsActions.fetchTopSongsError]: () => false,
  [songsActions.fetchSeatchSongsRequest]: () => false,
  [songsActions.fetchSeatchSongsSuccess]: () => true,
  [songsActions.fetchSeatchSongsError]: () => false,
  [songsActions.fetchArtistDetailsRequest]: () => false,
  [songsActions.fetchArtistDetailsSuccess]: () => true,
  [songsActions.fetchArtistDetailsError]: () => false,
});

export default combineReducers({
  topSongs,
  isloading,
  searchSongs,
  artistDetails,
});
