import React from 'react';
import './header.css';

const ShowAbout = (props) => {
    return(
        <div className="select">
        <span onClick={props.changeMode}>About</span>
        </div>
    )
}

export default ShowAbout;