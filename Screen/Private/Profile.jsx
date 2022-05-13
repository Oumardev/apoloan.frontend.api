import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiInstance from '../../axios.config'
import { USER_GET_URL } from '../../URL_API'

export default function Profile({navigation}) {

  const [user, setUser] = useState({})
  
  useEffect(()=>{
    async function fetchData(){
      const token = await AsyncStorage.getItem('token')
  
      try{
          const response = await apiInstance.get(USER_GET_URL,{
            headers:{
              'Content-Type': 'application/json',
              'Authorization': 'Bear '+token
            }
          })
        
        console.log(response.data.user)
      }catch(error){
        console.log('error')
        AsyncStorage.removeItem('token')
        navigation.navigate('Auth')
        console.log('end error')
      }

      console.log('token',token)
    }

    fetchData()
  },[])

  return (
    <View style={styles.container}>
     
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
            <View style={styles.follower}>
              <Text style={{fontSize : 30, fontWeight:'700'}}>400k</Text>
              <Text style={{fontSize : 17, fontWeight:'200'}}>Solde</Text>
            </View>
            <View style={styles.pp}>

              <Text style={{fontSize : 30, fontWeight:'700'}}>Oumar CISSE</Text>
              <Text style={{fontSize : 17, fontWeight:'200'}}>~Oums</Text>
              <TouchableOpacity style={styles.editButton} onPress={()=> navigation.navigate('EditPtofile')}>
                <Text style={{fontSize : 22, fontWeight:'500', color:'white'}}>Modifier</Text>
                <MaterialIcons name='edit' size={22} color={'white'}/>
              </TouchableOpacity> 
            </View>
            <View style={styles.demande}>
            <Text style={{fontSize : 30, fontWeight:'700'}}>18</Text>
            <Text style={{fontSize : 17, fontWeight:'200'}}>demandes</Text>
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