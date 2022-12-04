import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#222',
    marginBottom: 10,
    fontSize: 15,
    padding: 10
  },
  button: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 10,
    backgroundColor: '#0c4081',
  }, 
  txtButton: {
    fontSize: 15,
    fontWeight: 600,
    alignSelf: 'center',
    color: '#fff'
  },
  picker: {
    marginBottom: 10
  },
  slider: {
    marginBottom: 7
  },
  limite: {
    marginBottom: 14
  },
  h1: {
    color: '#07254b',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 7
  },
  resultado: {
    padding: '2%',
    fontSize: 14,
  }
});

export { styles }