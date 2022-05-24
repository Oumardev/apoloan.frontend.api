import { StyleSheet } from 'react-native';

export const loginsty = StyleSheet.create({
    container: {
      flex: 1,
      display : 'flex',
      backgroundColor: 'white',
      borderColor : 'green',
      alignItems : 'center',
      justifyContent : 'center'
    },

    inputview:{
      height : 80,
      marginTop : 20
    },

    description:{
      fontSize : 17,
      fontWeight : '600',
      color:'black',
      opacity: 0.5
    },

    formulaire:{
      width: '100%',
      backgroundColor : 'whitesmoke',
      padding: 30,
      borderRadius : 10,
      shadowOpacity: 0.1,
    },

    input:{
      borderColor : 'gray',
      borderBottomWidth : 1,
      height : 50,
      padding :15,
      fontSize : 20,
      fontWeight : '600',
      width : 300,
      color:'black',
      marginTop:3,
      borderRadius : 12
    },

    scrollStyle:{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center'
    },

    connectButton:{
      backgroundColor: '#413df7',
      borderWidth: 0,
      color: '#FFFFFF',
      height: 50, 
      width: 300,
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 10,
      marginTop: 20,
    },

    buttonTextStyle: {
      color: 'white',
      fontSize: 23,
      fontWeight : '700'
    },

    registerTextStyle: {
      color: 'black',
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

export const registersty = StyleSheet.create({
  container: {
    flex: 1,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: 'white',
    borderColor : 'green'
  },

  inputview:{
    height : 80,
    marginTop : 20,
  },

  formulaire:{
    backgroundColor : 'whitesmoke',
    padding: 30,
    borderRadius : 10,
    shadowOpacity: 0.1,
    justifyContent: 'center',
    alignItems : 'center'
  },

  description:{
    fontSize : 15,
    fontWeight : '600',
    color:'black',
    opacity: 0.5
  },

  input:{
    borderColor : 'gray',
    borderBottomWidth : 1,
    height : 33,
    padding :10,
    fontSize : 18,
    fontWeight : '600',
    width : 300,
    color:'black',
    marginTop:10,
    borderRadius : 12
  },

  scrollStyle:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },

  connectButton:{
    backgroundColor: '#413df7',
    borderWidth: 0,
    color: '#FFFFFF',
    height: 50, 
    width: 300,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    marginTop: 20,
  },

  backButton:{
    backgroundColor: 'gray',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 60, 
    width: 130,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    marginTop: 40,
    display : 'flex',
    flexDirection : 'row',
    marginLeft : 18
  },

  buttonView:{
    display:'flex',
    flexDirection : 'row'
  },

  buttonTextStyle: {
    color: 'white',
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
},

  viewbothinput : {
    display : 'flex',
    flexDirection : 'row'
  },

  inputboth:{
    borderColor : 'gray',
    borderBottomWidth : 1,
    height : 33,
    padding :10,
    fontSize : 18,
    fontWeight : '600',
    width : 150,
    color:'black',
    marginTop:10,
    borderRadius : 12
  }
});

export const cardstyle = StyleSheet.create({
  container: {
    flex: 1,
    display : 'flex',
    backgroundColor: 'black',
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
    borderColor : 'gray',
    borderBottomWidth : 2,
    height : 50,
    padding :15,
    fontSize : 20,
    fontWeight : '600',
    width : 350,
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
    backgroundColor: 'whitesmoke',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 60, 
    width: 160,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    marginTop: 40,
    display : 'flex',
    flexDirection : 'row'
  },

  backButton:{
    backgroundColor: 'gray',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 60, 
    width: 160,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    marginTop: 40,
    display : 'flex',
    flexDirection : 'row',
    marginLeft : 10
  },

  buttonView:{
    display:'flex',
    flexDirection : 'row'
  },

  buttonTextStyle: {
    color: 'black',
    fontSize: 23,
    fontWeight : '700',
    padding:10
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
},

  viewbothinput : {
    display : 'flex',
    flexDirection : 'row'
  },

  inputboth:{
    borderColor : 'gray',
    borderBottomWidth : 2,
    height : 50,
    padding :15,
    fontSize : 20,
    fontWeight : '600',
    width : 160,
    color:'white',
    marginTop:10,
    borderRadius : 12,
    marginRight :8
  }
});