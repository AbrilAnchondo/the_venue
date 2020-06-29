import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
      <footer className='bck_black'>
        <Fade delay={500}>
          <div className='font_righteous footer_logo_venue'>
            THE VENUE
          </div>
          <div className='footer_copyright'>
            Copyright <i class="far fa-copyright"></i> 2020. The Venue. All Rights Reserved
          </div>
        </Fade>
      </footer>
  )
}

export default Footer