
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>XP</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#aaa" secureTextEntry />
      <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', padding: 20 },
  logo: { color: '#fff', fontSize: 36, textAlign: 'center', marginBottom: 40 },
  input: { backgroundColor: '#222', color: '#fff', padding: 10, marginVertical: 10, borderRadius: 5 }
});
