import * as React from 'react';

import { ThemeContext } from './ThemeContext';
import styles from './Body.module.css';

const BodyHOC = (Component) => {
  function Body(props) {
    return (
      <ThemeContext.Consumer>
        { theme => (
          <section className={`${theme} ${styles.body}`}>
            <div className={styles.inner}>
              <Component {...props} /> 
            </div>
          </section>
        )}
      </ThemeContext.Consumer>   
    )
  }
  return Body;
}

export default BodyHOC;