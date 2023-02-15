import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity} from 'react-native';

function PressableButton({title, textColor,background,onPress, customeStyle, rounded}) {
  return (
    <TouchableOpacity onPress={onPress} style={customeStyle}>
        <View style={[styles.buttonContainer, {backgroundColor:background && background}, {borderRadius: rounded?6 :0}]}>
            <Text style={[styles.buttonText,{color:textColor && textColor}]}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PressableButton

const styles = StyleSheet.create({
    
    buttonContainer:{
      paddingVertical:10,
      backgroundColor:"#0099ff"
    },
    buttonText:{textAlign:"center",fontSize:18,fontWeight:500,color:"#fff"}
  });
  