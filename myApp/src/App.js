// App.js
import React, { useEffect } from 'react';
import AppNavigator from './AppNavigator';
import SplashScreen from 'react-native-splash-screen';
// import { Platform } from 'react-native';

const App = () => {

    useEffect(() => {
        if (Platform.OS === 'android') {
            SplashScreen.hide();
        }
    }, []);

    return <AppNavigator />;
};

export default App;


