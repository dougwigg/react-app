import * as React from 'react';
import axios from 'axios';
import { fetchMusixMatch } from './song-utils';

const SearchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_TRACKS':
      return {
        ...state,
        trackList: action.trackList,
        heading: 'Search Results'
      };
    case 'INITIAL_LOAD':
      return {
        ...state,
        trackList: action.trackList,
        heading: "Today's Top 10 Tracks (U.S.)"
      };
    default:
      return state;
  }
};

export const SearchProvider = props => {
  const initialState = {
    trackList: [],
    heading: "Today's Top 10 Tracks (U.S.) - Lyrics generally NSFW :0",
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const getTrackList = async () => {
    const source = axios.CancelToken.source();
    try { 
      // Query the track title
      const top10Query = `chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1`;
      const res = await fetchMusixMatch(top10Query, source.CancelToken);

      dispatch({
        type: 'INITIAL_LOAD',
        heading: "Today's Top 10 Tracks",
        payload: res.data.message.body.track_list,
        trackList: res.data.message.body.track_list
      });
    } catch(e) {
      // cancel the axios request
      source.cancel();
    }
  };

  React.useEffect(() => {
    getTrackList();
  }, []);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
