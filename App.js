import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TopTabs, Header} from './components/index.js';
import {CameraScreen, LoginScreen} from './screens';

import {Provider} from 'react-redux';
import {Store} from './redux/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: () => <Header />,
              headerShown: true,
            }}>
            <Stack.Screen name="topTabs" component={TopTabs} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="Camera" component={CameraScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
