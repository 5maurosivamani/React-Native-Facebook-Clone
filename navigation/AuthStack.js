import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Header} from '../components/index.js';
import {LoginScreen} from '../screens';

const Stack = createNativeStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header showRightMenu ={false} />,
        headerShown: true,
      }}>
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
