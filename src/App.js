import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="strip-attributes center">JSON CV</h1>
        <Container />
      </div>
    );
  }
}

export default App;
