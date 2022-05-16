import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { empruntSelector, empruntlist } from '../../reduxSlices/EmpruntSlice'
import { pretSelector, pretlist } from '../../reduxSlices/PretSlice'
import { historiquestyles } from './styles.historique/historique.style';

/**
 * Cet écrant sera l'écrant d'historique
 * Il répectorie La liste des emprunts et prets du user en cour ...
*/
export default function Historical({navigation}) {
    const dispatch = useDispatch();
    const { emprunt } = useSelector(empruntSelector);
    const { pret, isFetching } = useSelector(pretSelector);
    const [refreshing, setRefreshing] = React.useState(false);

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

    useEffect(()=>{
      dispatch(empruntlist())
      dispatch(pretlist())
    },[])

    const onRefresh = React.useCallback(() => {
      //dispatch(annoncelist())
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    //console.log('emprunt', emprunt)
    //console.log('pret', pret)

    return (
        <View style={styles.container}>
            <View style={historiquestyles.view}>
              <Text style={historiquestyles.title}>Pret</Text>
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
                          <React.Fragment>
                              <TouchableOpacity style={historiquestyles.item}>
                                <View style={historiquestyles.leftInfo} >
                                  <View style={historiquestyles.pret}>
                                    <MaterialCommunityIcons name={'arrow-collapse-up'} size={35} color={'green'}/> 
                                  </View>
                                  <View style={historiquestyles.info}>
                                    <Text style={historiquestyles.itemName}>580000 F</Text>
                                    <Text style={{...historiquestyles.itemName, color:'gray',fontWeight:'400'}}>Pourcentage: 0.48</Text>
                                    <Text style={{...historiquestyles.itemName, color:'green',fontWeight:'400'}}>Total: 67000 F</Text>
                                  </View>
                                </View>

                                <View style={historiquestyles.date}>
                                  <Text style={{...historiquestyles.itemName, color:'red',fontWeight:'400',fontSize:16}}>Expiration 12-11-2000</Text>
                                  <Text style={{color:'gray'}}>En cour ...</Text>
                                </View>
                              </TouchableOpacity>
                          </React.Fragment>
                    }
                  </ScrollView>
              </View>
            </View>

            <View style={historiquestyles.view}>
              <Text style={historiquestyles.title}>Emprunt</Text>
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
                          <React.Fragment>
                              <TouchableOpacity style={historiquestyles.item}>
                                <View style={historiquestyles.leftInfo} >
                                  <View style={historiquestyles.pret}>
                                    <MaterialCommunityIcons name={'arrow-collapse-down'} size={35} color={'red'}/> 
                                  </View>
                                  <View style={historiquestyles.info}>
                                    <Text style={historiquestyles.itemName}>580000 F</Text>
                                    <Text style={{...historiquestyles.itemName, color:'gray',fontWeight:'400'}}>Pourcentage: 0.48</Text>
                                    <Text style={{...historiquestyles.itemName, color:'green',fontWeight:'400'}}>Total: 67000 F</Text>
                                  </View>
                                </View>

                                <View style={historiquestyles.date}>
                                  <Text style={{...historiquestyles.itemName, color:'red',fontWeight:'400',fontSize:16}}>Expiration 12-11-2000</Text>
                                  <Text style={{color:'gray'}}>En cour ...</Text>
                                </View>
                              </TouchableOpacity>
                          </React.Fragment>
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
    alignItems : 'center'
  }

});