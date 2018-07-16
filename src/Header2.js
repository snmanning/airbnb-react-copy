/*eslint-disable*/
import React from 'react';
import './Header2.css';
import PropTypes from 'prop-types';

const Header2 = (props) =>
    <header className='Header2-container' >
        <h2> {props.title} </h2>
        <i clasNames="far fa-image"></i>
    </header>

Header2.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header2;