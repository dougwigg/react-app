import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fetchMusixMatch } from './song-utils';
import SearchContext from './SearchContext';
import styles from './Search.module.css';

const Search = (props) => {
  const [trackTitle, setTrackTitle] = React.useState('');
  const onSearchChange = e => {
    setTrackTitle(e.target.value);
  };
 
  const clearInput = () => {
    setTrackTitle('');
    inputRef.current.focus();
  };
    
  // Handle enter key on input
  const handleEnter = (e) => {
    if (e.key === 'Enter') {    
      setTrackTitle(e.target.value);
    }
  }

  const findTrack = async (dispatch, e) => {
    let source = axios.CancelToken.source();
    try {    
      e.preventDefault();
        
      // Query the track title
      const trackQuery = `track.search?q_track_artist=${trackTitle}&f_has_lyrics=1&s_artist_rating=desc`;
      const res = await fetchMusixMatch(trackQuery, source.CancelToken);
         
      console.log('got title response'); 
      
      dispatch({
        heading: 'TitleSearch',
        type: 'SEARCH_TRACKS',
        title: trackTitle,
        payload: res.data.message.body.track_list,
        trackList: res.data.message.body.track_list
      });
      
    } catch(e) {
      source.cancel();
    }
  };

  const inputRef = React.useRef();

  return (
    <SearchContext.Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <div className={styles.card}>
            <Link to="/react-app/" className={styles.back}>
              &#8678;&nbsp;Homepage
            </Link>
            <h2>Song Lyric Search<span className={styles.desc}> - Search by artist/title</span></h2>
            <form className={styles.form} onSubmit={findTrack.bind(this, dispatch)}>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter title and/or artist name..."
                name="trackTitle"
                value={trackTitle}
                ref={inputRef}
                onKeyDown={handleEnter}
                onChange={onSearchChange}
              />
            </form>
            
            <div className={styles.forClear}>
              { trackTitle.length > 0 && (
                <span className={styles.clear} onClick={clearInput}></span> 
               )}
            </div>
          </div>
        );
      }}
    </SearchContext.Consumer>
  );
}

export default Search;