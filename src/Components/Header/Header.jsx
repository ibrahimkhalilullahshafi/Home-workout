import React from 'react';
import logo from '../../logo.png';
import './Header.css';

const header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <h1>HOME WORKOUT</h1>
        </div>
    );
};

export default header;