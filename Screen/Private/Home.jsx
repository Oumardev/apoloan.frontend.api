import React, { useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, AntDesign, Ionicons } from 'react-native-vector-icons';
import { demandestyles } from './styles.home/demande.style';
import { contributeurstyles } from './styles.home/contributeur.style';
import { userSelector, userget } from '../../reduxSlices/UserSlice'
import { annonceSelector, annoncelist } from '../../reduxSlices/AnnonceSlice'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  
  const dispatch = useDispatch();
  const { errorHappen } = useSelector(userSelector);
  const { isFetching ,annonce } = useSelector(annonceSelector);

  const logOut = () =>{
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('isLogin')
    navigation.replace('Auth')
  }

  useEffect(()=>{
    dispatch(userget())
    dispatch(annoncelist())
  },[])


  useEffect(()=>{
    if(errorHappen == true)  logOut()
  },[errorHappen])

    return (
      isFetching == false &&
        <View style={contributeurstyles.container}>

            <View style={contributeurstyles.view}>
              <Text style={contributeurstyles.title}>Contributeurs</Text>
                <View style={contributeurstyles.scroll}>
                  <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                      annonce.pret && annonce.pret.map(item =>(
                        <View key={item.id} style={contributeurstyles.wrapItem}>
                          <TouchableOpacity 
                            onPress={()=> navigation.navigate('InfoAnnonce', {data: item})} 
                            key={item.id}
                            style={contributeurstyles.item}
                          >
                            <FontAwesome5 name={'user-tie'} size={35} color={'black'}/>
                          </TouchableOpacity>
                            <Text style={{...contributeurstyles.itemName, color:'black', fontWeight:'600'}}>{item.User.prenom}</Text>
                        </View>
                      ))
                    }
                  </ScrollView>
              </View>
            </View>

            <View style={demandestyles.view}>
              <Text style={demandestyles.title}>Demandes récente</Text>
                <View style={demandestyles.scroll}>
                  <ScrollView  horizontal={false} showsHorizontalScrollIndicator={false}>
                    {
                      annonce.emprunt && annonce.emprunt.map(item =>(
                          <React.Fragment key={item.id}>
                              <TouchableOpacity 
                                onPress={()=> navigation.navigate('InfoAnnonce', {data: item})} 
                                style={demandestyles.item}
                                key={item.id}
                              >
                              <View style={demandestyles.leftInfo} >
                                <MaterialCommunityIcons name={'hand-extended'} size={35} color={'black'}/>
                                <View style={demandestyles.info}>
                                  <Text style={demandestyles.itemName}>Demande de {nFormatter(item.montant)}</Text>
                                  <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400'}}>Avec pourcentage de {item.pourcentage}</Text>
                                  <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400'}}>pour une durée de {item.duree}</Text>
                                </View>
                              </View>

                              <View style={demandestyles.date}>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'300',fontSize:15}}>12/11/2000</Text>
                                <AntDesign size={30} name={'pushpino'} />
                              </View>
                            </TouchableOpacity>
                          </React.Fragment>
                      ))
                    }
                  </ScrollView>
              </View>
            </View>
            
            <TouchableOpacity style={demandestyles.buttonAdd} onPress={() => navigation.navigate('MakeAnnonce')}>
              <Ionicons size={22} color={'white'} name="add"/>
              <Text style={demandestyles.addText}>Ajouter une annonce</Text>
            </TouchableOpacity>
        </View>
  );
}