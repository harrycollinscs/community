import 'react-native-gesture-handler';


//Your final app.js with stack navigator and tab navigator
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreenStack from './HomeScreenStack';
import ProfileScreenStack from './ProfileScreenStack';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;
        //     if (route.name === 'Home') {
        //       iconName = focused
        //         ? 'ios-information-circle'
        //         : 'ios-information-circle-outline';
        //     } else if (route.name === 'Settings') {
        //       iconName = focused
        //         ? 'ios-list-box'
        //         : 'ios-list';
        //     }

        //     return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        // })}
        tabBarOptions={{
          style: {
            backgroundColor: 'black',//color you want to change
          },
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Search" component={HomeScreenStack} />
        <Tab.Screen name="( + )" component={HomeScreenStack} />
        <Tab.Screen name="Help" component={HomeScreenStack} />
        <Tab.Screen name="Profile" component={ProfileScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
