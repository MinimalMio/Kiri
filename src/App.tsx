import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';
// import {
//   Button,
// } from '@react-navigation/elements'
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login2rd from './pages/Login2rd';

const LoginScreen = () => {
  const navi = useNavigation();

  return (
    <View>
      <TextInput placeholder='Input home server address here.' style={styles.input}/>
      <Button onPress={() => navi.navigate('Login2rdScreen')} title='Login'/>
      <Button title='Register'/>
    </View>
  );
}

const rootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screens: {
    Login: {
      screen: LoginScreen,
      options: {
        title: 'Welcome to Kiri'
      },
    },
    Login2rdScreen: Login2rd,
  }
});

const Navigation = createStaticNavigation(rootStack);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    margin: 5,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 1,
  },
});

export default function App() {
  return <Navigation />
};
