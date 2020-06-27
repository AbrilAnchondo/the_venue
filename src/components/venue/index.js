import React from 'react';
import Zoom from 'react-reveal/Zoom';
import calendar_icon from '../../resources/images/icons/calendar.png';
import location_icon from '../../resources/images/icons/location.png';

const Venue = () => {
  return (
    <div className='bck_black'>
      <div className='center_wrapper'>
        <div className='vn_wrapper'>
          
          <Zoom duration={500}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'> 
                  <div className='vn_icon_square bck_pink'></div>
                  <div className='vn_icon'
                    style={{
                      background: `url(${calendar_icon})`
                    }}
                  >
                  </div>
                  <div className='vn_title'>Event Date & Time</div>
                  <div className='vn_desc'>Aug 19 2020 9:00pm</div>
                </div>
              </div>
            </div>
          </Zoom>

         <Zoom duration={500} delay={500}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'> 
                  <div className='vn_icon_square bck_lpink'></div>
                  <div className='vn_icon'
                    style={{
                      background: `url(${location_icon})`
                    }}
                  >
                  </div>
                  <div className='vn_title'>Location</div>
                  <div className='vn_desc'>Auditorio Nacional Cd de México</div>
                </div>
              </div>
            </div>
         </Zoom>

        </div>
      </div>
    </div>
  )
}

export default Venue