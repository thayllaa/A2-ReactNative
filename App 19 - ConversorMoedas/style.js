import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: '#1b4d3e',
    alignSelf: 'center',
  },
  welcome: {
    marginTop: 6,
    fontSize: 13,
    textAlign: 'center'
  },
  calcArea: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 20,
  },
  inputsArea: {
    display: 'flex',
    flexDirection: 'row'
  },
  input: {
    width: '90%',    
    borderBottomWidth: 1,
    borderColor: '#5f9341',
    backgroundColor: '#',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    textAlign: 'center',
  },
  button: {
    width: 100,
    height: 30,
    marginBottom: 5,
    borderRadius: 4,
    backgroundColor: '#8fbc8f',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txtButton: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  picker: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 6,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    fontWeight: 700,
    width: '60%',
    alignSelf: 'center',
  },
  resArea: {
    padding: 10,
    borderTopWidth: 1,
    marginTop: 12,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 600,
    color: '#355e3b',
    fontSize: 17,
  },
  resultado: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 6,
    marginLeft: 20,
    marginRight: 20,
    padding: 6,
    fontWeight: 600,
    color: '#228b22',
    textAlign: 'center',
    fontSize: 15,
  },
});

export { styles };
