/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Image,
  useColorScheme,
  View,
} from 'react-native';

const Cat = () => {
  return(
    <View>
      <Text>I'm a Cat!</Text>
    </View>
  );
}

const App = () => {
  return (
    <View>
      <Text>Hello~</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );
}

export default App;
