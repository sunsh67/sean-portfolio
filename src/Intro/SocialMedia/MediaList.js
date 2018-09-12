import React from 'react';
import Icon from './Icon';

const icons = [
    {name:'linkedin', path:"./icons/linkedin-logo.svg", des:"https://www.linkedin.com/in/sheng-s/"},
    {name:'facebook', path:"./icons/facebook-logo.svg", des:"https://www.facebook.com/sun.sh67"},
    {name:'instagram', path:"./icons/instagram-logo.svg", des:"https://www.instagram.com/suunsean/"}
]

const MediaList = () => {
    return(
        <div className="social-media">
        {icons.map(icon => <Icon icon={icon} key={icon.name}/>)}
        </div>

    );
}


export default MediaList;