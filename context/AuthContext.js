import React, {useState, useEffect, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

function AuthProvider({children}) {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = formData => {
    setIsLoading(true);

    setUserToken('DFXX5656DLMMM444');
    setUserData(formData);

    (async () => {
      try {
        await AsyncStorage.setItem('userToken', 'DFXX5656DLMMM444');
        await AsyncStorage.setItem('userData', JSON.stringify(formData));
      } catch (e) {
        console.log(e);
      }
    })();

    setInterval(() => {
      setIsLoading(false);
      setIsAuthenticated(true)
    }, 2000);
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
        setIsAuthenticated(true)
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
      value={{login, logOut, isLoading, setIsLoading,isAuthenticated, userToken, userData}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
