/* eslint-disable */
import React from 'react';
import './Layout.css';
import PropTypes from 'prop-types';

const Layout = (props) =>
    <div className='Layout-container'>
        {props.children}
    </div>

export default Layout;