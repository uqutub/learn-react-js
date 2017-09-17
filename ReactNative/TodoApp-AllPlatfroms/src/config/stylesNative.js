import { StyleSheet } from 'react-native';

export const stylesNative = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    padding: 20
  },
  row: {
    flexDirection: 'row'
  },
  col4: {
    flex: 4,
    height: 50,
    // alignItems: 'center',
    // padding: 10,
    justifyContent: 'center'
  },
  col8: {
    flex: 8,
    // padding: 10,
    height: 50,
    // alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    // height: "100%",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'indigo',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnDenger:{
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#CF1020',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
