import * as React from 'react';

import { func } from 'prop-types';
import logo from '../logo.svg';
import { ThemeContext } from './ThemeContext';
import styles from './Body.module.css';
import themeStyles from './Theme.module.css';

// Change theme via the props theme setter 
const Footer = ({ setThemeFn }) => {
  const changeTheme = (e) => {
    e.preventDefault();    
    setThemeFn(e.target.value);
  }
    
  return (
    <ThemeContext.Consumer>
      { theme => (
        <footer className={`${styles.footer} ${theme}`}>
          <img src={logo} className={styles.logo} alt="logo" />  
          <form>
            <label>Select theme:</label>
            <select onChange={changeTheme}>
              <option value={themeStyles.darkTheme}>dark</option>
              <option value={themeStyles.lightTheme}>light</option>
            </select>
          </form>
        </footer>
      )}
    </ThemeContext.Consumer>   
  );
}

Footer.propTypes = {
  setThemeFn: func.isRequired
};

export default Footer;