// import React, { Component } from 'react';
// import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// // import Ionicons from 'react-native-vector-icons/Ionicons';

// // import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createStackNavigator} from 'react-navigation-stack';

// import Home from '../pages/Home';
// import Profile from '../pages/Profile';

// export default class NavBar extends Component {

//   render() {

//     const HomeStack = createStackNavigator(
//       {
//         //Defination of Navigaton from home screen
//         Home: { screen: Home },
//         Profile: { screen: Profile },
//       },
//       {
//         defaultNavigationOptions: {
//           //Header customization of the perticular Screen
//           headerStyle: {
//             backgroundColor: '#42f44b',
//           },
//           headerTintColor: '#FFFFFF',
//           title: 'Home',
//           //Header title
//         },
//       }
//     )

//     return (
//       {HomeStack}
//       // <Text>hi</Text>
//     );

//   }

// }

// // export default class NavBar extends Component {

// //   render() {


// //     return (
// //       <Text>hi</Text>
// //     );

// //   }
// // }


// // const HomeStack = createStackNavigator(
// //   {
// //     //Defination of Navigaton from home screen
// //     Home: { screen: HomeScreen },
// //     Details: { screen: DetailsScreen },
// //   },
// //   {
// //     defaultNavigationOptions: {
// //       //Header customization of the perticular Screen
// //       headerStyle: {
// //         backgroundColor: '#42f44b',
// //       },
// //       headerTintColor: '#FFFFFF',
// //       title: 'Home',
// //       //Header title
// //     },
// //   }
// // );