import * as React from 'react';

import { Link } from 'react-router-dom';
import styles from '../../layout/Body.module.css';

import CovidByRegion from './CovidByRegion';

const CovidByRegionBody = () => {
  return (
    <>
      <Link className={styles.backLink} to="/">&#8678;&nbsp;Homepage</Link>
      <CovidByRegion /> 
    </>
  );
}

export default CovidByRegionBody;