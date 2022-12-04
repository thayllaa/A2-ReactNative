import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  Pressable
} from 'react-native';

import api from './src/services/api';
import { styles } from './style';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      fromMoeda: 'BRL',
      toMoeda: 'USD',
      res: 0,
    };
    this.getValor = this.getValor.bind(this);
  }

  async getValor() {
    const { valor, fromMoeda, toMoeda } = this.state;
    try {
      const response = await api.get(fromMoeda + '-' + toMoeda);
      let ask = response.data[fromMoeda + toMoeda].ask;
      this.setState({
        res: valor * ask,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        ask: '',
        fromMoeda: 'BRL',
        toMoeda: 'USD',
      });
      alert('Erro! Tente novamente');
    }
  }

  render() {
    const { valor, fromMoeda, toMoeda, res } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}> Conversor de Moedas </Text>
        <Text style={styles.welcome}> Olá, um recadinho antes de começar. {"\n"}{"\n"}Por favor, certifique-se de sempre selecionar o valor da moeda antes de fazer uma nova conversão.</Text>
        <React.Fragment>
          <View style={styles.calcArea}>
            <View style={styles.inputsArea}></View>
            <TextInput
              style={styles.input}
              placeholder="Digite valor desejado"
              placeholderTextColor="#a4a4a4"
              value={valor}
              onChangeText={(value) => this.setState({ valor: value })}
            />
    
            <Picker
              style={styles.picker}
              selectedValue={fromMoeda}
              onValueChange={(valor) =>
                this.setState({ fromMoeda: valor, res: 0 })
              }>
              <Picker.Item key={1} value={'BRL'} label="Real" />
              <Picker.Item key={2} value={'USD'} label="Dólar" />
              <Picker.Item key={3} value={'BTC'} label="Bitcoin" />
            </Picker>

            <Picker
              style={styles.picker}
              selectedValue={toMoeda}
              onValueChange={(valor) =>
                this.setState({ toMoeda: valor, res: 0 })
              }>
              <Picker.Item key={1} value={'BRL'} label="Real" />
              <Picker.Item key={2} value={'USD'} label="Dólar" />
              <Picker.Item key={3} value={'BTC'} label="Bitcoin" />
            </Picker>

            <Pressable style={styles.button} onPress={this.getValor}>
              <Text style={styles.txtButton}> Calcular </Text>
            </Pressable>

            <Text style={styles.resArea}>Valor Convertido</Text>
            <Text style={styles.resultado}>
              {toMoeda === 'BRL' && 'R$'}
              {toMoeda === 'USD' && 'U$'}
              {toMoeda === 'BTC' && '₿'}
              {res}
            </Text>
          </View>
        </React.Fragment>
      </View>
    );
  }
}
