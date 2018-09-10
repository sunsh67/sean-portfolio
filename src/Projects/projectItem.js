import React from 'react';

const ProjectItem = ({project}) => {
    return(
        <div className="project">
        <div className="projectImg">
        <img src={require(`${project.pic}`)} alt={project.name}></img>   
        </div>
        <div>{project.name}</div>
        </div>
    )
}

export default ProjectItem;