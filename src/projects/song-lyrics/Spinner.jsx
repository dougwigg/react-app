import * as React from 'react';

import styles from './Spinner.module.css';

export const Spinner = () => {
  return (
    <div className={styles.loading}></div>
  );
};

export default Spinner;