import React from 'react';
import './header.css';
import ShowAbout from './showAbout';
import ShowProjects from './showProjects';
import {Flex} from '../commonCSS';

const Header = (props) =>
{
  return (
      <Flex height= '3%' direction= 'row' dtheight='5%'>
          <ShowAbout changeMode = {props.changeMode} mode={props.mode}/>
          <ShowProjects remainMode = {props.remainMode} mode={props.mode}/>
         </Flex>
  )
   
}
export default Header;