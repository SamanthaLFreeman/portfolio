import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <section className='nav'>
      <h1 className='app-title'>Portfolio</h1>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/projects" className="nav-link">Projects</NavLink>
      <NavLink to="/resume" className="nav-link">Resume</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
    </section>
  )
}

export default Nav;
