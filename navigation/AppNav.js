import React, {useState,useContext} from 'react';
import {Text, View, SafeAreaView, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {Store} from '../redux/store';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {AuthContext} from '../context/AuthContext';

function AppNav() {

  const {isLoading, isAuthenticated} = useContext(AuthContext);

  if (isLoading) {
    return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator size="large" color="#1877F2" />
    <Text style={{color:"#1877F2", marginTop: 8}}>Loading</Text>
  </View>)
  }

  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          {isAuthenticated ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default AppNav;
