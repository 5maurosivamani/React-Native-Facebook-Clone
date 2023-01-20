import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function RoundedButton({text, cStyle, color}) {
  return (
    <TouchableOpacity>
      <View style={[styles.roundedButtonContainer, cStyle && cStyle]}>
        <Text style={[styles.roundedButtonText, color && {color: color}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default RoundedButton;

const styles = StyleSheet.create({
  roundedButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#bfbfbf',
    borderRadius: 28,
  },
  roundedButtonText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#1a1a1a',
    textAlign: 'center',
  },
});
