import * as React from 'react';

import { ThemeContext } from './ThemeContext';
import styles from './Header.module.css';

// Change theme via the props theme setter 
const Header = () => {
    return (
        <ThemeContext.Consumer>
        { theme => (
            <header className={`${styles.header} ${theme}`}>
                React Sandbox      
            </header>
        )}
       </ThemeContext.Consumer>   
    );
}

export default Header;