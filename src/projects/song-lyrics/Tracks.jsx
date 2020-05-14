import * as React from 'react';

import SearchContext from './SearchContext';

// import { Consumer } from '../../context';
// import Spinner from '../layout/Spinner';
import Track from './Track';

const Tracks = () => {
  
    // {value => {
    //  const { trackList, heading } = value;

    return (
       <SearchContext.Consumer>
         {value => {
          
          //debugger;
          const { trackList, heading } = value || {};
        
          if (trackList === undefined || trackList.length === 0) {
            return <div>Spinner</div>;  // </div>Spinner />;
          } else {
            return (
              <>
                <h3 className="text-center mb-4 mt-5">{heading}</h3>
                <ul className="row">
                  {trackList.map(item => {
                    return <Track key={item.track.track_id} track={item.track} />;
                  })}
                </ul>
              </>
            );
          }
        }}
       </SearchContext.Consumer>
    );

}

export default Tracks;