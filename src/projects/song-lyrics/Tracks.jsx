import * as React from 'react';

import SearchContext from './SearchContext';
import Spinner from './Spinner';
import Track from './Track';

import styles from './Track.module.css';

const Tracks = () => {
  return (
    <SearchContext.Consumer>
      {value => {
        const { state } = value;
        const { trackList, heading } = state || {};
        if (trackList === undefined || trackList.length === 0) {
          return <Spinner />;
        } else {
          return (
            <>
              <h3 className="text-center mb-4 mt-5">{heading}</h3>
              <ul className={styles.results}>
                {trackList.map(item => {
                  return <Track key={item.track.track_id} track={item.track} />;
                })}
              </ul>
            </>
          );
        }
      }}
    </SearchContext.Consumer>
  );
}

export default Tracks;