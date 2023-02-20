import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {PressableButton} from '../components';

function MenuScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>MenuScreen</Text>
      <PressableButton
        title="Contacts"
        onPress={() => {
          navigation.navigate('Contacts');
        }}
        background="#007AFF"
        buttonStyle={{marginTop: 20, paddingHorizontal: 20}}
        rounded={true}
        textColor="#fff"
      />
      <PressableButton
        title="Storage"
        onPress={() => {
          navigation.navigate('Storage');
        }}
        background="#007AFF"
        buttonStyle={{marginTop: 20, paddingHorizontal: 20}}
        rounded={true}
        textColor="#fff"
      />
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
});
