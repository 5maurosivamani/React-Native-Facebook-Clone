import {TouchableOpacity, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CameraScreen, SettingsScreen} from '../screens/index.js';

const BottomTab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: '#fff'},
        tabBarInactiveTintColor: '#1877f2',
        tabBarActiveTintColor: '#1877f2',
        headerShown: false,
        tabBarIcon: () => <View></View>,
      }}>
      <BottomTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: () => (
            <TouchableOpacity style={{width: '100%'}}>
              <View style={{paddingBottom: 15}}>
                <Text style={{textAlign: 'center'}}>Camera</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: () => (
            <TouchableOpacity style={{width: '100%'}}>
              <View style={{paddingBottom: 15}}>
                <Text style={{textAlign: 'center'}}>Settings</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabs;
