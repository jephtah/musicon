import React from 'react';
import Carousel from './Carousel';
import CountDown from './CountDown';

 const Featured = () => {
  return (
    <div style={{position: 'relative'}}>

      <Carousel />
      <CountDown />
      
    </div>
  )
}

// This could stay in between for the artist name as i planned earlier
//<div className='artist_name'>
//<div className="wrapper">
//HillSong United
//</div>
//</div>

export default Featured;
