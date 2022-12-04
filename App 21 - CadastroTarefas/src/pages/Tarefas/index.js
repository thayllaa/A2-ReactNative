import { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import Card from '../../components/Card/index';


export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    await loadTarefas();
    setLoading(false);
  }, []);

  const loadTarefas = async () => {
    setLoading(true);
    const response = await api.get('/tasks');
    setTarefas(response.data);
    setLoading(false);
  };

  const navigation = useNavigation();

  async function verForm() {
    navigation.navigate('Formulario', { atualizarLista: loadTarefas });
  }

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="#09A6FF" size={40} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Button title="Adicionar tarefa" onPress={verForm} color="#8e7cc3" />

        <FlatList
          data={tarefas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card data={item} funcLoadTarefas={loadTarefas} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});