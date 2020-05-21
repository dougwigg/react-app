import * as React from 'react';
import Spinner from '../song-lyrics/Spinner';

import styles from './Covid.module.css';

const SpinnerOrError = (props) => {
  const { errMsg } = props;
  return (
    <>
      { 
        props.errMsg 
        ? <div className={styles.error}>{errMsg}</div>
        : <Spinner />
      }
   </>
  );
};

export default SpinnerOrError;