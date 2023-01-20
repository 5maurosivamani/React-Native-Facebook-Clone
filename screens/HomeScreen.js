import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {setNameAction, setAgeAction} from '../redux/action';
import {useSelector, useDispatch} from 'react-redux';

function HomeScreen({navigation}) {
  const {name, age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <View style={{marginTop: 10}}>
        <Button
          title="Log In Form"
          onPress={() => {
            navigation.navigate('login');
          }}
        />
      </View>

      <View style={{marginTop: 10}}>
        <Button
          title="Logout"
          onPress={() => {
            dispatch(setNameAction(''));
            dispatch(setAgeAction(0));
          }}
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
