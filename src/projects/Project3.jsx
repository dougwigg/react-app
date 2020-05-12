import * as React from 'react';

import { Link } from 'react-router-dom';
import styles from './Project.module.css';

const Project3 = () => {
  return (
    <>
      <h2 className={styles.header}>Project 3</h2> 
      <Link className={styles.backLink} to="/react-app/">Back to Homepage</Link>
    </>
  );
}

export default Project3;