import * as React from 'react';

import { Link } from 'react-router-dom';
import styles from './HomeTOC.module.css';

const HomeTOC = () => {
  return (
      <>
        <h2 className={styles.header}>Projects:</h2>
        <ol>
          <li className={styles.itm}>
            <Link to="/react-app/project1">Song Lyric Search</Link>
            <p>
              <div>Lyric search using the Musixmatch API. Built using Axios fetch + useContext/useReducer.</div>
              <div>The styling is still pretty wire-framey, I may circle back on that.</div> 
            </p>
          </li>
          <li className={styles.itm}>
            <Link to="/react-app/project2">Project 2</Link>
          </li>
          <li className={styles.itm}>
            <Link to="/react-app/project3">Project 3</Link>
          </li>
        </ol>
      </>
  );
}

export default HomeTOC;
