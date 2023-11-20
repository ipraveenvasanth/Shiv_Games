import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        width: "80%",
        color: 'black',
        marginRight: 280,
        marginBottom: 2,
    },
    input: {
        width: "100%",
        height: 40,
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        marginRight: 22,
    },
});

export default InputField;
