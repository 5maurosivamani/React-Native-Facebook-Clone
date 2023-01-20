import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

function IconButton({IconData, cStyle,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonContainer, cStyle && cStyle]}>{IconData}</View>
    </TouchableOpacity>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    width: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
