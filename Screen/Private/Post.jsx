import React, {useEffect} from 'react';
import { Text, View, ScrollView, TouchableOpacity, RefreshControl, Image,StyleSheet } from 'react-native';
import { annonceSelector, postlist, clearState } from '../../reduxSlices/AnnonceSlice'
import { demandestyles } from './styles.home/demande.style';
import { useDispatch, useSelector } from 'react-redux';
import { contributeurstyles } from './styles.home/contributeur.style';
import emptylist from "../../assets/__empty.png"
import send from "../../assets/send.png"

export default function Post({navigation}) {

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const dispatch = useDispatch();
  const { errorHappen, post, isFetching } = useSelector(annonceSelector);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(()=>{
    dispatch(postlist())
    console.log(post)
  },[])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(postlist())
    wait(2000).then(() => setRefreshing(false));
  }, []);

  var lsempty = false
  try {
    lsempty = post.list.length == 0
  } catch (error) {}
  
  console.log(post)
  return (
    !lsempty ?(
      isFetching == false &&
      <View style={contributeurstyles.container}>

          <View style={demandestyles.view}>
            <Text style={demandestyles.title}>Postes</Text>
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
                    post.list && post.list.map(item => (
                        <React.Fragment>
                            <TouchableOpacity 
                              onPress={()=> navigation.navigate('InfoAnnonce', {data: item})} 
                              style={demandestyles.item}
                              key={item.id}
                            >
                            <View style={demandestyles.leftInfo}>
                              <Image source={send} style={{height:70, width:70}}/>
                              <View style={demandestyles.info}>
                                <Text style={demandestyles.itemName}>{item.type == 'EMPRUNT' ? 'Demande de ': 'Pret de '} {item.montant} FR</Text>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400',fontSize:17}}>Avec pourcentage de {item.pourcentage}%</Text>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400',fontSize:17}}>Pour une durée de {item.duree} Mois</Text>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400',fontSize:17}}>A remboursser chaque {item.modalitePaiement} Mois</Text>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400',fontSize:17}}>Status: <Text style={item.isVisible ? styles.online : styles.offline}>{item.isVisible ? 'en ligne' : 'hors ligne' }</Text></Text>
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
    ):
    (
      isFetching == false &&
      <View style={{...contributeurstyles.container, backgroundColor:'white',justifyContent:'center'}}>
        <Image source={emptylist} style={{height:500, width:500}}/>
      </View>
    )
  );
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