import React, {useEffect} from 'react';
import { Text, View, ScrollView, TouchableOpacity, RefreshControl, Image,StyleSheet } from 'react-native';
import { propositionSelector, listproposition, clearState } from '../../../../reduxSlices/PropositionSlice'
import { Ionicons } from 'react-native-vector-icons';
import { demandestyles } from '../../styles.home/demande.style';
import { useDispatch, useSelector } from 'react-redux';
import { contributeurstyles } from '../../styles.home/contributeur.style';
import send from "../../../../assets/show.png"
import del from "../../../../assets/del.png"
import accept from "../../../../assets/accept.png"
import ModalPost from '../Home/ModalPost';

export default function ListProposition({route, navigation}) {

  const { IDANNONCE } = route.params;

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const dispatch = useDispatch();
  const { errorHappen, proposition, isFetching, update } = useSelector(propositionSelector);
  const [refreshing, setRefreshing] = React.useState(false);
  const [visible, setVisible] = React.useState(false)
  const [id, setId] = React.useState(null)

  useEffect(()=>{
    dispatch(listproposition({'IDANNONCE': IDANNONCE}))
  },[])

  useEffect(()=>{
    if(update){
      dispatch(listproposition({'IDANNONCE': IDANNONCE}))
      dispatch(clearState())
    }
  },[update])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(listproposition({'IDANNONCE': IDANNONCE}))
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
        <ModalPost visible={visible} setVisible={setVisible} id={id} type={'Pr'} />
          <View style={demandestyles.view}>
            <Text style={demandestyles.title}>Propositions</Text>
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
                        <React.Fragment key={item.id}>
                            <TouchableOpacity 
                             // onPress={()=> navigation.navigate('InfoAnnonce', {data: item})} 
                              style={demandestyles.item}
                              key={item.id}
                            >
                            <View style={demandestyles.leftInfo}>
                              <Image source={send} style={{height:50, width:50}}/>
                              <View style={demandestyles.info}>
                                <Text style={demandestyles.itemName}>{item.User.prenom} {item.User.nom} </Text>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400',fontSize:17}}>{item.User.numero}</Text>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400',fontSize:17}}>Status: <Text style={styles.online}>{item.status}</Text></Text>
                              </View>
                              <TouchableOpacity 
                                style={{backgroundColor:'whitesmoke', padding:10,margin:2,borderRadius:12}}
                                onPress={()=>{
                                  setVisible(true)
                                  setId(item.id)
                                }}
                              >
                                <Image source={del} style={{height:25, width:25}}/>
                              </TouchableOpacity>

                              <TouchableOpacity 
                                onPress={()=> navigation.navigate('Scanner',{proposition: item})}
                                style={{backgroundColor:'whitesmoke', padding:10,margin:2,borderRadius:12}}
                              >
                                <Image source={accept} style={{height:25, width:25}}/>
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
      <View style={contributeurstyles.container}>
            <View style={demandestyles.view}>
              <Text style={{...demandestyles.title, color:'gray',textAlign:'center'}}>Acune proposition trouvé</Text>
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

                  <Ionicons onPress={onRefresh} name="ios-refresh-circle-sharp" size={60}/>
                </ScrollView>
                </View>
            </View>
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