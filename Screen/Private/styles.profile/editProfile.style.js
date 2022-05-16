import { StyleSheet } from 'react-native';

export const editstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center'
      },
    
      head:{
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        marginBottom:30
      },
    
      image :{
        height : 120,
        width : 120,
        borderRadius : 30
      },
    
      fullname:{
        fontSize : 30,
        fontWeight : '700',
        textAlign : 'center'
      },
    
      edit:{
        marginRight : 20
      },
    
      job:{
        fontSize : 24,
        fontWeight : '200',
        textAlign : 'center'
      },
    
      information:{
        marginTop: 5,
        marginRight : 20,
        marginLeft : 20,
        width : '80%'
      },
    
      title:{
        fontSize : 24,
        fontWeight : '400',
        color:'gray'
      },
    
      montant:{
        fontSize : 28,
        fontWeight : '700',
        margin : 8
      },
    
      refilimg:{
        height : 60,
        width : 60
      },
    
      refil:{
        display : 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        borderRadius: 20,
        padding : 5
      },
    
      refiltext:{
        fontSize : 28,
        fontWeight : '500',
        margin : 8
      },
    
    stats:{
        display:'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        margin: 30
    },

    inputview:{
        height : 80,
        marginTop : 20
    },

    description:{
        fontSize : 20,
        fontWeight : '300'
    },

    input:{
        borderBottomColor : 'whitesmoke',
        borderBottomWidth : 2,
        height : 40,
        padding :10,
        fontSize : 20,
        fontWeight : '600'
    },

    edtitpwd:{
        backgroundColor : 'whitesmoke',
        display :'flex',
        flexDirection :'row',
        justifyContent : 'center',
        alignItems:'center',
        padding : 10,
        borderRadius: 20
    },

    edtitpwdText:{
        fontSize : 20,
        fontWeight : '500',
        marginRight : 10
    },

    submit:{
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'center',
        alignContent:'center',
        backgroundColor : '#F46D76',
        margin: 30,
        width: 200,
        padding:20,
        borderRadius: 10
    },

    detailsTarget:{
        textAlign: 'center',
        fontSize : 20,
        fontWeight : '600'
    },

    edited:{
      color: 'green',
      fontSize : 20,
      fontWeight : '600'
    }
});