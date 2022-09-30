import React from 'react';
import './Calculation.css';
import member from './member.png'
const Calculation = (props) => {
    const { activity } = props;
    let total = 0;
    for (const workout of activity) {
        total = total + workout.time
    }
    return (
        <section>
            <div className='profile'>
                <div>
                    <img className='member' src={member} alt="" />
                </div>
                <div>
                    <h5>JAKIR MIAH</h5>
                    <small>Dhaka, Bangladesh</small>
                </div>
            </div>
            <div>
                <h2>Add break time</h2>
                <div className='break'>
                    <button><span>10</span>s</button>
                    <button><span>20</span>s</button>
                    <button><span>30</span>s</button>
                    <button><span>40</span>s</button>
                    <button><span>50</span>s</button>
                </div>
            </div>
            <div>
                <h2>Total Workout</h2>
                <div className='workout-time'>
                    <div><h4>Workout Time</h4></div>
                    <div><h4>{total}s</h4></div>
                </div>
                <div className='break-time'>
                    <div><h4>Break Time</h4></div>
                    <div><h4><span>30</span>s</h4></div>
                </div>
            </div>
            <button className='complete'>Activity Completed</button>

        </section>
    );
};

export default Calculation;