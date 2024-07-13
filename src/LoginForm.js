// src/LoginForm.js
import React, { useReducer } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.div`
  color: red;
  margin: 10px 0;
`;

const initialState = {
  username: '',
  password: '',
  error: '',
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const mockAuthenticate = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'pass') {
        resolve('Authenticated');
      } else {
        reject('Invalid credentials');
      }
    }, 1000);
  });
};

const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: '' });
    try {
      await mockAuthenticate(state.username, state.password);
      navigate('/welcome'); // Use navigate function to redirect
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error });
    }
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {state.error && <Error>{state.error}</Error>}
      <Input
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
        required
      />
      <Button type="submit" disabled={state.isLoading}>
        {state.isLoading ? 'Logging in...' : 'Login'}
      </Button>
    </Form>
  );
};

export default LoginForm;
