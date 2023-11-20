import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Images from './Images';
import InputField from './InputField';
import { handleLogin } from '../utils/api';
import showAlert from '../utils/Alert';

const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {
        try {
            if (!email || !password) {
                showAlert('Login Error', 'Please fill in all fields');
                return;
            }
            const data = await handleLogin(email, password);
            if (data.isAuth) {
                showAlert('Success', 'Login Successful.');
            } else {
                showAlert('Login Error', data.message);
            }
        } catch (error) {
            showAlert('Login Error', error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Images />
            <Text style={styles.title}>Login</Text>
            <Text style={styles.title1}>Welcome Back</Text>
            <Text style={styles.title2}>Welcome Back! Please enter your details</Text>
            <View style={styles.fieldView}>
                <InputField
                    label="Email"
                    placeholder="test@gmail.com"
                    value={email}
                    onChangeText={setEmail}
                    secureTextEntry={false}
                />
                <InputField
                    label="Password"
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={loginUser}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton} onPress={() => props.navigation.navigate("Signup")}>
                <View style={styles.signupButtonText}>
                    <Text style={styles.signupButtonText1}>Don't have an account?</Text>
                    <Text style={styles.signupButtonText2}> Sign up</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fieldView: {
        width: "80%"
    },
    title: {
        color: "red",
        fontSize: 24,
        marginBottom: 20,
        marginRight: 280
    },
    title1: {
        color: "black",
        fontSize: 18,
        marginBottom: 2,
        marginRight: 217
    },
    title2: {
        width: '100%',
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 30,
        marginRight: 65,
    },
    button: {
        width: '80%',
        height: 48,
        padding: 10,
        backgroundColor: '#C11B17',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
    },
    signupButton: {
        width: '80%',
        height: 44,
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupButtonText: {
        flexDirection: 'row'
    },
    signupButtonText1: {
        color: 'gray',
        fontSize: 16,
    },
    signupButtonText2: {
        color: 'red',
        fontSize: 16,
    },
});

export default LoginScreen;
