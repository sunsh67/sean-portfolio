import React from 'react';
import './intro.css';
import Portrait from './portrait';
import Brief from './brief';
import MediaList from './SocialMedia/MediaList';

const Intro = () => {
    return(
        <div className="intro">
        <Brief/>
        <Portrait/>
        <MediaList/>
        </div>
    )
}

export default Intro;