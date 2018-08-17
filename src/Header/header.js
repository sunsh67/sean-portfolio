import React from 'react';
import './header.css';
import Menu from './menu';

const Header = () =>
{
  return (
      <div className="header">
          <Logo/>
          <Menu/>
         </div>
  )
   
}

const Logo = () => {
    return(
        <div className="logo">
        <h1>SS.</h1> 
        </div>
    )

}


export default Header;