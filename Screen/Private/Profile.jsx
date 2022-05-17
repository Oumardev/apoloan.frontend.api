import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userSelector, userget } from '../../reduxSlices/UserSlice'
import { useDispatch, useSelector } from 'react-redux';
import profileimg from '../../assets/profileimg.jpg'
import refilimg from '../../assets/refil.png'
import { profilestyle } from './styles.profile/profile.style';

export default function Profile({navigation}) {

  const dispatch = useDispatch();
  const { errorHappen, user, isFetching } = useSelector(userSelector);


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

  return (
    (isFetching == false) &&
    <View style={profilestyle.container}>
      <TouchableOpacity style={profilestyle.head} onPress={()=> navigation.navigate('EditProfile', {data: user})}>
        <Image style={profilestyle.image} source={profileimg} />
        <View style={profilestyle.edit}>
          <Text style={profilestyle.fullname}>{user.user.prenom} {user.user.nom}</Text>
          <Text style={profilestyle.job}>{user.user.fonction}</Text>
        </View>
        <AntDesign name="edit" color={'gray'} size={27}/>
      </TouchableOpacity>

      <View style={profilestyle.solde}>
        <Text style={profilestyle.title}>Solde</Text>
        <Text style={profilestyle.montant}>{user.user.Compte.solde} F</Text>
        <TouchableOpacity style={profilestyle.refil} onPress={()=> navigation.navigate('Refil')}>
          <Image style={profilestyle.refilimg} source={refilimg} />
          <Text style={profilestyle.refiltext}>Se recharger</Text>
        </TouchableOpacity>
      </View>

      <View style={profilestyle.dashbord}>
        <Text style={profilestyle.title}>Dashbord</Text>
        <View style={profilestyle.stats}>
          <View style={{ alignItems:'center' }}>
            <Text style={{fontSize: 20, fontWeight:'500'}}>Pret</Text>
            <AnimatedCircularProgress
              size={150}
              width={4}
              fill={60}
              tintColor="#8AFF8A"
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
