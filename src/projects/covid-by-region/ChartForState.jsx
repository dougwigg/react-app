import * as React from 'react';
import { shape, string, number } from 'prop-types';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import { getWeeklyCasesAsPctOfPopulation } from './static'; 

import styles from './Covid.module.css';

const ChartForState = (props) => {
  
  const pctOfPop = getWeeklyCasesAsPctOfPopulation(props.data);

  return (
    <>
      <h2 className={styles.chartHeader}>
        {props.label}{'  '}
        <span className={styles.pct}>({pctOfPop}%)</span>
      </h2>  
      <div className={styles.chartWrap}>
        <ResponsiveContainer>
          <BarChart data={props.data}>
            <XAxis dataKey="date" />
            <YAxis/> 
            <Tooltip />
            <Bar dataKey="case increase" fill="#b33426" />
            <Bar dataKey="death increase" fill="#000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>   
  );
};

ChartForState.propTypes = {
  objectWithShape: shape({
    date: string.isRequired,
    'case increase': number.isRequired,  
    'death increase': number.isRequired,
  }).isRequired,
};

export default ChartForState;