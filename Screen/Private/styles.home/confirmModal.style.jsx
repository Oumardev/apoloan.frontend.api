import { StyleSheet } from 'react-native';

export const confirmModal = StyleSheet.create({
    modalBackGround : {
        flex : 1,
        backgroundColor : 'rgba(0,0,0,0.5)',
        justifyContent : 'flex-end',
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
  
    buttonGo : {
        backgroundColor : '#448dee',
        justifyContent : 'center',
        alignItems : 'center',
        height : 40,
        borderRadius : 20
    }
});