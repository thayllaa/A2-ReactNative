import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

function Card({ data, funcLoadTarefas }) {
  const [id, setId] = useState(data?.id);
  const [title, setTitle] = useState(data?.title);
  const [description, setDescription] = useState(data?.description);
  const excluirTarefa = async () => {
    const response = await api.delete(`/tasks/${id}`);
    await funcLoadTarefas();
  };
  const navigation = useNavigation();
  async function verForm() {
    navigation.navigate('Formulario', {
      id: id,
      title: title,
      description: description,
      atualizarLista: funcLoadTarefas,
    });
  }

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{title}</Text>
        <Text style={styles.descricao}>{description}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.buttonEditar} onPress={verForm}>
            <Text style={styles.txtEditBtn}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonExcluir} onPress={excluirTarefa}>
            <Text style={styles.txtExcludeBtn}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    margin: 10,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo: {
    fontSize: 19,
    padding: 10,
  },
  descricao: {
    fontSize: 11,
    padding: 10
  },
  btnArea: {
    flexDirection: 'row'
  },
  txtEditBtn: {
    fontWeight: 500,
    color: '#000',
  },
  txtExcludeBtn: {
    fontWeight: 500,
    color: '#fff',
  },
  buttonEditar: {
    borderRadius: 3,
    marginLeft: 10,
    backgroundColor: '#d9d2e9',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonExcluir: {
    borderRadius: 3,
    marginLeft: 10,
    backgroundColor: '#674ea7',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Card;
