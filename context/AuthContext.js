import React, {useState, useEffect, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {log} from 'react-native-reanimated';

export const AuthContext = createContext();

function AuthProvider({children}) {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async formData => {
    console.log(formData);

    setIsLoading(true);

    const serverUrl = `http://192.168.0.109:5001/login?phone=${formData.phone}&email=${formData.email}&password=${formData.password}`;
    // const serverUrl = `http://192.168.0.109:5001/users`;

    await axios
      .get(serverUrl)
      .then(response => {

        console.log(response.data);

        if (response.status === 200) {
          const {token, userData} = response.data;
          setUserToken(token);
          setUserData(userData);

          (async () => {
            try {
              await AsyncStorage.setItem('userToken', token);
              await AsyncStorage.setItem('userData', JSON.stringify(userData));
            } catch (e) {
              console.log(e);
            }
          })();

          setInterval(() => {
            setIsLoading(false);
            setIsAuthenticated(true);
          }, 2000);
        }
      })
      .catch(err => console.log('Axios Error : ', err));
  };

  const logOut = () => {
    setIsLoading(true);
    setUserToken(null);
    setUserData(null);
    setIsAuthenticated(false);
    (async () => {
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userData');
      } catch (e) {
        console.log(e);
      }
    })();

    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      let storedUserToken = await AsyncStorage.getItem('userToken');
      let storedUserData = await AsyncStorage.getItem('userData');

      if (storedUserToken !== null && storedUserData !== null) {
        setIsLoading(true);
        setUserToken(storedUserToken);
        setUserData(JSON.parse(storedUserData));
        setIsAuthenticated(true);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logOut,
        isLoading,
        setIsLoading,
        isAuthenticated,
        userToken,
        userData,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
