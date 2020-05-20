import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import BodyHOC from './BodyHOC';
import Footer from './Footer';

import HomeTOC from './HomeTOC';
import Project1 from './projects/Project1';
import Lyrics from './projects/song-lyrics/Lyrics';
import CovidByRegionBody from './projects/CovidByRegionBody';
import Project3 from './projects/Project3';

import { ThemeProvider } from './ThemeContext';
import themeStyles from './Theme.module.css';

function App() {
  const [themeStyle, setThemeStyle] = React.useState(themeStyles.darkTheme);
  return (
    <ThemeProvider theme={themeStyle}>
      <Header />
      <Router>
        <Switch>
          <Route path='/react-app/' exact component={BodyHOC(HomeTOC)} />
          <Route path='/react-app/covid-by-region' exact component={BodyHOC(CovidByRegionBody)}/>
          <Route path='/react-app/project1' exact component={BodyHOC(Project1)} />
          <Route path="/react-app/project1/:songId" component={BodyHOC(Lyrics)}/>
          <Route path='/react-app/project3' exact component={BodyHOC(Project3)}/>
          <Route path='/react-app/' component={BodyHOC(() => <div>That's a 404!</div>)} />
        </Switch>
      </Router>
      <Footer setThemeFn={setThemeStyle} /> 
    </ThemeProvider> 
  );
}

export default App;
