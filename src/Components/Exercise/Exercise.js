import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Workout from '../Workout/Workout';
import './Exercise.css';

const Exercise = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

    return (
        <div className='exercise-container'>
            <div className='exercise'>
                {
                    workouts.map(workout => <Workout
                        key={workout.id}
                        workout={workout}
                    ></Workout>)
                }
            </div>
            <div className='calculate'>
                <Calculation></Calculation>
            </div>
        </div>
    );
};

export default Exercise;