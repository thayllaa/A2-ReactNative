import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 12,
    alignItems: 'center'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    paddingBottom: 5,
    marginBottom: 10,
    fontSize: 23,
    fontWeight: 600,
    color: '#ff9d04',
    borderBottomWidth: 2,
    borderBottomColor: '#b45f06'
  },
  inputs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input2: {
    width: '25%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#fce5cd',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  input: {
    width: '55%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#fce5cd',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  btn: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#e69138',
    backgroundColor: '#f9cb9c',
    alignSelf: 'center',
  },
  txtBtn: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 1.7
  }
})

export { styles }