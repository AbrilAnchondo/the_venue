import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7127179925865!2d-99.19711964911231!3d19.424814745897745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201fc02a01ef9%3A0x5e14b5cd4b968d6f!2sAuditorio%20Nacional!5e0!3m2!1sen!2sus!4v1593402822647!5m2!1sen!2sus" 
      width='100%'
      height='500px'
      frameBorder='0'
      allowFullscreen
      >
      </iframe>

      <div className='location_tag'>
        <div>Location</div>
      </div>

    </div>
  )
}

export default Location