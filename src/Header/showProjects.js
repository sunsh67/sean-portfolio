import React from 'react';
import './header.css';

const ShowProjects = (props) => {
    return(
        <div className="select">
        <span onClick={()=> getProjects()}>Projects</span>
        </div>
    )
}

const getProjects = () => {
    alert('');
}
export default ShowProjects;