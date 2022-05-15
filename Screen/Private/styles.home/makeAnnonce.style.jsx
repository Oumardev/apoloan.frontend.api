import { StyleSheet } from 'react-native';

export const makeAnnonceStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent :'center',
        alignItems : 'center',
        margin : 30,
        borderRadius : 25
    },

    SectionStyle: {
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        height: 50,
        margin:10,
        borderRadius:20,
        width :'100%',
        borderBottomColor : 'gray',
        borderBottomWidth : 2
    },

    buttonStyle: {
        flex:1
    },

    inputStyle: {
        fontSize:20,
        fontWeight:'500',
        padding:10,
        backgroundColor:'white',
        flex:1,
        borderRadius:20,
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

    main:{
        backgroundColor : 'white',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },

    dureeText:{
       color:'black'
    },

    duree:{
        margin: 0,
        textAlign : 'center',
        fontSize : 23,
        fontWeight :'500'
    },

    dureeContainer:{
        backgroundColor :'whitesmoke',
        display : 'flex',
        justifyContent :'center',
        alignItems:'center',
        borderRadius :20,
        margin:10,
        width : 240
    },

    typeText:{
        color:'whitesmoke'
     },
 
     type:{
         margin: 0,
         textAlign : 'center',
         fontSize : 23,
         fontWeight :'500'
     },
 
     typeContainer:{
         backgroundColor :'whitesmoke',
         display : 'flex',
         justifyContent :'center',
         alignItems:'center',
         borderRadius :20,
         margin:5,
        
     },

     SectionCheckBox:{
         display : 'flex',
         flexDirection : 'row',
         justifyContent : 'center'
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
    },

    errormsg:{
        color:'red',
        paddingRight:10
    },
});