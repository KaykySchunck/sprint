
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.balance}>Saldo: R$ 300,00</Text>
      <Button title="Pix" onPress={() => navigation.navigate('Pix')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  balance: { color: '#fff', fontSize: 24, marginBottom: 20 }
});
