import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  },
  title: {
    color: '#ff7f50', 
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    paddingBottom: 5,
    fontSize: 22,
    fontWeight: 650,
    borderBottomWidth: 1,
    borderBottomColor: '#ff7f50'
  },
  form: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    width: '85%',
    paddingLeft: 9
  },
  botao: {
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 11,
  }
});

export { styles }