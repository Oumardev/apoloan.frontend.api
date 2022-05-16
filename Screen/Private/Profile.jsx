import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userSelector, userget } from '../../reduxSlices/UserSlice'
import { useDispatch, useSelector } from 'react-redux';
import profileimg from '../../assets/profileimg.jpg'
import refilimg from '../../assets/refil.png'

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

  const logOut = () =>{
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('isLogin')
    navigation.replace('Auth')
  }

  useEffect(()=>{
    dispatch(userget())
  },[])

  useEffect(()=>{
   if(errorHappen == true)  logOut()
  },[errorHappen])

  console.log(user)
  return (
    (isFetching == false) &&
    <View style={styles.container}>
      <View style={styles.head}>
        <Image style={styles.image} source={profileimg} />
        <View style={styles.edit}>
          <Text style={styles.fullname}>{user.user.prenom} {user.user.nom}</Text>
          <Text style={styles.job}>{user.user.fonction}</Text>
        </View>
        <AntDesign name="edit" color={'gray'} size={27}/>
      </View>

      <View style={styles.solde}>
        <Text style={styles.title}>Solde</Text>
        <Text style={styles.montant}>{user.user.Compte.solde} F</Text>
        <TouchableOpacity style={styles.refil}>
          <Image style={styles.refilimg} source={refilimg} />
          <Text style={styles.refiltext}>Se recharger</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dashbord}>
        <Text style={styles.title}>Dashbord</Text>
        <View style={styles.stats}>
          <View style={{ alignItems:'center' }}>
            <Text style={{fontSize: 20, fontWeight:'500'}}>Pret</Text>
            <AnimatedCircularProgress
              size={150}
              width={4}
              fill={60}
              tintColor="#8AFF8A"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#3d5875" 
              padding={5}
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
            <Text style={{fontSize: 20, fontWeight:'500'}}>Non rembousé</Text>
            <AnimatedCircularProgress
              size={150}
              width={4}
              fill={12}
              tintColor="red"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#3d5875" 
              padding={5}
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
    backgroundColor: 'white',
  },

  head:{
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center'
  },

  image :{
    height : 130,
    width : 130,
    borderRadius : 30
  },

  fullname:{
    fontSize : 30,
    fontWeight : '700'
  },

  edit:{
    marginRight : 20
  },

  job:{
    fontSize : 18,
    fontWeight : '200'
  },

  solde:{
    margin : 20
  },

  title:{
    fontSize : 24,
    fontWeight : '400',
    color:'gray'
  },

  montant:{
    fontSize : 28,
    fontWeight : '700',
    margin : 8
  },

  dashbord:{
    margin : 20,
  },

  refilimg:{
    height : 60,
    width : 60
  },

  refil:{
    display : 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 20,
    padding : 5
  },

  refiltext:{
    fontSize : 28,
    fontWeight : '500',
    margin : 8
  },

  stats:{
    display:'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    margin: 30
  }
});