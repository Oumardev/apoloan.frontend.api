import React from 'react';
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from "yup";
import { styles } from './AuthStyle';
import { login, userSelector } from "../../reduxSlices/UserSlice"
import { useSelector, useDispatch } from 'react-redux';

const Login = ({navigation}) => {

    const dispatch = useDispatch()

    const { errorMessage } = useSelector(userSelector);

    const loginSchema = Yup.object().shape({

      numero : Yup.number()
        .typeError('Format invalide')
        .required('Champs requis!'),

      password : Yup.string()
          .min(8,'Minimum 8 caractères')
          .required('Champs requis')
    });
  
    return (
    <View style={styles.mainBody}>
          
        <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={styles.scrollStyle} >
          
          <KeyboardAvoidingView behavior={"position"} keyboardVerticalOffset={200}>
          <Text style={styles.errormsgheader}>{errorMessage}</Text>
              <Formik
                    initialValues={{ 
                        numero: '', 
                        password : ''
                    }}
                    
                    validationSchema = {loginSchema}
                    
                    onSubmit={ async (values, { setSubmitting }) => {
                        const data = {
                            numero: parseInt(values.numero),
                            password: values.password
                        }

                        dispatch(login(data))
                      // try {
                      //   const response = await apiInstance.post(LOGIN_URL,data)
                      //   if(response.data) {
                      //     AsyncStorage.setItem('token', response.data.token);
                      //     AsyncStorage.setItem('isLogin', response.data.isLogin);
                      //     navigation.replace('PrivateScreen');
                      //   }
                      // } catch (error) {
                      //   if(error.response.data.error) setErrormsg(error.response.data.error)
                      // }
                     
                    }}>

                    {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (
                      <View>
                          <View style={styles.SectionStyle}>
                            <View style={styles.buttonStyle}>
                                <TextInput
                                  style={styles.inputStyle} 
                                  placeholder='Télephone'
                                  placeholderTextColor="#d0c8c8d6"
                                  keyboardType="numeric"
                                  autoCapitalize="sentences"

                                  autoCorrect={false}
                                  onChangeText={handleChange('numero')}
                                  onBlur={handleBlur('numero')}
                                  value={values.numero}
                                  onSubmitEditing={Keyboard.dismiss}
                                />
                            </View>   
                            {errors.numero && touched.numero ? ( <Text style={styles.errormsg}>{errors.numero}</Text> ) : null}
                          </View>

                        <View style={styles.SectionStyle}>
                            <View style={styles.buttonStyle}>
                              <TextInput 
                                  style={styles.inputStyle} 
                                  placeholder='Mot de passe' 
                                  secureTextEntry={true}
                                  placeholderTextColor="#d0c8c8d6"
                                        
                                  autoCorrect={false}
                                  onChangeText={handleChange('password')}
                                  onBlur={handleBlur('password')}
                                  value={values.password}
                                  onSubmitEditing={Keyboard.dismiss}
                              />
                            </View>   
                          {errors.password && touched.password ? ( <Text style={styles.errormsg} >{errors.password}</Text> ) : null}
                        </View>
            
                        <TouchableOpacity
                            style={styles.connectButton}
                            activeOpacity={0.8}
                            onPress={handleSubmit}>
                            <Text style={styles.buttonTextStyle}>CONNEXION</Text>
                        </TouchableOpacity>
                      </View>
                    )}
              </Formik>
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