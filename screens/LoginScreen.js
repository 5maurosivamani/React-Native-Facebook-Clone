import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PressableButton, InputText} from '../components';
import { AuthContext } from '../context/AuthContext';



function LoginScreen({navigation}) {

  const {login, userData} = useContext(AuthContext)


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
      return false
    } else {
      setErrors(prev => ({...prev, name: ''}));
    }
    if (password === '') {
      setErrors(prev => ({...prev, password: 'Please Enter the Password'}));
      return false
    } else {
      setErrors(prev => ({...prev, password: ''}));
    }

    return true
  };

  const handleLogin = () => {
    const res = validateForm(formData)

    if(res === true){
      login(formData)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        
        <Text style={styles.headerText}>Login Form</Text>
        <InputText
          placeholder="Email or phone number"
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
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
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
    backgroundColor: '#fff',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 5,
    shadowOpacity: 0.5,
    marginBottom: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
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
    marginTop: 20,
    color: '#0099ff',
    fontWeight: 600,
  },
});
