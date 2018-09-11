import React from 'react';
import './header.css';
import ShowAbout from './showAbout';
import ShowProjects from './showProjects';

const Header = (props) =>
{
  return (
      <div className="header">
          <ShowAbout changeMode = {props.changeMode}/>
          <ShowProjects remainMode = {props.remainMode}/>
         </div>
  )
   
}
export default Header;