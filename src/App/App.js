import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className='App'>
        <Nav />
        <Route exact path='/' render={ () => <p>home</p> } />
        <Route exact path='/about' render={() =>  <About />} />
        <Contact />
        <Projects />
        <Resume />
      </div>
    )
  }
}

export default App;
