import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bienvenue:{
      marginLeft: 30,
      marginTop:95,
      
    },
    mainBody: {
      backgroundColor: 'black',
      justifyContent:'center',
      flex:1
    },
  
    SectionStyle: {
      backgroundColor:'white',
      flexDirection:'row',
      alignItems:'center',
      height: 50,
      margin:10,
      borderRadius:20
    },
    buttonStyle: {
     flex:1
    },
  
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 20,
      fontWeight : '700'
    },
  
    inputStyle: {
      fontSize:20,
      fontWeight:'500',
      backgroundColor:'white',
      flex:1,
       borderRadius:20
    },
  
    registerTextStyle: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
      alignSelf: 'center',
      padding: 10,
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
    childStyle : {
      backgroundColor: "#000000db",
      borderRadius: 12,
      paddingTop: 2,
      justifyContent : 'center',
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 5
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height : 80,
      width : 280
    },
    connectButton:{
      backgroundColor: '#0096FF',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 45,
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 30,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 20,
      marginBottom: 25,
    },
    scrollStyle:{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center'
    }
});