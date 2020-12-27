import axios from 'axios';
import songsActions from './songs-actoins';
const apiKey = '71f06350a280cd6ba408578095904da8';
axios.defaults.baseURL = 'https://ws.audioscrobbler.com/2.0';

const fetchTopSongs = () => async dispatch => {
  dispatch(songsActions.fetchTopSongsRequest());

  try {
    const { data } = await axios.get(
      `?method=tag.gettoptracks&api_key=${apiKey}&format=json`,
    );
    await dispatch(songsActions.fetchTopSongsSuccess(data.tracks.track));
  } catch (error) {
    await dispatch(songsActions.fetchTopSongsError());
  }
};

const fetchSearchSongs = query => async dispatch => {
  dispatch(songsActions.fetchSeatchSongsRequest());

  try {
    const { data } = await axios.get(
      `?method=track.search&track=${query}&api_key=${apiKey}&format=json`,
    );
    await dispatch(
      songsActions.fetchSeatchSongsSuccess(data.results.trackmatches.track),
    );
  } catch (error) {
    await dispatch(songsActions.fetchSeatchSongsError());
  }
};

const fetchArtistDetails = artist => async dispatch => {
  dispatch(songsActions.fetchArtistDetailsRequest());

  try {
    const { data } = await axios.get(
      `?method=artist.getinfo&artist=${artist}&api_key=${apiKey}&format=json`,
    );
    await dispatch(songsActions.fetchArtistDetailsSuccess(data.artist));
  } catch (error) {
    await dispatch(songsActions.fetchArtistDetailsError());
  }
};

export default { fetchTopSongs, fetchSearchSongs, fetchArtistDetails };
