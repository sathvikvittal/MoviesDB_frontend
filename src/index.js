import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/views/HomePage/Home';
import Login from './components/views/LoginPage/Login';
import Register from './components/views/RegisterPage/Register';
import Movie from './components/views/Movie/Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Movie></Movie>
);

