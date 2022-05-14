import { StyleSheet } from 'react-native';

export const failedModal = StyleSheet.create({
    modalBackGround : {
        flex : 1,
        backgroundColor : 'rgba(0,0,0,0.5)',
        justifyContent : 'center',
        alignItems : 'center'
    },
  
    modalContainer : {
        width : '100%',
        backgroundColor : 'white',
        paddingHorizontal : 20,
        paddingVertical : 30,
        borderRadius :20, 
        elevation : 20
    },
  
    header : {
        width : '100%',
        height : 60,
        flexDirection : 'row',
        justifyContent : 'space-between'
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
        alignItems:'center'
    },

    img:{
        height:100,
        width:100
    }

});