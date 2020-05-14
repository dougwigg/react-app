import * as React from 'react';

import { Link } from 'react-router-dom';

import { SearchProvider } from './song-lyrics/SearchContext';
import Search from './song-lyrics/Search';
import Tracks from './song-lyrics/Tracks';

import styles from './Project.module.css';

const Project1 = () => {
  return (
    <>
      <h2 className={styles.header}>Project 1</h2>

      <SearchProvider>
        <Search />
        <Tracks />
      </SearchProvider>

      <Link className={styles.backLink} to="/react-app/">Back to Homepage</Link>
    </>
  );
}

export default Project1;