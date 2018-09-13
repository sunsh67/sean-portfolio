import React from 'react';

const Icon = ({icon}) => {
    return(
<div className="icon">
<a href={icon.des} target="_blank" rel="noopener noreferrer"><img src={require(`${icon.path}`)} alt={icon.name}/></a>
</div>
    );
}

export default Icon;