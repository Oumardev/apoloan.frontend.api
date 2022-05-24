import React, { useEffect } from 'react';
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
import { loginsty } from './AuthStyle';
import { login, userSelector } from "../../reduxSlices/UserSlice"
import { useSelector, useDispatch } from 'react-redux';

const Login = ({navigation}) => {

    const dispatch = useDispatch()
    const { errorMessage , loginSuccess} = useSelector(userSelector);

    useEffect(()=>{
      if(loginSuccess) navigation.replace('SplashScreen');
    },[loginSuccess])

    const loginSchema = Yup.object().shape({

      numero : Yup.number()
        .typeError('Format invalide')
        .required('Champs requis!'),

      password : Yup.string()
          .min(8,'Minimum 8 caractères')
          .required('Champs requis')
    });
  
    return (
    <View style={loginsty.container}>
      <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={loginsty.scrollStyle}>
      <KeyboardAvoidingView behavior={"position"} keyboardVerticalOffset={20}>
      <Text style={{color:'red'}}>{errorMessage && errorMessage}</Text>
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
            }}>

          {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (
        <View style={loginsty.formulaire}>
          <View style={loginsty.inputview}>
            <Text style={loginsty.description}>Téléphone</Text>
              <TextInput 
                  style={loginsty.input} 
                  placeholder={'778881155'}
                  autoCorrect={false}
                  onChangeText={handleChange('numero')}
                  onBlur={handleBlur('numero')}
                  value={values.numero}
                  onSubmitEditing={Keyboard.dismiss}
                />
              {errors.numero && touched.numero ? ( <Text style={loginsty.errormsg}>{errors.numero}</Text> ) : null}
          </View>

          <View style={loginsty.inputview}>
            <Text style={loginsty.description}>Mot de passe</Text>
              <TextInput 
                  secureTextEntry={true}
                  style={loginsty.input} 
                  placeholder={'*******'}                    
                  autoCorrect={false}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  onSubmitEditing={Keyboard.dismiss}
                />
              {errors.password && touched.password ? ( <Text style={loginsty.errormsg} >{errors.password}</Text> ) : null}
          </View>

          <TouchableOpacity style={loginsty.connectButton} activeOpacity={0.2} onPress={handleSubmit} >
            <Text style={loginsty.buttonTextStyle}>Se connecter</Text>
          </TouchableOpacity>
        </View>
        )}
      </Formik>
      <Text style={loginsty.registerTextStyle}
        onPress={() => navigation.navigate('register')}>
        Nouveau ici ? Inscrivez-vous
      </Text>
      </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Login;