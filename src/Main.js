import React from 'react';
import './Layout.css';

const Main = (props) => (
    <div className='Layout-container' >
        {props.children}
    </div>
)

export default Main;