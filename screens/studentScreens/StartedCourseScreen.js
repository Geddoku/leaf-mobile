import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import AboutCourseScreen from './CourseContentScreens/AboutCourseScreen';
import ContentCourseScreen from './CourseContentScreens/ContentCourseScreen';
import ExtensionsCourseScreen from './CourseContentScreens/ExtensionsCourseScreen';

export default function StartedCourse({ route, navigation }) {
  const { title } = route.params;
  return(
    <Tab.Navigator
      tabBarOptions={{
        pressColor: 'white',
        activeTintColor: '#ff1e56',
        inactiveTintColor: 'white',
        tabStyle: {
          backgroundColor: 'black',
          paddingTop: 25
        }
      }}>
      <Tab.Screen name="About" component={AboutCourseScreen} />
      <Tab.Screen name="Content" component={ContentCourseScreen} />
      <Tab.Screen name="Extensions" component={ExtensionsCourseScreen} />
    </Tab.Navigator>
  );
}
