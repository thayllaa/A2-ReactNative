import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4fbfb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#7f00b2',
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderWidth: 0.6,
    borderRadius: 6,
    borderColor: '#222',
    margin: 10,
    fontSize: 17,
    padding: 10,
  },
  button: {
    margin: 10,
    color: '#84b6f4',
  }, 
  h1: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  resultado: {
    padding: '2%',
    fontSize: 14,
  }
});

export {styles}