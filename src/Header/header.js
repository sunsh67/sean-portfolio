import React from 'react';
import './header.css';
import About from './about';
import ShowProjects from './showProjects';

const Header = (props) =>
{
  return (
      <div className="header">
          <About/>
          <ShowProjects/>
         </div>
  )
   
}
export default Header;