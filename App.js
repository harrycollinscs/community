import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from './src/pages/navigation/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <TabNavigator/>
      </Provider>
    );
  }
}

