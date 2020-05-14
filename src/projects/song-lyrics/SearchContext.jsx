import * as React from 'react';
import axios from 'axios';

const SearchContext = React.createContext();

const searchReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_TRACKS':
            action.payload && console.log(action.payload[0]);
            return {
                ...state,
                trackList: action.payload,
                heading: 'Search Results'
            };
        case 'INITIAL_LOAD':
            return {
                ...state,
                trackList: action.payload,
            };
        default:
            return state;
    }
};

export const SearchProvider = props => {

    const [trackList, setTrackList] = React.useState([]);

    const initialState = {
        trackList,
        heading: "Today's Top 10 Tracks (U.S.)",
        dispatch: action => searchReducer(searchState, action)
    };

    const [searchState, dispatch] = React.useReducer(
        searchReducer,
        initialState
    );

    const CORS_URL = 'https://stark-dusk-62893.herokuapp.com/';
    const BASE_URL = 'http://api.musixmatch.com/ws/1.1/';
    const API_KEY = '&apikey=4736991441976b2d91946938bfb85445';

    const getTrackList = async () => {
        // Get the top 10 most popular tracks in the US
        const res = await axios.get(`${CORS_URL}${BASE_URL}chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1${API_KEY}`);

        dispatch({
            type: 'INITIAL_LOAD',
            trackList,
            heading: "Today's Top 10 Tracks",
            payload: res.data.message.body.track_list
        });
    };

    React.useEffect(() => {
        getTrackList();
    }, []);

    console.log(JSON.stringify(searchState));

    return (
        <SearchContext.Provider value={searchState}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContext;
