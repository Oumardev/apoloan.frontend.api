import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearState } from '../../../../reduxSlices/AnnonceSlice'
import { useDispatch } from 'react-redux';
import io from "socket.io-client";

export default function SaveSignature({navigation}) {

    const dispatch = useDispatch();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = async ({ type, data }) => {
      setScanned(true);
      const socket = io("http://192.168.1.103:1000")
      const token = await AsyncStorage.getItem('token')

      socket.emit('savesign',{qr:data, token:token})
      dispatch(clearState())
      navigation.navigate('Home')
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={styles.container}>
        <View style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontWeight: '500',fontSize:24,color:'red', textAlign:'center'}}>Vous devez enregistrer une signature avant d'éffectuer cette proposition</Text>
          <Text>Allez sur le site: 192.168.1.6:1000/apoloanapi/signature et scanner le code Qr</Text>
        </View>
       
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{width:500, height:500}}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        
        <TouchableOpacity style={{padding : 10, borderRadius: 10, backgroundColor : 'red'}}
          onPress={()=>{
            dispatch(clearState())
            navigation.navigate('Home')
          }}
        >
          <Text style={{fontWeight: '500',fontSize:24,color:'white', textAlign:'center'}} >Quitter</Text>
        </TouchableOpacity>

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
  });
  