import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {IconButton, RoundedButton, Seperator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fetchAllFriends} from '../util/network';

function UsersScreen() {
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    async function getAllFriends() {
      const fetchedData = await fetchAllFriends();
      setFriends(fetchedData);
    }

    getAllFriends();
  }, []);

  const FriendList = ({item}) => {
    const imageURL = item.uri;
    // console.log(imageURL);
    return (
      <View style={styles.friendRequestContainer}>
        <Image style={styles.friendListImage} source={{uri: imageURL}} />
        <View style={styles.timeActionContainer}>
          <View style={styles.friendNameTimeContainer}>
            <Text style={[styles.friendName, {fontWeight: 'bold'}]}>
              {item.name}
            </Text>
            <Text style={styles.requestedTime}>{item.age}d</Text>
          </View>
          <View style={styles.requestActionContainer}>
            <RoundedButton
              text="Confirm"
              cStyle={[styles.RoundedButton, {backgroundColor: '#1877F2'}]}
              color="#fff"
            />
            <RoundedButton text="Remove" cStyle={styles.RoundedButton} />
          </View>
        </View>
      </View>
    );
  };

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
        style={{flexDirection: 'row', width: '100%', paddingHorizontal: 10,}}>
        <RoundedButton text="Suggesstions" cStyle={{marginRight: 10}} />
        <RoundedButton text="Your Friends" />
      </View>
      <Seperator style={{marginTop: 10, width: '92%'}} color="#d9d9d9" />
      <View style={styles.headerContainer}>
        <Text style={[styles.title, {fontSize: 18}]}>
          Friend requests <Text style={{color: 'red'}}>4</Text>
        </Text>
        <Text style={{fontSize: 16, color: '#1877F2'}}>See all</Text>
      </View>

      <FlatList
        style={{width: '100%'
        }}
        data={friends}
        renderItem={({item}) => (
          <View style={{width: '100%'}}>
            <FriendList item={item} />
          </View>
        )}
      />

      <Text style={[styles.title, {fontSize: 18}]}>
        Friend requests <Text style={{color: 'red'}}>4</Text>
      </Text>
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

    width: '100%',
    marginLeft: 10,
  },
  RoundedButton: {
    marginRight: 5,
    borderRadius: 5,
    paddingVertical: 8,
    width: 140,
  },
});
