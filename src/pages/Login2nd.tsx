import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native'

const Login2ndScreen = () => {
    return (
        <View>
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