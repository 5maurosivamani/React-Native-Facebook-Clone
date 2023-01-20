import {TouchableOpacity, Text, View,Alert} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {CameraScreen, SettingsScreen, HomeScreen,ProfileScreen, UsersScreen} from '../screens/index.js';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TopTab = createMaterialTopTabNavigator();

function TopTabs({name}) {



  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: '#fff'},
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: 'black',
      
      }}>
      <TopTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: () => (
            <TouchableOpacity style={{width: '100%'}}>
              <View >
                <Icon name="home-outline" size={30} color="black" />
              </View>
            </TouchableOpacity>
          ),
          
        }}
      />
      <TopTab.Screen
        name="users"
        component={UsersScreen}
        options={{
          tabBarLabel: () => (
            <TouchableOpacity style={{width: '100%'}}>
              <View >
                <Feather name="users" size={30} color="black"  />
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <TopTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: () => (
            <TouchableOpacity style={{width: '100%'}}>
              <View>
                <MaterialCommunityIcons
                  name="television-play"
                  size={30}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <TopTab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: () => (
            <TouchableOpacity style={{width: '100%'}}>
              <View>
                <Icon name="person-circle-outline" size={30} color="black" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <TopTab.Screen
        name="notification"
        component={SettingsScreen}
        options={{
          tabBarLabel: () => (
            <TouchableOpacity style={{width: '100%'}}>
              <View>
                <Icon name="notifications-outline" size={30} color="black" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

<TopTab.Screen
        name="menus"
        component={SettingsScreen}
        options={{
          tabBarLabel: () => (
            <TouchableOpacity style={{width: '100%'}}>
              <View>
                <Icon name="menu-outline" size={30} color="black" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </TopTab.Navigator>
  );
}

export default TopTabs;
