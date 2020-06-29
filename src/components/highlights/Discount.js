import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';


class Discount extends React.Component {
  state= {
    discountStart: 0,
    discountEnd: 30
  }

  percentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage()},30);
  }

  render () {
    //removed center_wrapper class from the outermost div
    return (
      <div>

        <div className='discount_wrapper'>
          <Fade delay={500} duration={2000}
            onReveal={() => this.percentage()}
          >
              <div className='discount_percentage'>
                <span>{this.state.discountStart}%</span>
                <span>OFF</span>
              </div>
          </Fade>
      
          <Slide right>
            <div className='discount_description'>
              <h3>Purchase Before July 1st</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <MyButton 
                text='Purchase here'
                bg='#3ec95c'
                color='#ffffff'
                link='http://www.google.com'
              />
            </div>
          </Slide>
        </div>

      </div>
    )
  }
}

export default Discount