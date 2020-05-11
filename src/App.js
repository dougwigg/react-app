import * as React from 'react';

import Header from './Header';
import Section from './Section';
import Footer from './Footer';

import { ThemeProvider } from './ThemeContext';

import themeStyles from './Theme.module.css';

function App() {
  const [themeStyle, setThemeStyle] = React.useState(themeStyles.darkTheme);
  return (
    <ThemeProvider theme={themeStyle}>
      <Header/>
      <Section/>
      <Footer setThemeFn={setThemeStyle} />
    </ThemeProvider>
  );
}

export default App;
