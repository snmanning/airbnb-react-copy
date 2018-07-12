/* eslint-disable */
import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = (props) => 
    <header className='Header-container' >
        <h1> {props.title} </h1>
    </header>


Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;