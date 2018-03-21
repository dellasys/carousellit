import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; /* Needed for redux dev tools */
import { save, load } from 'redux-localstorage-simple'; /* Save redux state to localStorage */
import logger from 'redux-logger'; /* Display prev state, action triggered, and next state in console */
import rootReducer from './rootReducer'; /* Combining all the reducers */

import logo from './logo.svg';
import './App.css';

import PostTopic from './postTopic/PostTopic';
import TopicList from './topics/TopicsList';

const middleware = [logger]; /* Array to keep all the middlewares */

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
            <hr />
            <TopicList />
            <div className="endOfTheList">
              Only top 20 records will be displayed.
            </div>
            <br />
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
    </div>
  </Provider>
);


export default App;
