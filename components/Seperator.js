import React from 'react'
import {View,StyleSheet} from "react-native"

function Seperator({color, height, style}) {
  return (
    <View style={[styles.ItemSeperator,color && {backgroundColor: color} ,height && {height: height}, style]}></View>
  )
}

export default Seperator

const styles = StyleSheet.create({
    ItemSeperator: {
        height: 1,
        width: '100%',
        backgroundColor: '#e6e6e6',
      },
})