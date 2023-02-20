import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Header} from '../components/index.js';
import {LoginScreen, RegisterScreen} from '../screens';

const Stack = createNativeStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={LoginScreen}  />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
