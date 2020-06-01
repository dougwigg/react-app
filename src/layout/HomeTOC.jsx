import * as React from 'react';

import { Link } from 'react-router-dom';
import styles from './HomeTOC.module.css';

const HomeTOC = () => {
  return (
      <>
        <ol>
          <li className={styles.itm}>
            <Link to="/covid-by-region">Covid Cases by Region</Link>
            <p>
              <div>
                As regions approach re-opening with different strategies, I thought it would be interestng
                to see the regional state data presented together instead of viewing one-state-at-a-time.
              </div>
              <div className={styles.tools}>Uses: ReCharts and the covidtracking.com api for historical data by state.</div>
            </p>
          </li>
          <li className={styles.itm}>
            <Link to="/song-lyrics">Song Lyric Search</Link>
            <p>
              <div>Song lyric search by artist/song title.</div>
              <div className={styles.tools}>Uses: Musixmatch API with Axios fetch.</div> 
            </p>
          </li>
        </ol>
      </>
  );
}

export default HomeTOC;
