import React from 'react';

const ProjectItem = ({project}) => {
    return(
        <div>
        <div key={project.id}> name:{project.name}</div>
        </div>
    )
}

export default ProjectItem;