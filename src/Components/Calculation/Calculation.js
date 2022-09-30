import React, { useEffect, useState } from 'react';
import './Calculation.css';
import member from './member.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Calculation = (props) => {
    const { activity } = props;
    const notify = () => toast.error("You have today's workout..", { position: "top-center", theme: "light" })
    const [state, setState] = useState([]);

    const handleBreakTime = (event) => {
        const time = event.target.innerText;
        setState(time)
    }

    useEffect(() => {
        localStorage.setItem('Break Time', JSON.stringify(state));
    }, [state]);

    useEffect(() => {
        const state = localStorage.getItem('Break Time');
        if (state !== null) {
            setState(JSON.parse(state));
        }
    }, []);




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
                    <button onClick={(event) => handleBreakTime(event)}>10s</button>
                    <button onClick={(event) => handleBreakTime(event)}>20s</button>
                    <button onClick={(event) => handleBreakTime(event)}>30s</button>
                    <button onClick={(event) => handleBreakTime(event)}>40s</button>
                    <button onClick={(event) => handleBreakTime(event)}>50s</button>
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
                    <div><h4>{state}</h4></div>
                </div>
            </div>
            <button onClick={notify} className='complete'>Activity Completed</button>
            <ToastContainer />

        </section>
    );
};

export default Calculation;