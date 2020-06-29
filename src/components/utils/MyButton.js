import React from 'react';
import Button from '@material-ui/core/Button';
import ticket from '../../resources/images/icons/ticket.png';

const MyButton = ({ text, bg, color, link }) => {
  return (
    <Button
      href={link}
      variant='contained'
      size='small'
      style = {{
        background: bg,
        color: color
      }}
    >
      <img
        className='icon_image'
        src={ticket}
        alt='button'
      />
      {text}
    </Button>
  )
}

export default MyButton

