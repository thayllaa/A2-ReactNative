import { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Experiencia extends Component {
  render() {
    return(
      <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.nome}>
              Thaylla de Santana Bispo dos Santos
            </Text>
            <Text style={styles.infoTitle}> Desenvolvedora Mobile e Designer Gráfico </Text>
          <Text style={styles.informations}> No momento está atuando como Designer Gráfico 
          em uma Cooperativa de Uber, conhecida em São Vicente como Baixada Cooper 013. </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2
  },
  box: {
    margin: 15,
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3
  },
  nome: {
    fontSize: 17,
    fontStyle: 'italic',
    color: '#5086c1',
    alignSelf: 'center',
    marginTop: 5
  },
  infoTitle: {
    color: '#000',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 19,
    textAlign: 'left'
  },
  informations: {
    color: '#000',
    fontSize: 14,
    marginLeft: 19,
    marginBottom: 6,
    textAlign: 'left'
  },
});

export default Experiencia;