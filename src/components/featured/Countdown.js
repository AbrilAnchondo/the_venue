import React from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends React.Component {
    render() {
        return (
            <Slide left delay={2000}>
                <div className='countdown_wrapper'>
                    <div className='countdown_top'>Starting in</div>
                    <div className='countdown_bottom'>
                        <div className='countdown_item'>
                            <div className='countdown_time'>
                                5
                            </div>
                            <div className='countdown_tag'>
                                Days
                            </div>
                        </div>
                        <div className='countdown_item'>
                            <div className='countdown_time'>
                                3
                            </div>
                            <div className='countdown_tag'>
                                Hrs
                            </div>
                        </div>
                        <div className='countdown_item'>
                            <div className='countdown_time'>
                                8
                            </div>
                            <div className='countdown_tag'>
                                Min
                            </div>
                        </div>
                        <div className='countdown_item'>
                            <div className='countdown_time'>
                                7
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
