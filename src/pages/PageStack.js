import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Button } from 'react-native';

import Home from './Home';
import Profile from './Profile';
import DiscussionListPage from './DiscussionListPage';

const Stack = createStackNavigator();

const  PageStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ Home }
          options={{
            title: 'Community',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <Button
              title='Profile'
              color='#fff'/>
            ),
          }}

        />
        <Stack.Screen
          name="Profile"
          component={ Profile }
          options={{ 
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',

           }}
        />
        <Stack.Screen
          name="Discussion List"
          component={ DiscussionListPage }
          options={{ 
            title: 'Discussion List',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PageStack;