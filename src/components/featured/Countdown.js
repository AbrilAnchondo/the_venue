import React from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends React.Component {
  state = {
    deadline: 'Aug, 19, 2020',
    days: '0',
    hrs: '0',
    min: '0',
    sec: '0'
  }

  getTimeCountdown (deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log('Sorry, the event has expired')
    } else {
      const sec = Math.floor((time/1000)%60);
      const min = Math.floor((time/1000/60)%60);
      const hrs = Math.floor((time/(1000*60*60))%24);
      const days = Math.floor(time/(1000*60*60*24));

      this.setState({
        days,
        hrs,
        min,
        sec
      })
    }
  }

  componentDidMount () {
    setInterval(()=> this.getTimeCountdown(this.state.deadline), 1000)
  }
    render() {
        return (
            <Slide left delay={1000}>
                <div className='countdown_wrapper'>
                    <div className='countdown_top'>Starting in</div>
                    <div className='countdown_bottom'>
                        <div className='countdown_item'>
                            <div className='countdown_time'>
                                {this.state.days}
                            </div>
                            <div className='countdown_tag'>
                                Days
                            </div>
                        </div>
                        <div className='countdown_item'>
                            <div className='countdown_time'>
                                {this.state.hrs}
                            </div>
                            <div className='countdown_tag'>
                                Hrs
                            </div>
                        </div>
                        <div className='countdown_item'>
                            <div className='countdown_time'>
                                {this.state.min}
                            </div>
                            <div className='countdown_tag'>
                                Min
                            </div>
                        </div>
                        <div className='countdown_item'>
                            <div className='countdown_time'>
                                {this.state.sec}
                            </div>
                            <div className='countdown_tag'>
                                Sec
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        )
    }
}

export default Countdown
