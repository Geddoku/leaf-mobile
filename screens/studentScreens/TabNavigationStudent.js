import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import {
  TouchableOpacity
} from 'react-native';

const Tab = createBottomTabNavigator();

import Courses from './CourseScreen';
import Streams from './StreamScreen';
import StudentProfile from './ProfileScreen';

export default function TabNavigationStudent({ route, navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ff1e56',
        showLabel: false
      }}
    >
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={StudentProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Streams"
        component={Streams}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
