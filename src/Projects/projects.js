import React, { Component } from 'react';
import ProjectItem from './projectItem';
import './projects.css';

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
          <div className="projects">
         {this.state.projects.map( project => <ProjectItem project={project} key={project.id}/>)}
          </div>
           
        )
    }
}

export default Project;
