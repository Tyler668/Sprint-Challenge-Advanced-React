import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  // const [title, setTitle] = useState('Hello WEB 22!!!');
  constructor() {
    super();
    this.state = {
      title: 'Hello WEB 22!!!',
      count: 0
    };
  }


  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <h2>Test2</h2>
      </div>
    );
  }
}

export default App;
