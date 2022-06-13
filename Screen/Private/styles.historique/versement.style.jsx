import { StyleSheet } from 'react-native';

export const VersementStyle = StyleSheet.create({
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
      flexDirection : 'column'
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
    },

    submit:{
      display: 'flex',
      flexDirection : 'row',
      justifyContent: 'center',
      alignContent:'center',
      backgroundColor : '#F46D76',
      margin: 50,
      width: 200,
      padding:20,
      borderRadius: 10
    },

  detailsTarget:{
    textAlign: 'center',
    fontSize : 20,
    fontWeight : '600'
},
});