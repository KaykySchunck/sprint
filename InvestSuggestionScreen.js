
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function InvestSuggestionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sugestões de Investimento</Text>
      <Text style={styles.link} onPress={() => navigation.navigate('InvestDetails')}>Ações e Fundos Imobiliários</Text>
      <Button title="Fechar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { color: '#fff', fontSize: 24, marginBottom: 20 },
  link: { color: '#f1c40f', fontSize: 18, textDecorationLine: 'underline' }
});
