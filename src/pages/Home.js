import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,

} from 'react-native';

import TagsList from '../components/TagsList';
import TagsHeader from '../components/TagsHeader';


export default class Home extends Component {

  render() {

    const { navigation } = this.props;

    navigation.setOptions({

      headerRight: () => (
        <Button
          title='◉'
          color='#fff'
          onPress={() =>
            navigation.navigate('Profile')
          } />
      ),
    })

    return (
      <>
        <TagsHeader />
        <TagsList navigation={navigation} />
      </>
    )
  }
}


// const Home = ({ navigation }) => {

//   navigation.setOptions({

//     headerRight: () => (
//       <Button
//         title='O'
//         color='#fff'
//         onPress={() =>
//           navigation.navigate('Profile')
//         } />
//     ),
//   })

// alert(this.props)
//   return (
//   <>

//     <View>
//       <Text>Hi</Text>
//       <Button
//         title="Profile"
//         onPress={() =>
//           navigation.navigate('Profile')
//         }
//       />

//     </View>
//   </>

// )

// };


// export default Home;
