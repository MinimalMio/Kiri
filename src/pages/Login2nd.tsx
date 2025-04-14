import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native'
import {
  useRoute,
  RouteProp
} from '@react-navigation/native';
import type { RootStackParamList } from '../App';

type Login2ndScreenRouteProp = RouteProp<RootStackParamList, 'Login2ndScreen'>;

const Login2ndScreen = () => {
  const route = useRoute<Login2ndScreenRouteProp>();
  const { homeServer } = route.params;

  return (
    <View>
      <Text>You choosed home server: {homeServer}</Text>
      <TextInput style={styles.input} placeholder='Username'/>
      <TextInput style={styles.input} placeholder='Password'/>
    </View>
  )
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

export default Login2ndScreen;