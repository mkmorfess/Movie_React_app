import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    movies: [],
    search: ""
  }
  
  onHandleQueryChange = (e) => {

    let newValue = e.target.value;
    this.setState({ search: newValue });
    
  }

  onHandleGetMovies = (e) => {
    e.preventDefault();
    console.log(this.state.search);

    let id = {
      movies: this.state.search
    }

    axios.post("/api/movies", id).then(response => {
      this.setState({movies: response});
      console.log(response);
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Movie Finder</h1>
          <h3>Enter in a movie</h3>
          <form onSubmit={this.onHandleGetMovies}> 
            <input name="search" onChange={this.onHandleQueryChange} />
            <button onClick={this.onHandleFinish}>Search</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
