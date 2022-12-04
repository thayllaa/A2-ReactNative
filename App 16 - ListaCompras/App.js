import { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { styles } from './style';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('compras.db');

const App = () => {
  const [compra, setCompra] = useState('');
  var [qt, setQt] = useState('');
  const [compras, setCompras] = useState([]);

  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS compras (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20), qt INTERGER)`,
        [],
        (sqlTxn, res) => {
          console.log(sqlTxn);
          console.log(res);
          console.log('Tabela criada com sucesso!');
        },
        (error) => {
          console.log('Erro ao criar tabela ' + error.message);
        }
      );
    });
  };

  const incluirCompra = () => {
    if (!compra) {
      alert('Por favor, informar uma compra');
      return false;
    }

    if (parseInt(qt) === 0 || !qt) {
      alert('Por favor, informar quantidade!');
      return false;
    }

    qt = parseInt(qt);

    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO compras (nome, qt) VALUES (?, ?)`,
        [compra, qt],
        (sqlTxn, res) => {
          console.log(sqlTxn);
          console.log(res);
          console.log(`${qt} ${compra}: compra adicionada com sucesso!`);
          getCompras();
          setCompra('');
          setQt('');
        },
        (error) => {
          console.log('Erro ao inserir compra ' + error.message);
        }
      );
    });
  };

  const deletarCompra = (id) => {
    db.transaction((txn) => {
      txn.executeSql(
        `DELETE FROM compras WHERE id=(?)`,
        [id],
        (sqlTxn, res) => {
          console.log(sqlTxn);
          console.log(res);
          console.log(`Compra deletada com sucesso!`);
          getCompras();
          setCompra('');
        },
        (error) => {
          console.log('Erro ao deletar compra ' + error.message);
        }
      );
    });
  };

  const getCompras = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM compras ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log(sqlTxn);
          console.log(res);
          console.log('Compras lidas com sucesso!');
          let len = res.rows.length;
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome, qt: item.qt });
            }
            setCompras(results);
          } else {
            setCompras([]);
          }
        },
        (error) => {
          console.log('Erro ao obter compras ' + error.message);
        }
      );
    });
  };

  const renderCompra = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: '#ddd',
        }}>
        <Text>{item.nome}</Text>
        <Text style={{ marginRight: 9 }}> ({item.qt}) </Text>
        <Pressable onPress={() => deletarCompra(item.id)}>
          <Text> Excluir </Text>
        </Pressable>
      </View>
    );
  };

  useEffect(() => {
    async () => {
      await createTables();
      await getCompras();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Lista de Compras </Text>

      <View style={styles.inputs}>
        <TextInput
          placeholder="Quantidade"
          value={qt}
          onChangeText={setQt}
          keyboardType='numeric'
          style={styles.input2}
        />

        <TextInput
          placeholder="Produto desejado"
          value={compra}
          onChangeText={setCompra}
          style={styles.input}
        />

        <Pressable style={styles.btn} onPress={incluirCompra}>
          <Text style={styles.txtBtn}> + </Text>
        </Pressable>
      </View>

      <FlatList data={compras} renderItem={renderCompra} key={(t) => t.id} />
    </View>
  );
};

export default App;