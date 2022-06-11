import React, {useEffect} from 'react';
import { Text, View, ScrollView, TouchableOpacity, RefreshControl, Image,StyleSheet } from 'react-native';
import { propositionSelector, listproposition, clearState } from '../../../../reduxSlices/PropositionSlice'
import { demandestyles } from '../../styles.home/demande.style';
import { useDispatch, useSelector } from 'react-redux';
import { contributeurstyles } from '../../styles.home/contributeur.style';
import emptylist from "../../../../assets/__empty.png"
import send from "../../../../assets/send.png"

export default function ListProposition({route, navigation}) {

  const { IDANNONCE } = route.params;

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const dispatch = useDispatch();
  const { errorHappen, proposition, isFetching } = useSelector(propositionSelector);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(()=>{
    dispatch(listproposition({'IDANNONCE': IDANNONCE}))

  },[])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(listproposition(IDANNONCE))
    wait(2000).then(() => setRefreshing(false));
  }, []);

  var lsempty = false
  try {
    lsempty = proposition.list.length == 0
  } catch (error) {}
  
  return (
    !lsempty ?(
      isFetching == false &&
      <View style={contributeurstyles.container}>

          <View style={demandestyles.view}>
            <Text style={demandestyles.title}>Proposition</Text>
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
                    proposition.list && proposition.list.map(item => (
                        <React.Fragment>
                            <TouchableOpacity 
                              onPress={()=> navigation.navigate('InfoAnnonce', {data: item})} 
                              style={demandestyles.item}
                              key={item.id}
                            >
                            <View style={demandestyles.leftInfo}>
                              <Image source={send} style={{height:70, width:70}}/>
                              <View style={demandestyles.info}>
                                <Text style={demandestyles.itemName}>{item.User.prenom} {item.User.nom} </Text>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400',fontSize:17}}>{item.numero}</Text>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400',fontSize:17}}>Status: <Text style={styles.online}>{item.status}</Text></Text>
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