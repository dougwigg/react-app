import * as React from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './layout/Header';
import BodyHOC from './layout/BodyHOC';
import Footer from './layout/Footer';

import HomeTOC from './layout/HomeTOC';
import CovidByRegionBody from './projects/covid-by-region/CovidByRegionBody';
import SongLyrics from './projects/song-lyrics/SongLyrics';
import Lyrics from './projects/song-lyrics/Lyrics';

import { ThemeProvider } from './layout/ThemeContext';
import themeStyles from './layout//Theme.module.css';

function App() {
  const [themeStyle, setThemeStyle] = React.useState(themeStyles.darkTheme);
  return (
    <ThemeProvider theme={themeStyle}>
      <Header />
      <Router>
        <Switch>
          <Route path='/' exact component={BodyHOC(HomeTOC)} />
          <Route path='/covid-by-region' exact component={BodyHOC(CovidByRegionBody)}/>
          <Route path='/song-lyrics' exact component={BodyHOC(SongLyrics)} />
          <Route path="/song-lyrics/:songId" component={BodyHOC(Lyrics)}/>
          <Route path='/' component={BodyHOC(HomeTOC)} />
        </Switch>
      </Router>
      <Footer setThemeFn={setThemeStyle} /> 
    </ThemeProvider> 
  );
}

export default App;
