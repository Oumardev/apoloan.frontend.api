import { StyleSheet } from 'react-native';

export const contributeurstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : 'whitesmoke',
      display : 'flex',
      alignItems : 'center'
    },
  
    view:{
      margin: 10,
    },
  
    title:{
      fontSize: 20,
      fontWeight: '600'
    },
  
    scroll: {
      flexDirection: 'row',
      width : '100%'
    },
  
    item:{
      margin: 5,
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor : '#F0ECE3',
      padding: 10,
      borderRadius : 40,
      width : 80,
      height: 80
    },
  
    itemName:{
      fontSize: 18,
      fontWeight : '300',
      color : 'black',
      paddingTop:3
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

    wrapItem:{
      display: 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center'
    }
});