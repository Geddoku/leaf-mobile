import React, {useState} from 'react';
import { Button, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import RegistrationForm from "../components/RegistrationForm";



export default function RegistrationScreen({ navigation }) {
    return (
        <RegistrationForm navigation={navigation}/>
    );
}
