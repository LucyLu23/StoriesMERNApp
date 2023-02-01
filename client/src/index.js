import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// import { configurestore } from '@reduxjs/toolkit';??
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App.js';
import './index.css';
//import { createMuiTheme } from '@material-ui/core'


const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.Fragment> 
    <Provider store={store}>
    <App />
    
    </Provider>
  
   </React.Fragment> 
  
);


