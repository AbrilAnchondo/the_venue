import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends React.Component {

  state = {
    openDrawer: false,
    showHeader: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
   if(window.scrollY > 0) {
    this.setState({
      showHeader: true
    })
   }else {
     this.setState({
       showHeader: false
     })
   }
  }

  toggleDrawer = (value) => {
    console.log('value: ',value)
    this.setState({
      openDrawer: value
    })
  }
  
  render() {
    return (
        <AppBar 
          position='fixed'
          style={{
            padding: '10px 0',
            backgroundColor: this.state.showHeader ? 'grey' : 'transparent'
          }}
        >
          <Toolbar>
            <div className='header_logo'>
              <div className='font_righteous header_logo_venue'>The Venue</div>
              <div className='header_logo_title'>Musical Events</div>
            </div>
            <IconButton
              aria-label='Menu'
              color='inherit'
              onClick={() => this.toggleDrawer(true)}
            >
              <MenuIcon/>
            </IconButton>

            <SideDrawer
              open={this.state.openDrawer}
              onClose={(value) => this.toggleDrawer(value)}
             />
          </Toolbar>
        </AppBar>
    )
  }
}

export default Header