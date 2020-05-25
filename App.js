import 'react-native-gesture-handler';
import * as React from 'react';
import PageStack from './src/pages/PageStack';

import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <PageStack/>
    </>
  );
}