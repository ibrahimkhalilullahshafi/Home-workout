import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Workout from '../Workout/Workout';
import './Exercise.css';

const Exercise = () => {
    const [workouts, setWorkouts] = useState([]);
    const [activity, setActivity] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])
    const handleAddToList = (workout) => {
        const newActivity = [...activity, workout];
        setActivity(newActivity);
    }
    return (
        <div className='exercise-container'>
            <div className='exercise'>
                {
                    workouts.map(workout => <Workout
                        key={workout.id}
                        workout={workout}
                        handleAddToList={handleAddToList}
                    ></Workout>)
                }
            </div>
            <div className='calculate'>
                <Calculation activity={activity}></Calculation>
            </div>
        </div>
    );
};

export default Exercise;