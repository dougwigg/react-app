import * as React from 'react';

/**
 *  I converted an existing Musixmatch + Axios project to use React hooks.
 * 
 *  I rewrote much of the code but the UI flow and some of the pattterns can be attributed to this project:  
 *  https://github.com/movntains/Lyric-Finder
 */

import { SearchProvider } from './song-lyrics/SearchContext';
import Search from './song-lyrics/Search';
import Tracks from './song-lyrics/Tracks';

const Project1 = () => {
  return (
    <>
      <SearchProvider>
        <Search />
        <Tracks />
      </SearchProvider>
    </>
  );
}

export default Project1;