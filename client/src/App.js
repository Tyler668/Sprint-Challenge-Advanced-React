import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import PlayerCards from './components/PlayerCards';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [

      ]
    };
  }


  componentDidMount() {
    this._isMounted = true;

      axios.get(`http://localhost:5000/api/players`)
        .then(res => {
          const playArray = res.data;
          if(this._isMounted = true)
          {this.setState({ players: playArray })};
        })
        .catch(err => { console.log('Oof') })

  }

  componentWillUnmount() {
    this._isMounted = false;
    
  };





  render() {
    return (
      <div className="App">
        <PlayerCards players={this.state.players} />
      </div>
    );
  }
}

export default App;
