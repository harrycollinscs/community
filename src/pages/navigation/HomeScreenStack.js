import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import Profile from '../Profile';
import DiscussionListPage from '../DiscussionListPage';
import Discussion from '../Discussion';
import ComposerPage from '../ComposerPage';


const HomeStack = createStackNavigator();

function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="All discussions"
        component={Home}
        options={screenOptions('All discussions')}
      />
      <HomeStack.Screen
        name="Profile"
        component={Profile}
        options={(props) => {
          return (
            screenOptions(props.route.params.memberName, 'Profile')
          )
        }}
      />
      <HomeStack.Screen
        name="Discussion"
        component={Discussion}
        options={(props) => {
          const title = props.route.params.memberName + "'s post";
          return (
            screenOptions(title, 'Discussion')
          )
        }}
      />
      <HomeStack.Screen
        name="Composer"
        component={ComposerPage}
        options={ screenOptions('Composer', 'Discussion') }
      />
    </HomeStack.Navigator>
  );
}

const screenOptions = (title = '', pageType = '') => {
  let headerColor;

  switch (pageType) {
    case 'Discussion':
      headerColor = '#35ADCE';
      break;
    case 'Profile':
      headerColor = '#ea5b25';
      break;
    default:
      headerColor = '#35ADCE';
  }

  return ({
    // gestureDirection: 'vertical',
    // transitionSpec: {
    //   open: {
    //     animation: 'timing',
    //     config: {
    //       stiffness: 1000,
    //       damping: 500,
    //       mass: 3,
    //       overshootClamping: true,
    //       restDisplacementThreshold: 0.01,
    //       restSpeedThreshold: 0.01,
    //       useNativeDriver: true,
    //     }},
    //   close: {
    //     animation: 'timing',
    //     config: {
    //       stiffness: 1000,
    //       damping: 500,
    //       mass: 3,
    //       overshootClamping: true,
    //       restDisplacementThreshold: 0.01,
    //       restSpeedThreshold: 0.01,
    //       useNativeDriver: true,
    //     }},
    // },

    title: title,
    headerStyle: {
      backgroundColor: headerColor,
    },
    gestureDirection: 'vertical',
    headerBackTitleVisible: false,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Gill Sans'
    }
  })
}

export default HomeScreenStack;