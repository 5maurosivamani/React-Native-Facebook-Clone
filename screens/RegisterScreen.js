import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {PressableButton, InputText} from '../components';
import {AuthContext} from '../context/AuthContext';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  emailOrPhone: Yup.string().required("Email or Phone is Required"),
  fullName: Yup.string().required("FullName is Required"),
  password: Yup.string().required("Password is Required")
});

function RegisterScreen({navigation}) {
  const formik = useFormik({
    initialValues: {
      emailOrPhone: '',
      fullName: '',
      password: '',
    },
    validationSchema: userSchema,
    validateOnBlur: true,
    onSubmit: values => {
      console.log(JSON.stringify(values));
    },
  });

  const handleRegister = () => {};

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        source={require('../assets/images/fb-login.jpg')}
        style={{height: 210, width: '100%', resizeMode: 'stretch'}}
        alt="facebook-banner"
      />
      <View style={styles.loginContainer}>
        <Text style={[styles.headerText, {fontSize: 20}]}>
          Create new Facebook account
        </Text>
        <InputText
          placeholder="Phone or Email"
          handleChange={formik.handleChange('emailOrPhone')}
          value={formik.values.emailOrPhone}
          error={formik.errors.emailOrPhone ? formik.errors.emailOrPhone : ''}
          name="emailOrPhone"
        />
        <InputText
          placeholder="Full Name"
          handleChange={formik.handleChange('fullName')}
          value={formik.values.fullName}
          error={formik.errors.fullName ? formik.errors.fullName : ''}
          name="fullName"
        />

        <InputText
          placeholder="Password"
          handleChange={formik.handleChange('password')}
          value={formik.values.password}
          error={formik.errors.password ? formik.errors.password : ''}
          name="password"
          secure={true}
        />

        <PressableButton
          title="Register"
          textColor="#fff"
          background="#0099ff"
          onPress={()=>{
            formik.handleSubmit()
          }}
          rounded={true}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
            <Text style={{marginRight:10}}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('login');
            }}>
              
            <Text
              style={[
                styles.forgotText,
                {color: 'green'},
              ]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

export default RegisterScreen;

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
});
