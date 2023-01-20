import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {PressableButton, InputText} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {setNameAction, setAgeAction} from '../redux/action';

function LoginScreen({navigation}) {
  const {name, age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.headerText}>Login Form</Text>
        <InputText placeholder="User Name" />
        <InputText placeholder="Password" secure={true} />

        <View style={{flexDirection: 'row', width: '100%'}}>
          <PressableButton
            title="Login"
            textColor="#fff"
            background="#0099ff"
            onPress={() => {
              dispatch(setNameAction('Sivamani'));
              dispatch(setAgeAction(24));
              navigation.navigate('login');
            }}
            customeStyle={{width: '49%', marginRight: '1%'}}
          />
          <PressableButton
            title="Go Back"
            textColor="#fff"
            background="#0099ff"
            onPress={() => {
              navigation.goBack();
            }}
            customeStyle={{width: '49%', marginLeft: '1%'}}
          />
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: 30,
    backgroundColor: '#e7f1fe',
    borderRadius: 10,

    shadowColor: '#1877f2',
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 5,
    shadowOpacity: 0.5,
    marginBottom: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#0099ff',
  },
});
