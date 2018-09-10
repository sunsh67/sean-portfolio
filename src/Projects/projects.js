import React, { Component } from 'react';
import ProjectItem from './projectItem';
import './projects.css';

//  path index
const index = [
    {pic:'./projectsImg/tvtracker.png', git:'https://github.com/sunsh67/tv-tracker-application'},
    {pic:'./projectsImg/petservice.png', git:'https://github.com/sunsh67/pet-service-website'},
    {pic:'./projectsImg/smoking.png', git:'https://github.com/sunsh67/smoking-provention-website'}
]

class Project extends Component{

    constructor(props){
        super(props);
        this.state = {
            projects : [
                {id: 1, name: 'TV Tracker', pic:index[0].pic, git:index[0].git},
                {id: 2, name: 'Pet Service', pic:index[1].pic, git:index[1].git},
                {id: 3, name: 'Smoking Prevention', pic:index[2].pic, git:index[2].git}
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
