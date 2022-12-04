import { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);

  function limpar() {
    setCep('');
    inputRef.current.focus();
    setCepUser(null);
  }

  async function buscar() {
    if (cep == '') {
      alert('Por favor, digitar CEP válido!');
      return;
    }
    try {
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log('ERROR: ' + error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> App Consulta Cep </Text>
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu CEP"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.botao1} onPress={buscar}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao2} onPress={limpar}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser && (
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP:</Text>
          <Text style={styles.resUser}>{cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro:</Text>
          <Text style={styles.resUser}>{cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Complemento:</Text>
          <Text style={styles.resUser}>{cepUser.complemento}</Text>
          <Text style={styles.itemText}>Bairro: </Text>
          <Text style={styles.resUser}>{cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade:</Text>
          <Text style={styles.resUser}>{cepUser.localidade}</Text>
          <Text style={styles.itemText}>DDD:</Text>
          <Text style={styles.resUser}>{cepUser.ddd}</Text>
          <Text style={styles.itemText}>Estado:</Text>
          <Text style={styles.resUser}>{cepUser.uf}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'darkgreen',
    fontSize: 21,
    fontWeight: 700,
    borderBottomWidth: 2,
    padding: '1%',
    marginBottom: '3%',
    alignSelf: 'center',
  },
  input: {
    height: 'auto',
    width: '50%',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: '3%',
    marginLeft: '25%',
    color: '#5e5e5e',
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  botao1: {
    marginTop: '3%',
    padding: '1%',
    height: 'auto',
    width: '27%',
    backgroundColor: '#b7d5ac',
    borderRadius: 3,
    alignSelf: 'center',
  },
  botao2: {
    marginTop: '3%',
    padding: '1%',
    height: 'auto',
    width: '27%',
    backgroundColor: '#6eaa5e',
    borderRadius: 3,
    alignSelf: 'center',
  },
  resultado: {
    flex: 1,
    margin: '5%',
  },
  itemText: {
    fontSize: 17,
    fontWeight: 500,
  },
  resUser: {
    fontSize: 15,
    marginBottom: '3%',
    fontStyle: 'italic',
  },
});
