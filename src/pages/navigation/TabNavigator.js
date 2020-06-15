import 'react-native-gesture-handler';


//Your final app.js with stack navigator and tab navigator
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreenStack from './HomeScreenStack';
import ProfileScreenStack from './ProfileScreenStack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { 
  faHome as HomeSolid, 
  faTags as TagsSolid, 
  faSearch as SearchSolid, 
  faUser as UserSolid
} from '@fortawesome/free-solid-svg-icons';

import {
   faHome as HomeHollow,
   faTags as TagsHollow,
   faSearch as SearchHollow,
   faUser as UserHollow
  } from '@fortawesome/free-regular-svg-icons'
import TagsScreenStack from './TagsScreenStack';
import SearchScreenStack from './SearchScreenStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            
            switch( route.name ) {
              case 'Home':
                iconName = HomeSolid;
                break;
              case 'Tags':
                iconName = TagsSolid;
                break;
              case 'Search':
                iconName = SearchSolid;
                break;
              case 'Profile':
                iconName = UserSolid;
                break;
            }

            const iconColor = focused ? '#fcc31e' : 'grey';

            return <FontAwesomeIcon icon={ iconName } color={ iconColor } size={ 20 }/>;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: 'white',//color you want to change
          },
          activeTintColor: '#fcc31e',
          inactiveTintColor: 'gray',
          showIcon: true,
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Tags" component={TagsScreenStack} />
        <Tab.Screen name="Search" component={SearchScreenStack} />
        <Tab.Screen name="Profile" component={ProfileScreenStack}  />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
