
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function PixScreen({ navigation }) {
  const [key, setKey] = useState('');

  const handleCheckKey = () => {
    if (key === 'tigrinho.sonhos.ltda') {
      Alert.alert('Atenção', 'Chave identificada como casa de apostas. Gostaria de ver outras opções de investimento?', [
        { text: 'Sim', onPress: () => navigation.navigate('Suggest') },
        { text: 'Cancelar' }
      ]);
    } else {
      Alert.alert('Chave segura');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite a chave PIX"
        placeholderTextColor="#aaa"
        onChangeText={setKey}
      />
      <Button title="Verificar chave" onPress={handleCheckKey} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', padding: 20 },
  input: { backgroundColor: '#eee', padding: 10, marginBottom: 20 }
});
