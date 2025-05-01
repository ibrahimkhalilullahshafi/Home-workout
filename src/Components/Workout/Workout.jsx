import React from 'react';
import './Workout.css';

const Workout = (props) => {
    const { picture, name, time } = (props.workout);
    return (
        <div className='workout'>
            <img className='picture' src={picture} alt="" />
            <h4>Name: {name}</h4>
            <h5>Workout time: {time}s</h5>
            <button onClick={() => props.handleAddToList(props.workout)} className='add-list'>Add to list</button>
        </div>
    );
};

export default Workout;