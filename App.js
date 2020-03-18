import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { fromLeft } from 'react-navigation-transitions';

const Stack = createStackNavigator();

import RegistrationScreen from './screens/RegistrationScreen';
import SignUpScreen from './screens/SignUpScreen';
import StartScreen from './screens/StartScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer initialRouteName="Start">
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Register" component={RegistrationScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
