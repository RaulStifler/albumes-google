import React, { Component } from 'react';
import './App.css';
import AppNav from './components/AppNav';
import Albumes from './containers/Albumes';
import Album from './containers/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav/>
        <Album/>
        <Albumes/>
      </div>
    );
  }
}

export default App;
