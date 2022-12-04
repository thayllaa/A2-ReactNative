import { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import Card from '../../components/Card/index';

export default function Contatos() {
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    await loadContatos();
    setLoading(false);
  }, []);

  const loadContatos = async () => {
    setLoading(true);
    const response = await api.get('/tasks');
    setContatos(response.data);
    setLoading(false);
  };

  const navigation = useNavigation();

  async function verForm() {
    navigation.navigate('Formulario', { atualizarLista: loadContatos });
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
        <Button title="Cadastrar novo contato" onPress={verForm} color="#16537e" />

        <FlatList
          data={contatos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card data={item} funcLoadContatos={loadContatos} />
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