import * as React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = props => {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  );    
}
