import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import type { RootStackParamList } from '../App.tsx';

type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'RegisterScreen'>;

const RegisterScreen = () => {
  const route = useRoute<RegisterScreenRouteProp>();
  const { homeServer } = route.params;

  return (
    <View>
      <Text>Not implemented.</Text>
      <Text>Getted home server: {homeServer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    view: {},
});

export default RegisterScreen;