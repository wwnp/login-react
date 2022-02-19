import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './firebase'
ReactDOM.render(
  <BrowserRouter>
    <App />
    <React.StrictMode>
    </React.StrictMode>
  </BrowserRouter >
  ,
  document.getElementById('root')
);
