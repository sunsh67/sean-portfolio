import React from 'react';

const buttonContent = '< Code />';
const ProjectItem = ({project}) => {
    return(
        <div className="project">
        <div className="projectImg">
        <img src={require(`${project.pic}`)} alt={project.name}></img>
        <div className="projectButton"><a href={project.git}><button>{buttonContent}</button></a></div>   
        </div>
        <div className='project-name'>{project.name}</div>
        </div>
    )
}

export default ProjectItem;