import React, {useState} from 'react';
import { Button, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import SignUpForm from "../components/SignUpForm";



export default function SignUpScreen({ navigation }) {
    return (
        <SignUpForm navigation={navigation}/>
    );
}
