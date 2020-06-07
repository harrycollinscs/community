import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import Profile from '../Profile';


const ProfileStack = createStackNavigator();

function ProfileScreenStack() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={(props) => {
          const title = "harrycollins97"

          return (
            screenOptions(title, 'Profile')
          )
        }} />
    </ProfileStack.Navigator>
  );
}

const screenOptions = (title = '', pageType = '') => {
  let headerColor;

  switch (pageType) {
    case 'Profile':
      headerColor = '#ea5b25';
      break;
    default:
      headerColor = '#ea5b25';
  }

  return ({
    title: title,
    headerStyle: {
      backgroundColor: headerColor,
    },
    headerBackTitleVisible: false,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Gill Sans'
    }
  })
}

export default ProfileScreenStack;