import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Please check your console window');
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/><br/>
       <form onSubmit={this.handleSubmit}>
        <label>
          Enter Your Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/><br/>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default App;
