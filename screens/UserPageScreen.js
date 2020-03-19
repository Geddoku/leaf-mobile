import React, {useState} from 'react';
import { Button, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import UserPage from "../components/UserPage";



export default function UserPageNav({ navigation }) {
    return (
        <UserPage navigation={navigation}/>
    );
}
