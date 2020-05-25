import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './layout/Header';
import BodyHOC from './layout/BodyHOC';
import Footer from './layout/Footer';

import HomeTOC from './layout/HomeTOC';
import Project1 from './projects/Project1';
import Lyrics from './projects/song-lyrics/Lyrics';
import CovidByRegionBody from './projects/covid-by-region/CovidByRegionBody';

import { ThemeProvider } from './layout/ThemeContext';
import themeStyles from './layout//Theme.module.css';

function App() {
  const [themeStyle, setThemeStyle] = React.useState(themeStyles.darkTheme);
  return (
    <ThemeProvider theme={themeStyle}>
      <Header />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/' exact component={BodyHOC(HomeTOC)} />
          <Route path='/covid-by-region' exact component={BodyHOC(CovidByRegionBody)}/>
          <Route path='/project1' exact component={BodyHOC(Project1)} />
          <Route path="/project1/:songId" component={BodyHOC(Lyrics)}/>
          <Route path='/react-app/' component={BodyHOC(HomeTOC)} />
        </Switch>
      </Router>
      <Footer setThemeFn={setThemeStyle} /> 
    </ThemeProvider> 
  );
}

export default App;
