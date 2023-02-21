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

function LoginScreen({navigation}) {
  const {login, userData, isAuthenticated} = useContext(AuthContext);
  const [authError, setAuthError] = useState('');

  const [formData, setFormData] = useState({
    email_phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email_phone: '',
    password: '',
  });

  const handleUserName = text => {
    setFormData(prev => ({...prev, email_phone: text}));
  };

  const isNumber = value => {
    if (typeof value === 'string') {
      return !isNaN(value);
    }
  };

  const handlePassword = text => {
    setFormData(prev => ({...prev, password: text}));
  };

  const validateForm = ({email_phone, password}) => {

    if (email_phone === '') {
      setErrors(prev => ({
        ...prev,
        email_phone: 'Phone or Email is Required',
      }));
      return false;
    } else if (isNumber(email_phone) && email_phone.length !== 10) {
      setErrors(prev => ({
        ...prev,
        email_phone: 'Phone must be 10 digits',
      }));
      return false;
    } else if (
      !isNumber(email_phone) &&
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_phone)
    ) {
      setErrors(prev => ({
        ...prev,
        email_phone: 'Invalid Email',
      }));
      return false;
    } else {
      setErrors(prev => ({...prev, email_phone: ''}));
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

    if (res === true) {
      const postData = {
        email: '',
        phone: '',
        password: formData.password,
      };

      if (isNumber(formData.email_phone)) {
        postData.phone = formData.email_phone;
      } else {
        postData.email = formData.email_phone;
      }

      await login(postData);
      console.log({isAuthenticated});
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
            value={formData.email_phone}
            error={errors.email_phone ? errors.email_phone : ''}
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
