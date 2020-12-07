import React, { useState  } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const { push } = useHistory();

  const initialValues = {
    username: '',
    password: ''
  }

  const [credentials, setCredentials] = useState(initialValues);

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = e => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/login`, credentials)
      .then( res => {
        localStorage.setItem('token', res.data.payload);
        push('/bubbles');
      })
      .catch( err => {
        console.log(err);
      })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form onSubmit={login}>
        Username
        <input
        type='text'
        name='username'
        value={credentials.username}
        onChange={handleChanges}
        />
        Password 
        <input
        type='text'
        name='password'
        value={credentials.password}
        onChange={handleChanges}
        />
        <button>Login!</button>
      </form>
    </>
  );
};

export default Login;
