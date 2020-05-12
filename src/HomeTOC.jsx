import * as React from 'react';

import { Link } from 'react-router-dom';
import styles from './HomeTOC.module.css';

const HomeTOC = () => {
    return (
      <>  
        <h2 className={styles.header}>Projects:</h2>
        <ol>
          <li className={styles.itm}>
            <Link to="/react-app/project1">Project 1</Link>
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
