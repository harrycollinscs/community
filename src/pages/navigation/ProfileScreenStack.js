import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import Profile from '../Profile';


const ProfileStack = createStackNavigator();

function ProfileScreenStack() {
  return (
    <ProfileStack.Navigator>
      {/* <ProfileStack.Screen 
      name="Home" 
      component={Home}
      options={{
        title: 'Community',
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontFamily: 'Gill Sans'
        },
      }}
       />  */}
      <ProfileStack.Screen 
      name="Profile" 
      component={Profile}
      options={{
        title: 'Community',
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontFamily: 'Gill Sans'
        },
      }}/>
    </ProfileStack.Navigator>
  );
}

export default ProfileScreenStack;