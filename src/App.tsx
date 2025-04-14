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
  NavigationContainer,
  useNavigation
} from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import Login2nd from './pages/Login2nd';

type RootStackParamList = {
  Login: undefined,
  Login2nd: undefined,
}

const LoginScreen = () => {
  const navi = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <TextInput placeholder='Input home server address here.' style={styles.input}/>
      <Button onPress={() => navi.navigate('Login2nd')} title='Login'/>
      <Button title='Register'/>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack () {
  return(
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen 
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Welcome',
        }} />
      <Stack.Screen 
        name="Login2nd"
        component={Login2nd}
        options={{
          title: 'Login',
        }} />
    </Stack.Navigator>
  );
}

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
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
