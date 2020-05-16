import * as React from 'react';

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