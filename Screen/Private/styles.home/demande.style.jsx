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
      fontSize: 20,
      fontWeight: '600'
    },
  
    scroll: {
      flexDirection: 'column',
      maxHeight : 380
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
    },

    date: {
        display: 'flex',
        alignItems : 'center'
    },

    buttonAdd:{
      display: 'flex',
      flexDirection : 'row',
      justifyContent : 'center',
      alignItems: 'center',
      backgroundColor : '#001429',
      height : 60,
      width : 230,
      padding : 20,
      borderRadius : 10
    },

    addText : {
      color : 'white',
      fontSize : 22,
      fontWeight : '600'
    }
});