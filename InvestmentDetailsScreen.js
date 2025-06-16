
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function InvestmentDetailsScreen({ navigation }) {
  const [cotas, setCotas] = useState('0');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ação XPTO</Text>
      <Text style={styles.detail}>Valor de mercado: R$ 20,00</Text>
      <Text style={styles.detail}>Rentabilidade: 1,5% por cota</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={cotas} onChangeText={setCotas} />
      <Button title={`Comprar ${cotas} cotas`} onPress={() => alert('Compra realizada!')} />
      <Button title="Voltar ao Pix" onPress={() => navigation.navigate('Pix')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { color: '#fff', fontSize: 24, marginBottom: 10 },
  detail: { color: '#ccc', marginBottom: 5 },
  input: { backgroundColor: '#222', color: '#fff', padding: 10, marginVertical: 20, borderRadius: 5 }
});
