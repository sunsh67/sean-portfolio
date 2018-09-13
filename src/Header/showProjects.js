import React from 'react';
import './header.css';

const ShowProjects = (props) => {
    let opacity = 0.5;
    if(props.mode === 'projects'){
        opacity = 1;
    }
    return(
        <div className="select">
        <span onClick={props.remainMode} style={{opacity : opacity}}>Projects</span>
        </div>
    )
}

export default ShowProjects;