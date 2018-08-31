import React from 'react';

const ProjectItem = ({project}) => {
    return(
        <div className="project">
        <div> name: {project.name}</div>
        </div>
    )
}

export default ProjectItem;