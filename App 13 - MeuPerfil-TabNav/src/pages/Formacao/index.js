import { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

class Formacao extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.box}>
            <Text style={styles.nome}>
              Leonardo Hidemitsu Yogui Yamashiro
            </Text>
            <Text style={styles.infoTitle}> Ensino Médio </Text>
            <Text style={styles.informations}>
              Formado na Escola Católica Liceu Santista localizada em Santos.
              {'\n'}Conclusão: Dezembro/2019
            </Text>
            <Text style={styles.infoTitle}> Ensino Superior </Text>
            <Text style={styles.informations}>
              Tecnólogo em Sistemas para Internet na Faculdade de Tecnologia da
              Baixada Santista (FATEC Rubens Lara). {'\n'}Conclusão:
              Dezembro/2022
            </Text>
            <Text style={styles.infoTitle}>
              Projeto - Artigo Científico
            </Text>
            <Text style={styles.informations}>
              Ainda em desenvolvimento o nosso artigo será sobre "Computadores
              Quânticos".
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.nome}>
              Thaylla de Santana Bispo dos Santos
            </Text>
            <Text style={styles.infoTitle}> Ensino Médio </Text>
            <Text style={styles.informations}>
              Formada na Escola Estadual Margarida Pinho Rodrigues localizada em
              seu bairro em São Vicente
              {'\n'}Conclusão: Dezembro/2019
            </Text>
            <Text style={styles.infoTitle}> Ensino Superior </Text>
            <Text style={styles.informations}>
              Tecnólogo em Sistemas para Internet na Faculdade de Tecnologia da
              Baixada Santista (FATEC Rubens Lara). {'\n'}Conclusão:
              Dezembro/2022
            </Text>
            <Text style={styles.infoTitle}>
              Projeto - Artigo Científico
            </Text>
            <Text style={styles.informations}>
              {' '}
              Ainda em desenvolvimento o nosso artigo será sobre 'Computadores
              Quânticos'.
            </Text>
          </View>
        </ScrollView>
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
    marginTop: 5
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
    marginLeft: 20,
    marginBottom: 6,
    textAlign: 'left',
  }
});

export default Formacao;
