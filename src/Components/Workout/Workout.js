import React from 'react';
import './Workout.css';

const Workout = (props) => {
    const { picture, name, time } = (props.workout);

    return (
        <div>
            <img src={picture} alt="" />
            <h5>Name: {name}</h5>
            <h6>Workout time: {time}</h6>
        </div>
    );
};

export default Workout;