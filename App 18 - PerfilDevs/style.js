import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#00276c',
    fontSize: 21,
    fontWeight: 620,
    borderBottomWidth: 1,
    borderBottomColor: '#014ba0',
    alignSelf: 'center',
  },
  card: {
    alignSelf: 'center',
    margin: 6,
  },
  img: {
    margin: 14,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 100,
  },
  input: {
    margin: 6,
    width: 220,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#929292',
    color: '#082338',
    backgroundColor: '#cadffb',
    padding: 3,
    textAlign: 'center',
  },
  botao: {
    margin: 3,
    padding: 3,
    width: 70,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#a0c5f7',
    backgroundColor: '#a0c5f7',
    color: '#5e6266',
    fontWeight: 600,
    alignSelf: 'flex-end',
    textAlign: 'center',
  },
  // Dados do Dev
  dataList: {
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    margin: 15, 
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
    padding: 5
  },
  infoTitle: {
    marginTop: 8,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 580,
    fontStyle: 'italic',
  },
  userInfo: {
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 8,
  },
});

export { styles };
