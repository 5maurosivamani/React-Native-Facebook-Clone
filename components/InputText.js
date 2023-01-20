import React, {useState} from 'react';
import { StyleSheet, TextInput} from 'react-native';

function InputText({placeholder, customeStyle, secure}) {
  const [text, setText] = useState('');

  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.inputText,customeStyle && customeStyle]}
      onChangeText={text => setText(text)}
      secureTextEntry={secure}
      value={text}
    />
  );
}

export default InputText;


const styles = StyleSheet.create({inputText: {
    height: 50,
    backgroundColor: '#80ccff',
    fontSize: 18,
    paddingLeft: 20,
    marginBottom: 15,
  }})