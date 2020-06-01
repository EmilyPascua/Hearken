import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import DotENV from 'dotenv';

DotENV.config();

ReactDOM.render(<App />, document.getElementById('root'));