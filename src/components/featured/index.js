import React from 'react';
import Carousel from './Carousel';
import Countdown from './Countdown';

const Featured = () => {
  // this is the container, position is set to relative so we can set the position for the date and artist name
  return (
    <div style={{position: 'relative'}}>
        <Carousel />

        <div className='artist_name'>
          <div className='wrapper'>Ariana Grande</div>
        </div>

        <Countdown />
    </div>
  )

}

export default Featured