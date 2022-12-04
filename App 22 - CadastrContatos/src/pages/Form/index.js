import { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

export default function Form({ route }) {
  const [id, setId] = useState(route.params?.id);
  const [newTitle, setNewTitle] = useState(route.params?.title);
  const [newDescription, setNewDescription] = useState(
    route.params?.description
  );

  const navigation = useNavigation();
  const salvarContato = async () => {
    const body = JSON.stringify({
      title: newTitle,
      description: newDescription,
    });
    if (id !== undefined) {
      const response = await api.put(`/tasks/${id}`, body, {
        headers: { 'Content-Type': 'application/json' },
      });
      await route.params?.atualizarLista();
    } else {
      const response = await api.post('/tasks', body, {
        headers: { 'Content-Type': 'application/json' },
      });
      await route.params?.atualizarLista();
    }
    navigation.goBack();
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <TextInput
        placeholder=" Insira nome do contato"
        style={styles.input}
        defaultValue={route.params?.title}
        onChangeText={(text) => setNewTitle(text)}
      />

      <TextInput
        placeholder=" Insira o endereço de contato "
        style={styles.input}
        defaultValue={route.params?.description}
        onChangeText={(text) => setNewDescription(text)}
      />

      <Button title="Salvar" onPress={salvarContato} color="#3d85c6" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#cfe2f3',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#cfe2f3',
    margin: 4,
    borderRadius: 5,
    letterSpacing: 3,
  },
});