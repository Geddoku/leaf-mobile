import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  AsyncStorage
} from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createDrawerNavigator, DrawerItems } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

import TabNavigationStudent from '../screens/studentScreens/TabNavigationStudent';
import TabNavigationTeacher from '../screens/teacherScreens/TabNavigationTeacher';

export default function UserPageNav({ route, navigation }) {
    const { mode, name } = route.params;

    // console.log(mode);
    // console.log(name);
    return (
      <Drawer.Navigator
        initialRouteName={mode}
        drawerContentOptions={{
          activeTintColor: '#03d100'
        }}
        drawerStyle={{
          width: 250,
          backgroundColor: '#f0f0f0'
        }}
      >
        <Drawer.Screen name="Student" component={TabNavigationStudent} />
        <Drawer.Screen name="Teacher" component={TabNavigationTeacher} />
      </Drawer.Navigator>
    );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#252729',
    paddingLeft: 50,
    paddingRight: 50
  },
  imageIcon: {
    width: 100,
    height: 100,
    tintColor: '#03d100'
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 400,
    padding: 15,
    backgroundColor: '#03d100'
  },
  buttonText: {
    fontWeight: 'bold'
  }
});
