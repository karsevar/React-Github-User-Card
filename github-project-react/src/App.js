import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: []
    }
  }
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/tetondan')
      .then(results => { 
        // console.log('main user info', results.data)
        this.setState({userData: [results.data]})

        axios.get(results.data.followers_url)
          .then(results => {
            // console.log('followers data', results.data)
            
            const followersAuto = results.data.map(follower => follower.login)

            followersAuto.forEach(follower => {
              axios.get(`https://api.github.com/users/${follower}`)
                .then(result => {
                  // console.log('data from followers', result.data)
                })
                .catch(error => {
                  console.log('server error', error);
                })
            })
          })
      })
      .catch(err => console.log('did not work', err))
  }
  
  render() {
    console.log('In render', this.state);
    return (
      <div className="App">
        <p>Component Mounted</p>
      </div>
    );
  }
}

export default App;
