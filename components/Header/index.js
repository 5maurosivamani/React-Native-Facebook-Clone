import React, {useState, useRef, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList,Alert} from 'react-native';
import IconButton from '../IconButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import List from './List';

const listData = [
  {
    IconData: (
      <MaterialCommunityIcons
        name="facebook-messenger"
        size={35}
        color="black"
      />
    ),
    listText: 'Post',
  },
  {
    IconData: <Ionicons name="book" size={30} color="black" />,
    listText: 'Story',
  },
  {
    IconData: (
      <MaterialCommunityIcons name="movie-play" size={30} color="black" />
    ),
    listText: 'Reel',
  },
  {
    IconData: <Entypo name="video-camera" size={30} color="black" />,
    listText: 'Live',
  },
];

export function Header({showRightMenu}) {

  const [isVisible, setIsVisible] = useState(false);

  const ItemSeperator = () => <View style={styles.ItemSeperator}></View>;

  return (


    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>facebook</Text>
      <View style={[styles.headerButtonsContainer, !showRightMenu && {display:"none"}]}>
        <View>
          <IconButton
            IconData={
              <MaterialCommunityIcons name="plus" size={25} color="black" />
            }
            cStyle={{marginRight: 5}}
            onPress={() => setIsVisible(prev=>!prev)}
          />

          <View
            style={[
              styles.createListContainer,
              {display: isVisible ? 'flex' : 'none'},
            ]}
            
            >
            <FlatList
              data={listData}
              renderItem={({item}) => (
                <List IconData={item.IconData} listText={item.listText} />
              )}
              ItemSeparatorComponent={() => <ItemSeperator />}
            />
          </View>
        </View>
        <IconButton
          IconData={<Ionicons name="search" size={25} color="black" />}
          cStyle={{marginRight: 5}}
        />
        <IconButton
          IconData={
            <MaterialCommunityIcons
              name="facebook-messenger"
              size={25}
              color="black"
            />
          }
          cStyle={{marginRight: 5}}
        />
      </View>
    </View>

  );
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    width: '100%',
    margin: 0,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#1877f2',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerButtonsContainer: {
    flexDirection: 'row',
  },
  ItemSeperator: {
    height: 1,
    width: '100%',
    backgroundColor: '#e6e6e6',
  },
  createListContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    minWidth: 150,
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'black',
    position: 'absolute',
    top: 45,
    left: -50,
    right: 50,
  },
});
