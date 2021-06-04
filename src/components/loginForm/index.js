import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';


export default function LoginForm() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleUserChange(user) { setUser(user); }
  function handlePasswordChange(password) { setPassword(password); }
  function handleLoginPress() {
    console.log({ user, password });
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email" onChangeText={handleUserChange}  />

        <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" onChangeText={handlePasswordChange} />

        <TouchableOpacity style={styles.btnEntrar} onPress={handleLoginPress}>
          <Text>Entrar</Text>
        </TouchableOpacity>


        <TouchableOpacity>
          <Text>Criar conta</Text>
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
  },
  btnEntrar: {
    backgroundColor: '#00539c',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  }
});
