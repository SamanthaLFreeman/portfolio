import React, { Component } from 'react';
import About from '../About/About';

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
      </div>
    )
  }
}

export default App;
