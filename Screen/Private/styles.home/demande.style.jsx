import { StyleSheet } from 'react-native';

export const demandestyles = StyleSheet.create({
    container: {
      flex: 1
    },
  
    itemName:{
      fontSize: 18,
      fontWeight : '600',
      color : 'black',
      paddingTop:3
    },
  
    view:{
      margin: 10,
      maxHeight: 480
    },
  
    title:{
      fontSize: 30,
      fontWeight: '700'
    },
  
    scroll: {
      flexDirection: 'column',
    },
  
    item:{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection : 'row',
      margin: 5,
      padding: 10,
      borderRadius : '18px',
      backgroundColor : 'white',
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
    }
});