import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {IconButton, RoundedButton, Seperator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

function UsersScreen() {

    const List = <View style={styles.friendRequestContainer}>
    <Image
      style={styles.friendListImage}
      source={require('../assets/images/profile.jpg')}
    />
    <View style={styles.timeActionContainer}>
      <View style={styles.friendNameTimeContainer}>
        <Text style={[styles.friendName, {fontWeight: 'bold'}]}>Maxin</Text>
        <Text style={styles.requestedTime}>1y</Text>
      </View>
      <View style={styles.requestActionContainer}>
        <RoundedButton
          text="Confirm"
          cStyle={styles.RoundedButton}
          color="#fff"
        />
        <RoundedButton
          text="Delete"
          cStyle={styles.RoundedButton}
          color="#fff"
        />
      </View>
    </View>
  </View>

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Friends</Text>
        <IconButton
          IconData={<Ionicons name="search" size={25} color="black" />}
          cStyle={{backgroundColor: '#bfbfbf'}}
        />
      </View>
      <View
        style={{flexDirection: 'row', width: '100%', paddingHorizontal: 10}}>
        <RoundedButton text="Suggesstions" cStyle={{marginRight: 10}} />
        <RoundedButton text="Your Friends" />
      </View>
      <Seperator style={{marginTop: 10, width: '92%'}} color="#d9d9d9" />
      <View style={styles.headerContainer}>
        <Text style={[styles.title, {fontSize: 18}]}>Friend requests <Text style={{color:"red"}}>2</Text></Text>
        <Text style={{fontSize: 16, color: '#1877F2'}}>See all</Text>
      </View>
      {List}
      {List}
      {List}
    </View>
  );
}

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  friendRequestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 5,
  },

  friendListImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  friendNameTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  requestActionContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  timeActionContainer: {
    justifyContent: 'space-between',
    height: 70,
  },
  RoundedButton: {
    backgroundColor: '#1877F2',
    marginRight: 5,
    borderRadius: 5,
    paddingVertical: 5,
  },
});
