import React, {useEffect} from 'react';
import { Text, View, ScrollView, TouchableOpacity, RefreshControl, Image,StyleSheet } from 'react-native';
import { annonceSelector, postlist, clearState } from '../../reduxSlices/AnnonceSlice'
import { demandestyles } from './styles.home/demande.style';
import { useDispatch, useSelector } from 'react-redux';
import { contributeurstyles } from './styles.home/contributeur.style';
import emptylist from "../../assets/__empty.png"
import send from "../../assets/send.png"
import del from "../../assets/del.png"
import edit from "../../assets/edit.png"

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
                              onPress={()=> navigation.navigate('ListProposition', {IDANNONCE: item.id})} 
                              style={demandestyles.item}
                              key={item.id}
                            >
                            <View style={demandestyles.leftInfo}>
                              <Image source={send} style={{height:50, width:50}}/>
                              <View style={demandestyles.info}>
                                <Text style={demandestyles.itemName}>Montant: {item.montant} FR</Text>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400',fontSize:14}}>Pourcentage: {item.pourcentage}%</Text>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400',fontSize:14}}>Durée: {item.duree} Mois</Text>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400',fontSize:14}}>Modalité: {item.modalitePaiement} Mois</Text>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400',fontSize:14}}>Status: <Text style={item.isVisible ? styles.online : styles.offline}>{item.isVisible ? 'en ligne' : 'hors ligne' }</Text></Text>
                              </View>
                              <TouchableOpacity style={{backgroundColor:'whitesmoke', padding:10,margin:2,borderRadius:12}}>
                                <Image source={del} style={{height:25, width:25}}/>
                              </TouchableOpacity>
                              <TouchableOpacity style={{backgroundColor:'whitesmoke', padding:10,margin:2,borderRadius:12}}>
                                <Image source={edit} style={{height:25, width:25}}/>
                              </TouchableOpacity>
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