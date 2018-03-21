import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

import PostTopic from './postTopic/PostTopic';
import TopicList from './topics/TopicsList';

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
        <h1 className="App-title">Welcome to Carousellit</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <PostTopic />
            <br />
            <TopicList />
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
    </div>
  </Provider>
);


export default App;
