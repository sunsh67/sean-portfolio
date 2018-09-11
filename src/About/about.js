import React from 'react';
import AboutContent from './aboutContent';

const About = (props) => {
   if(props.mode === 'about'){
    return(
        <AboutContent/>
    )}
    else{
        return(<div></div>);
    }
}

export default About;