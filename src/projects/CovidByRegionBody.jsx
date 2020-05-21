import * as React from 'react';

import { Link } from 'react-router-dom';
import styles from './Project.module.css';

import CovidByRegion from './covid-by-region/CovidByRegion';

const CovidByRegionBody = () => {
  return (
    <>
      <Link className={styles.backLink} to="/">&#8678;&nbsp;Homepage</Link>
      <CovidByRegion /> 
    </>
  );
}

export default CovidByRegionBody;