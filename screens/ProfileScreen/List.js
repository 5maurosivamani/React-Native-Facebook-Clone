import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IconButton} from '../../components';

function List({IconData, listText, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.bottomListContainer}>
        <IconButton IconData={IconData} cStyle={{marginRight: 20}} />
        <Text style={styles.bottomListText}>{listText}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default List;

const styles = StyleSheet.create({
  bottomListContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  bottomListText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#262626',
  },
});
