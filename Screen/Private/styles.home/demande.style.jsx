import { StyleSheet } from 'react-native';

export const demandestyles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    itemName:{
      fontSize: 18,
      fontWeight : '600',
      color : 'black',
      paddingTop:3
    },
  
    view:{
      margin: 10,
      alignItems : 'center'
    },
  
    title:{
      fontSize: 20,
      fontWeight: '600'
    },
  
    scroll: {
      flexDirection: 'column'
    },
  
    item:{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection : 'row',
      margin: 5,
      padding: 10,
      width:'98%',
      borderRadius : 18,
      backgroundColor : 'white',
      borderColor: 'gray',
      borderWidth: 0.3
    },
  
    leftInfo:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection : 'row'
    },
  
    info:{
      display: 'flex',
      marginLeft:20,
      justifyContent: 'center',
    },

    date: {
        display: 'flex',
        alignItems : 'center'
    },

});