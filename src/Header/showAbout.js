import React from 'react';
import './header.css';

const ShowAbout = (props) => {
    let opacity = 0.5;
    if(props.mode === 'about'){
        opacity = 1;
    }
    return(
        <div className="select">
        <span onClick={props.changeMode} style={{opacity : opacity}}>About</span>
        </div>
    )
}

export default ShowAbout;