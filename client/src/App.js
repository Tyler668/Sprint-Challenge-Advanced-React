import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  // const [title, setTitle] = useState('Hello WEB 22!!!');
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
        {this.state.players.map(player => (
          <div className = 'player-card'>
            <h2>{player.name}</h2>
            <h3>{player.country}</h3>
            <h4>{player.searches} searches</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
