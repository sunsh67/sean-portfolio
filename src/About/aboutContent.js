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
            <div className='name'>Sean (Sheng) Sun</div>
            <div className='des'>I am a Software Developer graduated from Northeastern University in Software Engineering. I want to use technology, design, and data-driven decisions to enhance the lives of individuals and
build urban communities. In my spare time, I love hiking, reading, traveling and trying new restaurants.</div>
            </div>
            </div>
{/* Education */}
             <div className='about-box'>
            <div className='side-box'>
            Education
            </div>
            <div className='info'>
            <div className='name'>Northeastern University</div>
            <div className='date'>09/16 - 06/18</div>
            <LineSpace/>
            M.S. in Computer Software Engineering
            <LineSpace/>
            <div className='name'>National Tsing Hua University</div>
            <div className='date'>09/14 - 01/16</div>
            <LineSpace/>
            B.S. in Computer Science
            <LineSpace/>
            <div className='name'>Jilin University</div>
            <div className='date'>09/12 - 07/16</div>
            <LineSpace/>
            B.S. in Software Engineering
            </div>
            </div>

{/* Exepriece */}
            <div className='about-box'>
            <div className='side-box'>
            Exepriece
            </div>
            <div className='info'>
            <div className='name'><a href='https://github.com/sunsh67/tv-tracker-application' target="_blank" rel="noopener noreferrer">TV Tracker Application</a></div>
            • Designed and developed a user-facing single page application with React components (UI and CRUD)<br/>
            <LineSpace/>
            • Used Restful service API (PUT, GET, POST, DELETE) to create, add, read, delete TV series into users’ collections<br/>
            <LineSpace/>
            • Built clear and maintainable components with arrow functions and Promises<br/>
            <LineSpace/>
            • Passed js/jsx files in eslint rules to find syntax and formatting errors in JavaScript code<br/>
            <LineSpace/>
            <div className='name'><a href='https://github.com/sunsh67/pet-service-website' target="_blank" rel="noopener noreferrer">Pet Care Service Website</a></div>
            • Designed and developed a responsive website using HTML, CSS and jQuery with a strong emphasis on user-centered design, usability standards and human factors testing<br/>
            <LineSpace/>
            • Used local storage, Cookies and JSON for users to log-in/out and register their accounts<br/>
            <LineSpace/>
            • Applied Google Geolocation for address autocomplete and YouTube API to display dog service videos<br/>
            <LineSpace/>
            <div className='name'>Retail Database Design</div>
            • Designed database with 1NF, 2NF, 3NF principles based on SQL Server<br/>
            <LineSpace/>
            • Created functions by adding constraint checks and computed columns to tables<br/>
            <LineSpace/>
            • Created and executed stored procedures to populate tables with actual data<br/>
            <LineSpace/>
            • Built triggers to make retail storage data synchronized<br/>
            <LineSpace/>
            </div>
            </div>

{/* Skills */}
             <div className='about-box'>
            <div className='side-box'>
            Skills
            </div>
            <div className='info'>
            <LineSpace/>
            <div className='name'>Software Engineering:</div>
             Front-end Devlopment(React, Java), Database Management, User Interface Prototyping
            <LineSpace/>
            <div className='name'>Languages:</div>
            Mandarin Chinese; JavaScript, Java, SQL, HTML/CSS, C++/C
            <LineSpace/>
            <div className='name'>Design:</div>
            Design Thinking, User Researching 
            </div>
            </div>
{/* Quote       */}
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