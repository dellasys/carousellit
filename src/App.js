import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const middleware = [logger];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-xs-3" />
          <div className="col-xs-6">
            content
          </div>
          <div className="col-xs-3" />
        </div>
      </div>
    </div>
  </Provider>
);


export default App;
