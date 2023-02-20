import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TopTabs, Header} from '../components/index.js';
import {CameraScreen, LoginScreen, ContactScreen, StorageScreen} from '../screens';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header showRightMenu={true} />,
        headerShown: true,
      }}>
      <Stack.Screen name="topTabs" component={TopTabs} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Contacts" component={ContactScreen} />
      <Stack.Screen name="Storage" component={StorageScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
