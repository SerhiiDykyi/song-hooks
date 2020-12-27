const getTopSongs = state => state.songs.topSongs;
const getLoading = state => state.songs.isloading;
const getSearchSongs = state => state.songs.searchSongs;
const getArtistDetais = state => state.songs.artistDetails;

export default {
  getTopSongs,
  getLoading,
  getSearchSongs,
  getArtistDetais,
};
