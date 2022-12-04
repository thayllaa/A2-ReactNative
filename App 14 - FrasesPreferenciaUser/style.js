import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  },
  title: {
    color: '#005954', 
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    paddingBottom: 5,
    fontSize: 22,
    fontWeight: 650,
    borderBottomWidth: 1,
    borderBottomColor: '#96c4c4'
  },
  options: {
    flexDirection: 'row',
    margin: 10,
    alignSelf: 'center'
  },
  text: {
    fontWeight: 640
  },
  fraseContainer: {
    padding: 10,
    borderRadius: 6,
    marginTop: 10
  },
  bgDay: {
    backgroundColor: '#F1F1F1'
  },
  bgNight: {
    backgroundColor: '#333'
  },
  textSmall: {
    fontSize: 12
  },
  textBig: {
    fontSize: 22
  },
  textBlack: {
    color: '#333'
  },
  textWhite: {
    color: '#FFF'
  }
});

export { styles }