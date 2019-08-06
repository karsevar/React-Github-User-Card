import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/tetondan')
      .then(results => console.log(results))
      .catch(err => console.log('did not work', err))
  }
  
  render() {
    return (
      <div className="App">
        <p>Component Mounted</p>
      </div>
    );
  }
}

export default App;
