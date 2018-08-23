import React, { Component } from 'react';
import ProjectItem from './projectItem';

class Project extends Component{

    constructor(props){
        super(props);
        this.state = {
            projects : [
                {id: 1, name: 'TV Tracker'},
                {id: 2, name: 'Pet Service'},
                {id: 3, name: 'Smoking Prevention'}
            ],
        }
    }


    render(){
        return(
          <div>
              {this.state.projects.map(project => <ProjectItem project={project}/>)}
        </div>
           
        )
    }
}

export default Project;
