import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DotENV from 'dotenv';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/root-reducer';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

DotENV.config();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));