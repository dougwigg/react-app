import * as React from 'react';

import ChartForState from './ChartForState';
import SpinnerOrError from './SpinnerOrError';
import { getLatestData, statesForRegion, stateNames } from './static';

import styles from './Covid.module.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeRegion': {
      return {
        ...state,
        region: action.region,
        states: action.value.split(','),
        covidData: {},
        isLoading: true,
        isError: false,
        errMsg: '',
      };
    }
    case 'accumulateData': {
      return {
        ...state,
        covidData: action.payload,
      };     
    }  
    case 'complete': {
      return {
        ...state,
        isLoading: false,
      };
    }
    case 'error': {
      return {
        ...state,
        isError: true,
        errMsg: action.errMsg,
      };  
    }
    default: {
      return state;
    }
  }
};  

const initialState = {
  region: 'Northeast',
  states: statesForRegion['northeast'],
  covidData: {},
  isLoading: true,
  isError: false,
  errMsg: '',
};

const CovidByRegion = () => {

  // Manage state
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { region,  states, covidData, isLoading, isError, errMsg } = state;
 
  /**
   *  Extract the required chart data from each state data fetch 
   */
  const getChartData = React.useCallback((stateData) => {
    // Data for last 7 days
    const dailyData = getLatestData(stateData, 7);
    // Get full name from abbrev
    const fullStateName = stateNames[dailyData[0].state];
    // State data to merge with region
    const chartDataForState = {};
    chartDataForState[fullStateName] = dailyData;
    
    // Add each state's data to the data for the region
    dispatch({ action: 'accumulateData', payload:Object.assign(covidData, chartDataForState)});
    
    // When we have all the data, show the charts
    if(Object.keys(covidData).length === states.length) {
      dispatch({ type:'complete'});
    }
  }, [covidData, states.length]);

  React.useEffect(() => {
    states.forEach((state) => {
      fetch(`https://covidtracking.com/api/v1/states/${state}/daily.json`)
        .then(response => response.json())
        .then(data => getChartData({ data }))
        .catch(error => dispatch({ type:'error', errMsg: error})); 
    }); 
  }, [states, getChartData, isLoading]);

  const DisplayCharts = (props) => {
    return ( 
      Object.keys(props.covidData).map((key, idx) => {
        return (
          <div key={key} className={styles.chart}>
            <ChartForState label={key} data={covidData[key]} />
          </div>
        );
      })
    )
  };
 
  const header = `New Covid19 Cases/Deaths reported in the ${region} over the past week:`;

  return (
    <div className={styles.body}>
      <div className={styles.header}>{header}</div>
      
      <div className={styles.control}>
        Select region:&nbsp; 
        <select className={styles.select} onChange={e => dispatch({
              type: 'changeRegion',
              field: 'states',
              value: e.currentTarget.value, 
              region: e.currentTarget.options[e.currentTarget.selectedIndex].text,
            })}>
          <option value={statesForRegion['northeast']} defaultValue>Northeast</option>
          <option value={statesForRegion['midatlantic']}>Mid-atlantic</option>
          <option value={statesForRegion['southeast']}>Southeast</option>
          <option value={statesForRegion['northwest']}>Northwest</option>
          <option value={statesForRegion['midwest']}>Midwest</option>
          <option value={statesForRegion['southwest']}>Southwest</option>
          <option value={statesForRegion['west']}>West</option>
        </select>
      
        <div className={styles.legend}>
          <span className={styles.legendCases}>New Cases</span>
          <span className={styles.legendDeaths}>New Deaths</span>
        </div>
      </div> 

      <div className={styles.grid}>
        { 
          isLoading || isError
          ? <SpinnerOrError errMsg={errMsg} />
          : <DisplayCharts covidData={covidData} />
        }
      </div>
    </div>
  )
}

export default CovidByRegion;