import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/registerScreen';
import HomeScreen from './screens/homeScreen';
import SplashScreen from './screens/splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={SplashScreen} name="Splashscreen" options={{ headerShown:false }} />
        <Stack.Screen component={RegisterScreen} name="Registerscreen" options={{ headerShown:false }}/>
        <Stack.Screen component={HomeScreen} name="Homescreen" options={{ headerShown:false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}

