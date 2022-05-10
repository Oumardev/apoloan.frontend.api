import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Modal,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
  Platform
} from 'react-native';
import { styles } from './AuthStyle'


const Login = ({navigation}) => {
  
    const [password, sePassword] = useState('');
    const [login, setLogin] = useState('');
    const passwordInputRef = createRef();
    const [errortext, setErrortext] = useState('');
  
    const handleSubmitPress = () => {
      
      if (!login || !password) {
        setErrortext('Veuillez saisir tout les champs');
        return;
      }
     
      let data = {login: login, password: password};
      
      fetch('http://192.168.1.5:19002/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then((response) => response.json())
        .then((responseJson) => {

            console.log(responseJson)
        }).catch((error) => {
          console.error(error);
        });
  
    };
  
    const closeModal = ()=>{
      setModalVisible(false)
    }
  
    return (
    <View style={styles.mainBody}>
          
        <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={styles.scrollStyle} >
          
          <KeyboardAvoidingView behavior={"position"} keyboardVerticalOffset={200}>
          <Text style={{color : 'red', fontSize : 20, fontWeight : 'bold', marginLeft:20}}>{errortext}</Text>

            <View style={styles.SectionStyle}>
            
              <View style={styles.buttonStyle}>
                <TextInput style={styles.inputStyle} 
                  placeholder='Login' 
                  placeholderTextColor="#d0c8c8d6"
                  onChangeText={(login) =>
                    setLogin(login)
                  }
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    passwordInputRef.current &&
                    passwordInputRef.current.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>   
            </View>

            <View style={styles.SectionStyle}>
              <View style={styles.buttonStyle}>
                <TextInput style={styles.inputStyle} 
                  onChangeText={(password) =>
                    sePassword(password)
                  }
                  placeholder='Password' 
                  secureTextEntry={true}
                  placeholderTextColor="#d0c8c8d6"
                  keyboardType="default"
                  ref={passwordInputRef}
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                  returnKeyType="next"
  
                />
              </View>   
            </View>
            
            <TouchableOpacity
                style={styles.connectButton}
                activeOpacity={0.8}
                onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>CONNEXION</Text>
            </TouchableOpacity>
  
            <Text style={styles.registerTextStyle}
                onPress={() => navigation.navigate('register')}>
                Nouveau ici ? Inscrivez-vous
            </Text>
          </KeyboardAvoidingView>
        </ScrollView>
    </View>
    );
  };

  export default Login;