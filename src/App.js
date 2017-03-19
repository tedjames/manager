import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBwJ84gfXLNiZehMdEuRtKfkgeZfCIRZh4",
      authDomain: "udemymanager-fc2e5.firebaseapp.com",
      databaseURL: "https://udemymanager-fc2e5.firebaseio.com",
      storageBucket: "udemymanager-fc2e5.appspot.com",
      messagingSenderId: "313441834764"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
