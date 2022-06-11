import React, { useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, RefreshControl, Image } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, AntDesign, Ionicons } from 'react-native-vector-icons';
import { demandestyles } from './styles.home/demande.style';
import { contributeurstyles } from './styles.home/contributeur.style';
import { userSelector, userget } from '../../reduxSlices/UserSlice'
import { annonceSelector, annoncelist } from '../../reduxSlices/AnnonceSlice'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reqmoney from "../../assets/__1.webp"
import sendmoney from "../../assets/__2.webp"
import emptylist from "../../assets/__empty.png"

/**
 * Cet écrant sera l'écrant d'acceuil 
 * il affichera :
 * - LIST ANNONCE ['EMPRUNT', 'PRET']
*/
export default function Home({navigation}){

  function nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  }

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
  const dispatch = useDispatch();
  const { errorHappen } = useSelector(userSelector);
  const { isFetching ,annonce } = useSelector(annonceSelector);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(annoncelist())
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const logOut = () =>{
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('isLogin')
    navigation.replace('Auth')
  }

  useEffect(()=>{
    try {
      dispatch(userget())
      dispatch(annoncelist())
      if(errorHappen == true)  logOut()
    } catch (error) {
      console.log('error: ',error)
      if(errorHappen == true)  logOut()
    }
  },[])

  useEffect(()=>{
    if(errorHappen == true)  logOut()
  },[errorHappen])

  var lsempty = false
  try {
    lsempty = annonce.list.length == 0
  } catch (error) {}

    return (
      !lsempty ?
      (
        isFetching == false &&
        <View style={contributeurstyles.container}>

            <View style={demandestyles.view}>
              <Text style={demandestyles.title}>Annonces</Text>
                <View style={demandestyles.scroll}>
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
                      annonce.list && annonce.list.map(item => (
                          <React.Fragment>
                              <TouchableOpacity 
                                onPress={()=> navigation.navigate('InfoAnnonce', {data: item})} 
                                style={demandestyles.item}
                                key={item.id}
                              >
                              <View style={demandestyles.leftInfo}>
                                <Image source={item.type == 'EMPRUNT' ? reqmoney: sendmoney} style={{height:80, width:80}}/>
                                <View style={demandestyles.info}>
                                  <Text style={demandestyles.itemName}>{item.type == 'EMPRUNT' ? 'Demande de ': 'Pret de '} {item.montant} FR</Text>
                                  <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400'}}>Avec pourcentage de {item.pourcentage}%</Text>
                                  <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400'}}>Pour une durée de {item.duree} Mois</Text>
                                  <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400'}}>A remboursser chaque {item.modalitePaiement} Mois</Text>
                                </View>
                              </View>
                            </TouchableOpacity>
                          </React.Fragment>
                      ))
                    }
                  </ScrollView>
              </View>
            </View>
        </View>
      ) 
      : 
      (
        isFetching == false &&
        <View style={{...contributeurstyles.container, backgroundColor:'white',justifyContent:'center'}}>
          <Image source={emptylist} style={{height:500, width:500}}/>
        </View>
      )
      
  );
}