import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      display : 'flex',
      backgroundColor: 'black',
      borderColor : 'green',
      alignItems : 'center',
      justifyContent : 'center'
    },

    inputview:{
      height : 80,
      marginTop : 20
    },

    description:{
      fontSize : 22,
      fontWeight : '600',
      color:'white'
    },

    input:{
      borderColor : '#bb19d4',
      borderWidth : 2,
      height : 50,
      padding :15,
      fontSize : 20,
      fontWeight : '600',
      width : 300,
      color:'white',
      marginTop:10,
      borderRadius : 12
    },

    scrollStyle:{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center'
    },

    connectButton:{
      backgroundColor: '#bb19d4',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 60, 
      width: 300,
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 10,
      marginTop: 20,
    },

    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 23,
      fontWeight : '700'
    },

    registerTextStyle: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 17,
      alignSelf: 'center',
      padding: 18,
    },

    errormsg:{
      color:'red',
      paddingRight:10
    },

  errormsgheader:{
    fontSize:20,
    fontWeight:'600',
    color:'red',
    paddingLeft:10,
    paddingBottom:5
  }
});