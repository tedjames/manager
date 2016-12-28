import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return(
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
