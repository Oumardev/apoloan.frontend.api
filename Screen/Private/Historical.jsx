import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { empruntSelector, empruntlist } from '../../reduxSlices/EmpruntSlice'
import { userget } from '../../reduxSlices/UserSlice'
import { pretSelector, pretlist } from '../../reduxSlices/PretSlice'
import { historiquestyles } from './styles.historique/historique.style';
import dateFormat from "dateformat"


export default function Historical({navigation}) {
    const dispatch = useDispatch();
    const { emprunt } = useSelector(empruntSelector);
    const { pret, isFetching } = useSelector(pretSelector);
   
    const [men1, setMen1] = useState(true)
    const [men2, setMen2] = useState(false)
    const [mode, setMode] = useState('PRET')
    
    const [refreshing, setRefreshing] = React.useState(false);

    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    }

    useEffect(()=>{
      dispatch(empruntlist())
      dispatch(pretlist())
      dispatch(userget())
    },[])

    const onRefresh = React.useCallback(() => {
      dispatch(empruntlist())
      dispatch(pretlist())
      dispatch(userget())
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    const listPret = () =>{
      return(
        pret.success && pret.success.map((item,key)=>(
            <React.Fragment key={key}>
              <TouchableOpacity style={historiquestyles.item} onPress={() => navigation.navigate('Versement', {idTransaction: item.id})}>
                <View style={historiquestyles.leftInfo} >
                  <View style={historiquestyles.pret}>
                    <MaterialCommunityIcons name={'arrow-collapse-up'} size={35} color={'green'}/> 
                  </View>
    
                    <View style={historiquestyles.info}>
                      <Text style={historiquestyles.itemName}>{item.Annonce.montant} F</Text>
                      <Text style={{...historiquestyles.itemName, color:'gray',fontWeight:'400'}}>Pourcentage: {parseFloat(item.Annonce.pourcentage).toFixed(2)}</Text>
                      <Text style={{...historiquestyles.itemName, color:'green',fontWeight:'400'}}>Total: {parseFloat(item.Annonce.montant*item.Annonce.pourcentage).toFixed(2)} F</Text>
                    </View>
                  </View>
    
                <View style={historiquestyles.date}>
                  <Text style={{...historiquestyles.itemName, color:'red',fontWeight:'400',fontSize:16}}>Expiration {dateFormat(new Date(item.Contrat.dateEcheance), "dd/mm/yyyy")}</Text>
                  <Text style={{color:'gray'}}>{ item.statut } ...</Text>
                </View>
              </TouchableOpacity>
            </React.Fragment>
        ))
      )
    }

    const listEmprunt = () =>{
      return(
        emprunt.success && emprunt.success.map((item,key)=>(
            <React.Fragment key={key}>
              <TouchableOpacity style={historiquestyles.item} onPress={() => navigation.navigate('Rembourssement', {idTransaction: item.id})}>
                <View style={historiquestyles.leftInfo} >
                  <View style={historiquestyles.pret}>
                    <MaterialCommunityIcons name={'arrow-collapse-down'} size={35} color={'red'}/> 
                  </View>
    
                    <View style={historiquestyles.info}>
                      <Text style={historiquestyles.itemName}>{item.Annonce.montant} F</Text>
                      <Text style={{...historiquestyles.itemName, color:'gray',fontWeight:'400'}}>Pourcentage: {parseFloat(item.Annonce.pourcentage).toFixed(2)}</Text>
                      <Text style={{...historiquestyles.itemName, color:'green',fontWeight:'400'}}>Total: {parseFloat(item.Annonce.montant*item.Annonce.pourcentage).toFixed(2)} FR</Text>
                    </View>
                  </View>
    
                <View style={historiquestyles.date}>
                  <Text style={{...historiquestyles.itemName, color:'red',fontWeight:'400',fontSize:16}}>Expiration {dateFormat(new Date(item.Contrat.dateEcheance), "dd/mm/yyyy")}</Text>
                  <Text style={{color:'gray'}}>{ item.statut } ...</Text>
                </View>
              </TouchableOpacity>
            </React.Fragment>
        ))
      )
    }

    return (
        <View style={styles.container}>
              <View style={historiquestyles.view}>
              
              <View style={historiquestyles.menu}>
                <TouchableOpacity 
                  style={men1 ? historiquestyles.buttonActive : historiquestyles.button}
                  onPress={ () =>{
                    setMode('PRET')
                    setMen1(true)
                    setMen2(false)
                  }}
                >
                  <Text style={men1 ? historiquestyles.titleactive : historiquestyles.title}>Pret</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={men2 ? historiquestyles.buttonActive : historiquestyles.button}
                  onPress={ () =>{
                    setMode('EMPRUNT')
                    setMen1(false)
                    setMen2(true)
                  }}
                >
                  <Text style={men2 ? historiquestyles.titleactive : historiquestyles.title}>Emprunt</Text>
                </TouchableOpacity>
              </View>

              <View style={historiquestyles.scroll}>
            
              <ScrollView 
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
              }
                horizontal={false} 
                showsHorizontalScrollIndicator={false}
              > 
              
              {
                mode === 'PRET' ? listPret() : listEmprunt()
              }
              </ScrollView>
                </View>
            </View>
              
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'center',
    backgroundColor:'white'
  }
});