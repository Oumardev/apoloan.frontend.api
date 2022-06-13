import React, { useEffect } from "react";
import { Text, View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { bankSelector, showpayment, clearState } from '../../../../reduxSlices/BankSlice'
import { useDispatch, useSelector } from 'react-redux';
import { VersementStyle } from '../../styles.historique/versement.style'

const Versement = ({route, navigation}) =>{

    const { idTransaction } = route.params;
    const dispatch = useDispatch();
    const { errorHappen, payment, isFetching } = useSelector(bankSelector);
    
    console.log(idTransaction)
    useEffect(()=>{
      dispatch(showpayment({IDTRANSACTION: idTransaction}))  
    },[])


    return(
        <View style={VersementStyle.container}>
          <View style={VersementStyle.view}>
            <Text style={VersementStyle.title}>Versement</Text>
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
                      </View> 
                    }
                </React.Fragment>
            </View>
          </View>
      </View>
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

export default Versement