
import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SplashScreen from 'react-native-splash-screen';
import SplashScreen from 'react-native-splash-screen';

import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import PageStack from './src/pages/PageStack';

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <PageStack />
      </>
    );
  }
}


class MyTabs extends Component {

  render() {

    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );

  }
}
