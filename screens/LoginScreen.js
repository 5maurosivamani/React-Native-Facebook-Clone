import React, {useState, useContext} from 'react';
import uuid from 'uuid';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {PressableButton, InputText} from '../components';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';

function LoginScreen({navigation}) {
  const {login, userData, isAuthenticated} = useContext(AuthContext);
  const [authError, setAuthError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    password: '',
  });

  const handleUserName = text => {
    setFormData(prev => ({...prev, name: text}));
  };

  const handlePassword = text => {
    setFormData(prev => ({...prev, password: text}));
  };

  const validateForm = ({name, password}) => {
    if (name === '') {
      setErrors(prev => ({
        ...prev,
        name: 'Please Enter the Email or Phone number',
      }));
      return false;
    } else {
      setErrors(prev => ({...prev, name: ''}));
    }
    if (password === '') {
      setErrors(prev => ({...prev, password: 'Please Enter the Password'}));
      return false;
    } else {
      setErrors(prev => ({...prev, password: ''}));
    }

    return true;
  };

  const handleLogin = async () => {
    const res = validateForm(formData);

    console.log(formData);

    if (res === true) {
      await login(formData);
      console.log(isAuthenticated);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/fb-login.jpg')}
          style={{height: 210, width: '100%', resizeMode: 'stretch'}}
          alt="facebook-banner"
        />

        <View style={styles.loginContainer}>
          {authError && <Text style={styles.error}>{authError}</Text>}
          <Text style={styles.headerText}>Login Form</Text>
          <InputText
            placeholder="Phone or Email"
            handleChange={handleUserName}
            value={formData.name}
            error={errors.name ? errors.name : ''}
          />
          <InputText
            placeholder="Password"
            secure={true}
            handleChange={handlePassword}
            value={formData.password}
            error={errors.password ? errors.password : ''}
          />

          <PressableButton
            title="Login"
            textColor="#fff"
            background="#0099ff"
            onPress={handleLogin}
            rounded={true}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <View
              style={{flex: 1, height: 1, backgroundColor: '#c1c1c1'}}></View>
            <Text style={{marginHorizontal: 5}}>OR</Text>
            <View
              style={{flex: 1, height: 1, backgroundColor: '#c1c1c1'}}></View>
          </View>

          <PressableButton
            title="Create new Facebook account"
            textColor="#fff"
            background="green"
            textSize={15}
            customeStyle={{marginTop: 10}}
            onPress={() => {
              navigation.navigate('register');
            }}
            rounded={true}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loginContainer: {
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 5,
    shadowOpacity: 0.5,
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 40,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#0099ff',
  },
  forgotText: {
    textAlign: 'center',
    color: '#0099ff',
    fontWeight: 600,
  },
  error: {
    color: 'red',
    paddingLeft: 5,
  },
});
