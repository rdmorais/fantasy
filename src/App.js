import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import LoginForm from './components/loginForm'


export default function App() {
    return (
      <LoginForm></LoginForm>
    );
}