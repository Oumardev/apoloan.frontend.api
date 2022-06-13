import React, { useEffect } from "react";
import { Text, View, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import { bankSelector, showpayment, makepayment, clearState } from '../../../../reduxSlices/BankSlice'
import { useDispatch, useSelector } from 'react-redux';
import { VersementStyle } from '../../styles.historique/versement.style'

const Rembourssement = ({route, navigation}) =>{

    const { idTransaction } = route.params;
    const dispatch = useDispatch();
    const { errorMessage, payment, paySuccess } = useSelector(bankSelector);
    
    useEffect(()=>{
      dispatch(showpayment({IDTRANSACTION: idTransaction}))  
    },[])

    useEffect(()=>{
      paySuccess && dispatch(showpayment({IDTRANSACTION: idTransaction}))
    },[paySuccess])

    var lenpay = 0
    try{
      lenpay = payment.success && payment.success.length
    }catch(e){}

    return(
        lenpay ? (
          <View style={VersementStyle.container}>
          <View style={VersementStyle.view}>
            <Text style={VersementStyle.title}>Rembourssement</Text>
              <Text style={{color:'green',fontSize: 20, fontWeight: '500'}}>{paySuccess && 'Payement effectué avec succès'}</Text>
              <Text style={{color:'red',fontSize: 20, fontWeight: '500'}}>{errorMessage}</Text>
              <View style={VersementStyle.scroll}>
                <React.Fragment >
                    {
                      payment.success && 
                      <View style={VersementStyle.leftInfo}>
                        <View style={VersementStyle.info}>
                            <Text style={{...VersementStyle.itemName, color:'gray',fontWeight:'400',fontSize:14}}>No: {payment.success[0].vieme}</Text>
                            <Text style={{...VersementStyle.itemName, color:'gray',fontWeight:'400',fontSize:14}}>Total: {payment.success[0].vntotal}</Text>
                            <Text style={{...VersementStyle.itemName, color:'gray',fontWeight:'400',fontSize:14}}>Montant verser: {payment.success[0].monterVerser ? payment.success[0].monterVerser : 0} FR</Text>
                            <Text style={{...VersementStyle.itemName, color:'gray',fontWeight:'400',fontSize:14}}>Montant a verser: {payment.success[0].montantAVerser} FR</Text>
                            <Text style={{...VersementStyle.itemName, color:'gray',fontWeight:'400',fontSize:14}}>Date échéance: {payment.success[0].dateEcheance}</Text>
                            <Text style={{...VersementStyle.itemName, color:'gray',fontWeight:'400',fontSize:14}}>Status: <Text style={payment.success[0].monterVerser ? styles.online : styles.offline}>{payment.success[0].monterVerser ? 'Payé' : 'Non payé' }</Text></Text>
                        </View>
                        <TouchableOpacity style={VersementStyle.submit} onPress={()=> dispatch(makepayment({IDPAYMENT: payment.success[0].id}))}>
                            <Text style={{...VersementStyle.detailsTarget, color: 'white', marginRight: 10}}>Rembourrser</Text>
                            <MaterialIcons color={'white'} size={22} name={'save-alt'} />
                        </TouchableOpacity>
                      </View> 
                    }
                </React.Fragment>
            </View>
          </View>
      </View>
      ):
        (
          <>
            <Text>Tout les rembourssement on déja été effectué</Text>
          </>
        )
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems : 'center'
    },
  
    online : {
      color : 'green'
    },
  
    offline : {
      color : 'red'
    }
});

export default Rembourssement