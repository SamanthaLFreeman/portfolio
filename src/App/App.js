import React, { Component } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className='App'>
        <h1 className='app-title'>Portfolio</h1>
        <About />
        <Contact />
        <Projects />
        <Resume />
      </div>
    )
  }
}

export default App;
