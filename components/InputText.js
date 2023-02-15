import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

function InputText({customeStyle, secure, handleChange, value, error, ...others}) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={{marginBottom:15}}>
      <TextInput
        {...others}
        style={[
          styles.inputText,
          customeStyle && customeStyle,
          isFocus && {
            borderColor: '#0099ff',
            elevation: 5,
            shadowColor: '#0099ff',
            opacity: 0.9,
          },
        ]}
        onChangeText={handleChange}
        secureTextEntry={secure}
        value={value}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        autoComplete="off"
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

export default InputText;

const styles = StyleSheet.create({
  inputText: {
    marginBottom: 4,
    height: 50,
    backgroundColor: '#fff',
    fontSize: 18,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: '#c1c1c1',
    borderWidth: 1,
  },
  errorText: { color: '#d60a00'},
});