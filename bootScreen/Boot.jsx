import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userSelector } from '../reduxSlices/UserSlice';
import { useSelector } from 'react-redux';

const Boot = ({navigation}) => {
  
  const { errorHappen, user } = useSelector(userSelector);
  const [animating, setAnimating] = useState(true);

  console.log('error happen ',errorHappen)
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
        if(errorHappen){
          AsyncStorage.removeItem('token')
          AsyncStorage.removeItem('isLogin')
          navigation.replace('Auth')
        }else{
          
          if(user.user.isActivated)
              navigation.replace('PrivateScreen') 
          else
            navigation.replace('Payment')
            
        }
    }, 2500);
  },[]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo2.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default Boot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});