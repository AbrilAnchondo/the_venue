import React from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends React.Component {
  state = {
    prices: [100,150,250],
    location: ['Orchestra', 'Balcony', 'Family'],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    ],
    link: [
      'http://sales/o',
      'http://sales/b',
      'http://sales/fc'
    ],
    delay: [
      500,0,500
    ]
  }

  showBoxes = () => (
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>${this.state.prices[i]}</span>
              <span>{this.state.location[i]}</span>
            </div>
            <div className='pricing_description'>
              ${this.state.description[i]}
            </div>
            <div className='pricing_buttons'>
              <MyButton 
                text='Tickets here'
                bg='#8c2a99'
                color='#ffffff'
                link={this.state.link[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )

  render() {
    return (
      <div className='bck_black'>

        <div className='pricing_section'>
          <h2>Pricing</h2>
          <div className='pricing_wrapper'>
            {this.showBoxes()}
          </div>
        </div>

      </div>
    )
  }
}

export default Pricing