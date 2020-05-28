import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Button } from 'react-native';

import Home from './Home';
import Profile from './Profile';
import DiscussionListPage from './DiscussionListPage';
import Discussion from './Discussion';
import { Icon } from 'react-native-vector-icons';

const Stack = createStackNavigator();

const PageStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
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
            headerRight: () => (
              <Button
                title='Profile'
                color='#fff' />
            ),
          }}

        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Discussion List"
          component={DiscussionListPage}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Discussion"
          component={Discussion}
          options={{
            title: '',
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