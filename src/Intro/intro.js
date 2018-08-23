import React from 'react';
import './intro.css';
import Portrait from './portrait';
import Brief from './brief';

const Intro = () => {
    return(
        <div className="intro">
        <Brief/>
        <Portrait/>
        </div>
    )
}

export default Intro;