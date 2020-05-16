import * as React from 'react';

import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import axios from 'axios';
import { fetchMusixMatch } from './song-utils';
import Spinner from './Spinner';
import styles from './Lyrics.module.css';

const Lyrics = props => {

  const [track, setTrack] = React.useState({});
  const [lyrics, setLyrics] = React.useState({});

  // song id from param
  const songId = props.match.params.songId;

  // Get the lyrics to a particular track
  const getLyrics = React.useCallback(async (CancelToken) => {
    const lyricsRes = await fetchMusixMatch(`track.lyrics.get?track_id=${songId}`, CancelToken);
    setLyrics(lyricsRes.data.message.body.lyrics);
  },[songId]);

  // Get the track title
  const getTrackName = React.useCallback(async (CancelToken) => {
    const trackRes = await fetchMusixMatch(`track.get?track_id=${songId}`, CancelToken);
    setTrack(trackRes.data.message.body.track);
  },[songId]);

  React.useEffect(() => {
    let source = axios.CancelToken.source();
    getLyrics(source.CancelToken);
    getTrackName(source.CancelToken);
    return () => {
       // cancel api request on unmount
      source.cancel();  
    }
  }, [songId, getLyrics, getTrackName]);
 
  const hasTrack = track && 
                   lyrics && 
                   Object.keys(track).length > 0 && 
                   Object.keys(lyrics).length > 0;
  
  if (!hasTrack) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Link to="/react-app/project1" className={styles.back}>
          &#8678;&nbsp;Back to Search
        </Link>

        <h5 className={styles.title}>
          <span className={styles.disc}></span>
          <span>{track.track_name}</span>
          <span className={styles.artist}> by {track.artist_name}</span>
        </h5>

        <div className={styles.grid}>
          <div className={styles.rail}>
            <ul className={styles.info}>
              <li className={styles.infoItem}>
                <div className={styles.infoLabel}>Song Genre:</div>
                {
                  track.primary_genres.music_genre_list.length === 0
                    ? 'A genre is not available for this track.'
                    : track.primary_genres.music_genre_list[0].music_genre.music_genre_name
                }
              </li>
              <li className={styles.infoItem}>
                <div className={styles.infoLabel}>Explicit Words:</div>
                {track.explicit === 0 ? 'No' : 'Yes'}
              </li>
              <li className={styles.infoItem}>
                <div className={styles.infoLabel}>Release Date:</div>
                <Moment format="MM/DD/YYYY">
                  {track.first_release_date}
                </Moment>
              </li>
              <li className={styles.infoItem}>
                <div className={styles.infoLabel}>NOTE:</div>
                  With the FREE Musixmatch API 
                  key you only get 30% of the lyric content.
              </li>
            </ul>
          </div>
          <div className={styles.body}>
            <pre className={styles.lyrics}>
              {lyrics.lyrics_body}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Lyrics;