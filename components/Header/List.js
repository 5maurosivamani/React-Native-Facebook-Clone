import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function List({IconData, listText, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listContainer}>
        {IconData} 
        <Text style={styles.listText}>{listText}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default List;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  listText: {
    fontSize: 18,
    fontWeight: 400,
    color: '#262626',
    marginLeft:10
  },
});
