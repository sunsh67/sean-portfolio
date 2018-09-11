import React from 'react';
import './header.css';

const ShowProjects = (props) => {
    return(
        <div className="select">
        <span onClick={props.remainMode}>Projects</span>
        </div>
    )
}

export default ShowProjects;