import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <section className='nav'>
      <h1 className='app-title'>Portfolio</h1>
      {/* <button className='nav-about'>About</button> */}
      <NavLink to="/about" className="nav">About</NavLink>
      <button className='nav-projects'>Projects</button>
      <button className='nav-resume'>Resume</button>
      <button className='nav-contact'>Contact</button>
    </section>
  )
}

export default Nav;
