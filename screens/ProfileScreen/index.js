import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import {v4 as uuidv4} from 'uuid';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import List from './List';

function ProfileScreen({navigation}) {
  const panelRef = useRef(null);

  const listData = [
    {
      icon: <SimpleLineIcons name="frame" size={20} color="black" />,
      text: 'Add Frame',
      onPress:()=>{}
    },
    {
      icon: <SimpleLineIcons name="picture" size={20} color="black" />,
      text: 'Select profile picture',
      onPress:()=>{ navigation.navigate("Camera") }
    },
    {
      icon: <Icon name="shield" size={20} color="black" />,
      text: 'Turn on profile picture guard',
      onPress:()=>{}
    },
    {
      icon: <FontAwesome name="magic" size={20} color="black" />,
      text: 'Add design',
      onPress:()=>{}
    },
    {
      icon: <Entypo name="user" size={20} color="black" />,
      text: 'Create avatar profile picture',
      onPress:()=>{  }
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.coverPhoto}>
        <View style={styles.coverTextContainer}>
          <Icon
            style={styles.coverTextIcon}
            name="camera-outline"
            size={23}
            color="black"
          />
          <Text style={styles.coverText}>Add Cover Photo</Text>
        </View>

        <View style={styles.profileOuter}>
          <Image
            source={require('../../assets/images/profile.jpg')}
            style={styles.profile}
          />

          <TouchableOpacity
            style={styles.cameraButtonTouchable}
            onPress={() => panelRef.current.togglePanel()}>
            <View style={styles.cameraButtonContainer}>
              <Icon
                style={styles.cameraButtonIcon}
                name="camera-outline"
                size={23}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheet ref={ref => (panelRef.current = ref)} isOpen={false}>

        <FlatList
          data={listData}
          renderItem={({item}) => (
            <List IconData={item.icon} listText={item.text} onPress={item.onPress} />
          )}

          style={{marginBottom:20}}
          
        />
      </BottomSheet>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  coverTextContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverPhoto: {
    height: 200,
    width: '100%',
    backgroundColor: '#cccccc',
  },
  coverText: {
    color: '#1a1a1a',
    fontWeight: '800',
    textAlign: 'center',
  },
  coverTextIcon: {
    marginRight: 6,
  },
  profile: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  profileOuter: {
    height: 165,
    width: 165,
    borderRadius: 90,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 90,
    left: 20,
  },
  cameraButtonContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#cccccc',
    position: 'absolute',
    bottom: -10,
    left: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
