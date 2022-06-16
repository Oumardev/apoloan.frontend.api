import { StyleSheet } from 'react-native';

export const makeAnnonceStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent :'center',
        alignItems : 'center',
    },
    main : {
        margin : 10
    },

    submit:{
        backgroundColor : '#0C2D48',
        height : 50,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection: 'row',
        borderRadius : 20,
        margin : 18
    },

    submitTxt:{
        fontSize : 23,
        fontWeight : '500',
        color:'white'
    },

    errormsg:{
        color:'red',
        paddingRight:10
      },
});