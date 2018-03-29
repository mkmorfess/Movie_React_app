import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import { ToastContainer, style } from 'react-toastify';

style({
  colorInfo: "#25283D",
  TOP_RIGHT: {
    top: '5em',
    right: '1em'
  },
});

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Movie Finder</h1>
        </header>
        <SearchBar />
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}


export default App;

