import React from 'react';
import './about.css';
import { Flex,LineSpace } from '../commonCSS.js';


const AboutContent = () => {
    return(
        <Flex direction = 'column' height = '63%' dtheight = '65%'>
            <div className='topic'>About</div>
            <div className='about-box'>
            <div className='side-box'>
            </div>
            <div className='info'>
            <div className='name'>Sean Sun</div>
            <div className='des'>I am a Software Developer graduated from Northeastern University in Software Engineering. I want to use technology, design, and data-driven decisions to enhance the lives of individuals and
build urban communities. In my spare time, I love hiking, reading, traveling and trying new restaurants.</div>
            </div>
            </div>
            <div className='about-box'>
            <div className='side-box'>
            </div>
            <div className='info'>
           <a href='mailto:sun.sh@husky.neu.edu'>sun.sh@husky.neu.edu </a>
           • Things happen that leave a mark in space, in time. In us.
            </div>
            </div>
          
        </Flex>
    )
}

export default AboutContent;