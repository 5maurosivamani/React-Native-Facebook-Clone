import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Icon name="settings-outline" size={30} color="black" />
      <Text>Settings</Text>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})
