import { StyleSheet } from 'react-native';

export const confirmModal = StyleSheet.create({
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
        height : 40,
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
  
    button : {
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'center',
        backgroundColor : '#F46D76',
        margin: 10,
        width: 140,
        padding:15,
        borderRadius: 10
    },

    buttonSection : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },

    buttonText:{
        color : 'white',
        fontSize: 20,
        fontWeight:'600',
        marginRight:10
    },

    textInfo:{
        fontSize:17,
        fontWeight:'200',
        margin:10
    }

});