import * as React from 'react'; 
import { arrayOf, shape, string, number } from 'prop-types';
import ChartForState from './ChartForState';

import styles from './Covid.module.css';

const ChartsForRegion = ({ covidData }) => {
  return ( 
    Object.keys(covidData).map((key, idx) => {
      return (
        <div key={key} className={styles.chart}>
          <ChartForState label={key} data={covidData[key]} />
        </div>
      );
    })
  )
};

ChartsForRegion.propTypes = {
  arrayWithShape: arrayOf(shape({
    date: string.isRequired,
    'case increase': number.isRequired,  
    'death increase': number.isRequired,
  })).isRequired,
};

export default ChartsForRegion;