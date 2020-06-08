import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const PostsTab = () => (
  <View style={styles.scene}>
    <Text>Posts</Text>
  </View >
);

const DiscussionsTab = () => (
  <View style={styles.scene}>
    <Text>Discussions</Text>
  </View>
);

const MentionsTab = () => (
  <View style={styles.scene}>
    <Text>Mentions</Text>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function ProfileTabs() {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: 'PostsTab',
      title: 'Posts'
    },
    {
      key: 'DiscussionsTab',
      title: 'Discussions'
    },
    {
      key: 'MentionsTab',
      title: 'Mentions'
    },
  ]);

  const renderScene = SceneMap({
    PostsTab: PostsTab,
    DiscussionsTab: DiscussionsTab,
    MentionsTab: MentionsTab,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={props =>
        <TabBar
          {...props}
          style={{ 'backgroundColor': '#ea5b25' }}
          labelStyle={{ 'color': '#fff', 'textTransform': 'none' }}
          indicatorStyle={{ 'backgroundColor': '#fff' }}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});