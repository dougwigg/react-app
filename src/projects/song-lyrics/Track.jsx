import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './Track.module.css';

const Track = props => {
    const { track } = props;

    return (
        <li className={styles.track}>
            <div className={styles.trackInner}>
                <div className={styles.col}><span className={styles.label}>Artist:</span> {track.artist_name}</div>
                <div className={styles.col}><span className={styles.label}>Track:</span> {track.track_name}</div>
                <div className={styles.col}><span className={styles.label}>Album:</span> {track.album_name}</div>
                <div className={styles.col}>
                    <Link
                        to={`/react-app/project1/${track.track_id}`}
                        className={styles.viewLink}
                    >
                        View Lyrics
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default Track;
