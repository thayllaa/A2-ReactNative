import { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import { styles } from './style';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('tarefas.db');

const App = () => {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log('Tabela criada com sucesso!');
        },
        (error) => {
          console.log('Error on creating table: ' + error.message);
        }
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa) {
      alert('Por favor, digite uma tarefa');
      return false;
    }
    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} foi adicionada com sucesso!`);
          getTarefas();
          setTarefa('');
        },
        (error) => {
          console.log('Erro ao adocionar tarefa ' + error.message);
        }
      );
    });
  };

  const excluirTarefa = (id) => {
    db.transaction((txn) => {
      txn.executeSql(
        `DELETE FROM tarefas WHERE id=(?)`,
        [id],
        (sqlTxn, res) => {
          console.log(`Tarefa deletada com sucesso!`);
          getTarefas();
          setTarefa('');
        },
        (error) => {
          console.log('Erro ao deletar uma Tarefa ' + error.message);
        }
      );
    });
  };

  const getTarefas = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log('Tarefas lidas com sucesso!');
          let len = res.rows.length;
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
            setTarefas(results);
          }
        },
        (error) => {
          console.log('Erro ao obter Tarefas ' + error.message);
        }
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: '#ddd',
        }}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text>{item.nome}</Text>
        <IconButton
          onPress={() => excluirTarefa(item.id)}
          icon={(props) => <Icon name="trash-can" {...props} />}
        />
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> Tarefas </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={tarefa}
            onChangeText={setTarefa}
            placeholder="Digite uma tarefa"
          />
          <IconButton
            onPress={incluirTarefa}
            icon={(props) => <Icon name="plus" {...props} />}
          />
        </View>
        <FlatList data={tarefas} renderItem={renderTarefa} key={(t) => t.id} />
      </View>
    </View>
  );
};

export default App;
