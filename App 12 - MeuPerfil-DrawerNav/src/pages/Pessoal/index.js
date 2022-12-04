import { Component } from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
} from 'react-native';

class Pessoal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.nome}>Thaylla de Santana Bispo dos Santos</Text>
          <Text style={styles.infoTitle}> Idade: </Text>
          <Text style={styles.informations}> 21 anos </Text>
          <Text style={styles.infoTitle}> Nascimento: </Text>
          <Text style={styles.informations}> 06/06/2001 </Text>
          <Text style={styles.infoTitle}> Rede Sociais: </Text>
          <Text
            style={styles.linkedin}
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/in/thaylla-de-santana-894b42236'
              )
            }>
            LinkedIn
          </Text>
          <Text
            style={styles.linkedin}
            onPress={() => Linking.openURL('https://github.com/thayllaa')}>
            GitHub
          </Text>
          <Text style={styles.infoTitle}> Contato: </Text>
          <Text style={styles.informations}>
            {' '}
            thaylla.santana@fatec.sp.gov.br{' '}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  box: {
    margin: 15,
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  nome: {
    fontSize: 17,
    fontStyle: 'italic',
    color: '#5086c1',
    alignSelf: 'center',
    marginTop: 5,
  },
  infoTitle: {
    color: '#000',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 19,
    textAlign: 'left',
  },
  informations: {
    color: '#000',
    fontSize: 14,
    marginLeft: 19,
    marginBottom: 6,
    textAlign: 'left',
  },
  linkedin: {
    color: '#2196f3',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginLeft: 25,
    marginBottom: 6,
    textAlign: 'left',
  },
});

export default Pessoal;
