import * as React from 'react';

import { ThemeContext } from './ThemeContext';
import styles from './Section.module.css';

// Change theme via the props theme setter 
const Section = () => {
    return (
        <ThemeContext.Consumer>
        { theme => (
            <section className={`${theme} ${styles.section}`}>
                <div class={styles.inner}>
                    <h2 className={styles.header}>Projects:</h2>
                    <ol>
                        <li className={styles.itm}>One</li>
                        <li className={styles.itm}>Two</li>
                        <li className={styles.itm}>Three</li>
                    </ol>    
                </div>
            </section>
        )}
       </ThemeContext.Consumer>   
    );
}

export default Section;
