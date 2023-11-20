import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Images from './Images';
import InputField from './InputField';
import showAlert from '../utils/Alert';
import { handleRegister } from '../utils/api';

const SignupScreen = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    };

    const handleSignup = async () => {
        const { name, email, password, confirmPassword } = formData;

        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const data = await handleRegister(name, email, password, confirmPassword);
            if (data.success || data.succes) {
                showAlert('Success', 'Registration Successful.');
                props.navigation.navigate("Login")
            } else {
                showAlert('Registration Error', data.message);
            }
        } catch (error) {
            showAlert('Registration failed Error', error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.images}>
                    <Images />
                </View>
                <Text style={styles.title1}>Welcome to Shiv Games!</Text>
                <Text style={styles.title2}>Please enter details to dive in!</Text>
                <InputField
                    label="Name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChangeText={(text) => handleInputChange('name', text)}
                    secureTextEntry={false}
                />
                <InputField
                    label="Email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                    secureTextEntry={false}
                />
                <InputField
                    label="Password"
                    placeholder="Enter secure password"
                    value={formData.password}
                    onChangeText={(text) => handleInputChange('password', text)}
                    secureTextEntry={true}
                />
                <InputField
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChangeText={(text) => handleInputChange('confirmPassword', text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupButton} onPress={() => props.navigation.navigate("Login")}>
                    <View style={styles.signupButtonText}>
                        <Text style={styles.signupButtonText1}>I have an account?</Text>
                        <Text style={styles.signupButtonText2}> Sign in</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 25,
        justifyContent: 'center',
    },

    button: {
        width: '100%',
        height: 48,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18
    },
    images: {

    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
    },
    signupButton: {
        width: '100%',
        height: 44,
        padding: 10,
        marginTop: 3,
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
    title1: {
        width: '100%',
        color: "black",
        fontSize: 21,
        marginBottom: 2,
        marginRight: 220
    },
    title2: {
        width: '100%',
        fontSize: 15,
        marginBottom: 20,
        marginRight: 50,
    },
});

export default SignupScreen;
