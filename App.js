import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from './src/pages/navigation/TabNavigator';

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <TabNavigator/>
      </>
    );
  }
}

