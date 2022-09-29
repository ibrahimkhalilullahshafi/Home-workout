import React, { useEffect, useState } from 'react';
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
                <h1>sakdjhgfekqj</h1>
            </div>
        </div>
    );
};

export default Exercise;