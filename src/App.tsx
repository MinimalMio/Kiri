import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View
} from 'react-native';
// import {
//   Button,
// } from '@react-navigation/elements'
import {
  NavigationContainer,
  useNavigation
} from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import Login2ndScreen from './pages/Login2nd';
import RegisterScreen from './pages/Register';

export type RootStackParamList = {
  LoginScreen: undefined,
  Login2ndScreen: { homeServer: string },
  RegisterScreen: { homeServer: string},
}

const LoginScreen = () => {
  const navi = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [homeServerAddr, setHomeServerAddr] = useState('');

  return (
    <View>
      <TextInput
        placeholder='Input home server address here.'
        style={styles.input}
        onChangeText={setHomeServerAddr}
      />
      <Button
        onPress={() => navi.navigate('Login2ndScreen', { homeServer: homeServerAddr })}
        title='Login'
      />
      <Button
        onPress={() => navi.navigate('RegisterScreen', { homeServer: homeServerAddr })}
        title='Register'
      />
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack () {
  return(
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen 
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Welcome',
        }} 
      />
      <Stack.Screen 
        name="Login2ndScreen"
        component={Login2ndScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen 
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 5,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 1,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
