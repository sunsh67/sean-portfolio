import React, { Component } from 'react';
import ProjectItem from './projectItem';
import './projects.css';

//  path index
const index = [
    {pic:'./projectsImg/tvtracker.png', git:'https://github.com/sunsh67/tv-tracker-application'},
    {pic:'./projectsImg/petservice.png', git:'https://github.com/sunsh67/pet-service-website'},
    {pic:'./projectsImg/smoking.png', git:'https://github.com/sunsh67/smoking-provention-website'}
]

class Projects extends Component{

    constructor(props){
        super(props);
        this.state = {
            projects : [
                {id: 1, name: 'TV Tracker', pic:index[0].pic, git:index[0].git},
                {id: 2, name: 'Pet Service', pic:index[1].pic, git:index[1].git},
                {id: 3, name: 'Smoking Prevention', pic:index[2].pic, git:index[2].git}
            ],
        isAbout: {on: 'none', off: 'block'}
    
        }
    }

    
    render(){
        let showProjectes = { display:''};
        if(this.props.mode === 'projects'){
            showProjectes.display = this.state.isAbout.off;
        }else{
            showProjectes.display = this.state.isAbout.on;
        }
        return(
          <div className="projects" style={showProjectes}>
          <div className="topic">Projects</div>
         {this.state.projects.map( project => <ProjectItem project={project} key={project.id}/>)}
          </div>
           
        )
    }
}

export default Projects;
