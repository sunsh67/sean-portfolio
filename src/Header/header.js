import React from 'react';
import './header.css';
import ShowAbout from './showAbout';
import ShowProjects from './showProjects';

const Header = (props) =>
{
  return (
      <div className="header">
          <ShowAbout changeMode = {props.changeMode} mode={props.mode}/>
          <ShowProjects remainMode = {props.remainMode} mode={props.mode}/>
         </div>
  )
   
}
export default Header;