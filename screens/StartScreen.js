import React, {useState} from 'react';
import { Button, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import Start from "../components/Start";



export default function StartNav({ navigation }) {
    return (
        <Start navigation={navigation}/>
    );
}
