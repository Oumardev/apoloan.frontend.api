import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userSelector, userget } from '../../reduxSlices/UserSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function Profile({navigation}) {

  const dispatch = useDispatch();
  const { errorMessage , errorHappen, user, isFetching } = useSelector(userSelector);

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

  useEffect(()=>{
    dispatch(userget())
  },[])

  console.log('error happen',errorHappen)
  return (
    isFetching == false &&
    <View style={styles.container}>
     
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
            <View style={styles.follower}>
              <Text style={{fontSize : 23, fontWeight:'700'}}>{nFormatter(user.user.Compte.solde)} F</Text>
              <Text style={{fontSize : 17, fontWeight:'200'}}>Solde</Text>
            </View>
            <View style={styles.pp}>

              <Text style={{fontSize : 30, fontWeight:'700'}}>{user.user.prenom} {user.user.nom}</Text>
              <Text style={{fontSize : 17, fontWeight:'200'}}>~{user.user.numero}</Text>
              <TouchableOpacity style={styles.editButton} onPress={()=> navigation.navigate('EditPtofile')}>
                <Text style={{fontSize : 22, fontWeight:'500', color:'white'}}>Modifier</Text>
                <MaterialIcons name='edit' size={22} color={'white'}/>
              </TouchableOpacity> 
            </View>
            <View style={styles.demande}>
            <Text style={{fontSize : 30, fontWeight:'700'}}>
              <MaterialIcons name='logout' onPress={()=>{
                  AsyncStorage.removeItem('token')
                  AsyncStorage.removeItem('isLogin')
                  navigation.replace('SplashScreen')
                }} 
                style={{margin:10}} size={32} color={'#E43D40'}/></Text>
            <Text style={{fontSize : 17, fontWeight:'200'}}>Logout</Text>
            </View>
        </View>
        <View style={styles.note}>
          <View style={{ alignItems:'center' }}>
            <Text style={{fontSize: 20, fontWeight:'500'}}>Pret remboursé</Text>
            <AnimatedCircularProgress
              size={180}
              width={10}
              fill={60}
              tintColor="#8AFF8A"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#3d5875" 
              padding={8}
            >
              {
                (fill) => (
                  <Text style={{fontSize: 30, fontWeight:'700'}}>
                    60
                  </Text>
                )
              }
            </AnimatedCircularProgress>
          </View>

          <View style={{  alignItems:'center' }}>
            <Text style={{fontSize: 20, fontWeight:'500'}}>Emprunt</Text>
            <AnimatedCircularProgress
              size={180}
              width={10}
              fill={12}
              tintColor="#8AFF8A"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#3d5875" 
              padding={8}
            >
              {
                (fill) => (
                  <Text style={{fontSize: 30, fontWeight:'700'}}>
                    12
                  </Text>
                )
              }
            </AnimatedCircularProgress>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },

  header:{
    backgroundColor:'green',
    height: 80
  },

  body:{
    backgroundColor:'white',
    flex:1,
    borderTopLeftRadius: 35,
    borderTopRightRadius : 35
  },

  bodyHeader:{
    flexDirection : 'row',
    margin: 10,
    justifyContent: 'space-around',
    alignItems:'center'
    
  },

  follower :{
    alignItems:'center'
  },

  pp :{
    alignItems:'center'
  },

  demande :{
    alignItems:'center'
  },

  editButton:{
    width: 130,
    backgroundColor : '#76B947',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 30,
    marginTop: 5,
    flexDirection:'row'
  },

  note:{
    margin : 10,
    flexDirection:'row',
    flexWrap : 'wrap',
    justifyContent:'center'
  }
});