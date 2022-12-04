import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FCFCFC'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#F00'
  },
  containerInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 5,
    backgroundColor: '#FFF'
  },
  label: {
    fontWeight: 'bold'
  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCC',
    flex: 1
  },
  containerButton: {
    flexDirection: 'row'
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 14,
    color: '#444',
    marginTop: 14,
    marginLeft: 7
  },
  error: {
    color: 'red',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  loading: {
    color: 'gray',
    marginLeft: 10
  },
  card: {
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#F1F1F1'
  },
  textCard: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 13
  },
  sinopse: {
    padding: 10
  },
  foto: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 5
  }
})

export { styles }