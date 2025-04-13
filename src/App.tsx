import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {
  return (
    <View>
      <Text style={styles.title}>Welcome</Text>
      <TextInput placeholder='Input home server address here.' style={styles.input}/>
      <Button title='Login'/>
    </View>
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

export default App;
