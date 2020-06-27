import React from 'react';
import Carousel from './Carousel';

const Featured = () => {
  // this is the container, position is set to relative so we can set the position for the date and artist name
  return (
    <div style={{position: 'relative', border: '3px solid blue'}}>
        <Carousel />
        <div className='artist_name'>
          <div className='wrapper'>Ariana Grande</div>
        </div>
    </div>
  )

}

export default Featured