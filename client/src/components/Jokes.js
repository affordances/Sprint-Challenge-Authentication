import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Users extends Component {
  state = {
    jokes: []
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    const requestOptions = { headers: { authorization: token } };
    axios
      .get(`http://localhost:5000/api/jokes`, requestOptions)
      .then(response => this.setState({ jokes: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.jokes.map(joke => {
          return <div key={joke.id}>{joke.setup} {joke.punchline}</div>
        })}
      </div>
    );
  }
}

export default Users;
