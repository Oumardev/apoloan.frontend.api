import { StyleSheet } from 'react-native';

export const profilestyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
    
      head:{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
      },
    
      image :{
        height : 130,
        width : 130,
      },
    
      fullname:{
        fontSize : 30,
        fontWeight : '700'
      },
    
      edit:{
        marginRight : 20
      },
    
      job:{
        fontSize : 18,
        fontWeight : '200'
      },
    
      solde:{
        margin : 20
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
    
      dashbord:{
        margin : 20,
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
    }
});