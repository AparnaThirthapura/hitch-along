import React, { Component } from 'react';
import HomePage from './HomePage';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hitch-Along 1.0</h2>
          <h3>A Ride Sharing App</h3>
        </div>
        <div className="App-intro">
          <HomePage />
        </div>
        <div className="App-footer">
          <h3>By Aparna for Rutgers Coding Bootcamp</h3>
        </div>
      </div>
    )
  }
}

export default App;
