import { StyleSheet } from 'react-native';

export const statusModal = StyleSheet.create({
    modalBackGround : {
        flex : 1,
        backgroundColor : 'white',
        justifyContent : 'center',
        alignItems : 'center'
    },
  
    modalContainer : {
        backgroundColor : 'white',
        borderRadius :20, 
        justifyContent: 'center',
        alignItems:'center',
        display:'flex'
    },
  
    header : {
        width : '100%',
        height : 60,
        flexDirection : 'row',
        justifyContent : 'center',
        padding:10
    },

    textInfo:{
        fontSize:19,
        fontWeight:'300',
        margin:20,
        paddingBottom:20,
        color:'red'
    },

    imgView:{
        height:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },

    img:{
        height:100,
        width:100
    },

    headerSuccess:{
        fontSize : 20, 
        fontWeight :'500', 
        color:'green'
    },

    headerError:{
        fontSize : 20, 
        fontWeight :'500', 
        color:'red'
    },
    
});