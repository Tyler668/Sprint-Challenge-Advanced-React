import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import PlayerCards from './components/PlayerCards';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      players: [

      ]
    };
  }


  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data);
        this.setState({ players: res.data });
      })
      .catch(err => { console.log('Oof') })
  }





  

  render() {
    return (
      <div className="App">
        <PlayerCards players = {this.state.players} />
      </div>
    );
  }
}

export default App;
