import { StyleSheet } from 'react-native';

export const contributeurstyles = StyleSheet.create({
    container: {
      flex: 1
    },
  
    view:{
      margin: 10
    },
  
    title:{
      fontSize: 30,
      fontWeight: '700'
    },
  
    scroll: {
      flexDirection: 'row'
    },
  
    item:{
      margin: 5,
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor : '#F0ECE3',
      padding: 10,
      borderRadius : '30px',
      width : 80
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
    }
});