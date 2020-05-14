import * as React from 'react';
import axios from 'axios';
import SearchContext from './SearchContext';
import styles from './Search.module.css';

const Search = (props) => {

    const [trackTitle, setTrackTitle] = React.useState('');
    const onSearchChange = e => {
        setTrackTitle(e.target.value);
    };

    const findTrack = async (dispatch, e) => {
        e.preventDefault();

        const CORS_URL = 'https://stark-dusk-62893.herokuapp.com/';
        const BASE_URL = 'http://api.musixmatch.com/ws/1.1/';
        const API_KEY = '&apikey=YOUR_KEY';

        const res = await axios.get(`${CORS_URL}${BASE_URL}track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc${API_KEY}`);

        console.log(res.data.message.body.track_list);
  
        debugger;
        dispatch({
            header: 'TitleSearch',
            type: 'SEARCH_TRACKS',
            payload: res.data.message.body.track_list
        });

        setTrackTitle('');
    };

    return (
        <SearchContext.Consumer>
            {value => {
                const { dispatch } = value;
                return (
                    <div className={styles.card}>
                        <h2>Song Lyrics <span className={styles.desc}> - Find the lyrics for any song</span></h2>
                        <form className={styles.form} onSubmit={findTrack.bind(this, dispatch)}>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Song title..."
                                name="trackTitle"
                                value={trackTitle}
                                onChange={onSearchChange}
                            />
                            <button type="submit" className={styles.btn}>
                                Search Songs
                            </button>
                        </form>
                    </div>
                );
            }}
        </SearchContext.Consumer>
    );
}

export default Search;