import * as React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import styles from './Covid.module.css';

const ChartForState = (props) => {
  return (
    <>
      <h2 className={styles.chartHeader}>{props.label}</h2>  
      <div className={styles.chartWrap}>
      <ResponsiveContainer>
        <BarChart data={props.data}>
          <XAxis dataKey="date" />
          <YAxis/> 
          <Tooltip />
          <Bar dataKey="increase" fill="orange" />
          <Bar dataKey="deathIncrease" fill="#000" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </>   
  );
};

export default ChartForState;