import * as React from 'react';
import { string } from 'prop-types';

import { ThemeContext } from './ThemeContext';
import styles from './Body.module.css';

// Change theme via the props theme setter 
const Header = ({title}) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <header className={`${styles.header} ${theme}`}>
          {title}
        </header>
      )}
    </ThemeContext.Consumer>
  );
}

Header.propTypes = {
  title: string.isRequired
};

export default Header;