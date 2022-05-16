import { StyleSheet } from 'react-native';

export const historiquestyles = StyleSheet.create({
  
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
      fontSize: 20,
      fontWeight: '600'
    },
  
    scroll: {
      flexDirection: 'column',
      maxHeight : 220
    },
  
    item:{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection : 'row',
      margin: 10,
      padding: 10,
      borderRadius : 18,
      backgroundColor : 'whitesmoke',
      width : '100%'
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

    pret:{
        display: 'flex',
        alignItems : 'center'
    }

});