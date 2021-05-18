import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email"/>

        <TextInput style={styles.input} placeholder="Senha"/>

        <TouchableOpacity>
          <Text>Entrar</Text>
        </TouchableOpacity>

        
        <TouchableOpacity>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5a8ed1'
  },
  input: {
    backgroundColor: '#ffffff',
    width: '90%',
    marginBottom: 15,
    fontSize: 17,
    borderRadius: 7,
    borderColor: 'black',
    borderWidth: 1.5
  } 
});
