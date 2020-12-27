import { createAction } from '@reduxjs/toolkit';

const fetchTopSongsRequest = createAction('songs/fetchSongsRequest');
const fetchTopSongsSuccess = createAction('songs/fetchSongsSuccess');
const fetchTopSongsError = createAction('songs/fetchSongsError');

const fetchSeatchSongsRequest = createAction('songs/fetchSeatchSongsRequest');
const fetchSeatchSongsSuccess = createAction('songs/fetchSeatchSongsSuccess');
const fetchSeatchSongsError = createAction('songs/fetchSeatchSongsError');

const fetchArtistDetailsRequest = createAction(
  'songs/fetchArtistDetailsRequest',
);
const fetchArtistDetailsSuccess = createAction(
  'songs/fetchArtistDetailsSuccess',
);
const fetchArtistDetailsError = createAction('songs/fetchArtistDetailsError');

export default {
  fetchTopSongsRequest,
  fetchTopSongsSuccess,
  fetchTopSongsError,
  fetchSeatchSongsRequest,
  fetchSeatchSongsSuccess,
  fetchSeatchSongsError,
  fetchArtistDetailsRequest,
  fetchArtistDetailsSuccess,
  fetchArtistDetailsError,
};
