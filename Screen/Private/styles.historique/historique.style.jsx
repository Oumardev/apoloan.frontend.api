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
      maxHeight: 540
    },
  
    title:{
      fontSize: 20,
      fontWeight: '600'
    },
  
    scroll: {
      flexDirection: 'column',
      maxHeight : 540
    },
  
    item:{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection : 'row',
      margin: 3,
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
    },

    menu:{
      display : 'flex',
      flexDirection : 'row',
      backgroundColor : '#bbb6b6cc',
      borderRadius: 16
    },

    button:{
      padding : 10,
      margin : 10,
      borderRadius: 16,
      width: 100,
      justifyContent : 'center',
      alignItems:'center'
    },

    buttonActive: {
      padding : 10,
      borderColor: 'whitesmoke',
      borderWidth: 2,
      margin : 10,
      borderRadius: 16,
      width: 100,
      justifyContent : 'center',
      alignItems:'center',
      backgroundColor : 'whitesmoke'
    },

    titleactive:{
      fontSize: 20,
      fontWeight: '600',
      color:'black'
    },

});