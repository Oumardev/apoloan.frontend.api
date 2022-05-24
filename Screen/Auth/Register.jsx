import React, { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Formik } from 'formik';
import { registersty, cardstyle } from './AuthStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { register, userSelector } from "../../reduxSlices/UserSlice"
import Payment from "./Payment"
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from "yup";

const Step1 = ({setStep}) =>{

  const dispatch = useDispatch()
  const { errorMessage , isRegister } = useSelector(userSelector);

  useEffect(()=>{
    if(isRegister){
      setStep(2)
    } 
  },[isRegister])

  const registerSchema = Yup.object().shape({
    nom: Yup.string()
      .min(1, 'Trop court!')
      .max(50, 'Trop long!')
      .required('Champs requis'),
    
    prenom: Yup.string()
      .min(1, 'Trop court!')
      .max(50, 'Trop long!')
      .required('Champs requis'),

    numero : Yup.number()
      .typeError('Format invalide')
      .required('Champs requis!'),

    password : Yup.string()
      .min(8,'Minimum 8 caractères')
      .required('Champs requis'),
});

return (
  <View style={registersty.container}>
    <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={registersty.scrollStyle}>
      <KeyboardAvoidingView behavior={'position'}>
      <Text style={registersty.errormsgheader}>{errorMessage && errorMessage}</Text>
          <Formik
            initialValues={{ 
              nom: '', 
              prenom: '', 
              numero: '', 
              password : ''
            }}
            
            enableReinitialize={true}
            validationSchema = {registerSchema}
            
            onSubmit={(values, { setSubmitting }) => {
            const data = {
              nom: values.nom,
              prenom: values.prenom,
              numero: parseInt(values.numero),
              password : values.password
            }
                          
              console.log(data)
              dispatch(register(data))
            }}>
            
            {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (

            <View style={registersty.formulaire}>
              <View style={registersty.viewbothinput}>
                <View style={registersty.inputview}>
                  <Text style={registersty.description}>Nom</Text>
                    <TextInput 
                        style={registersty.inputboth} 
                        placeholder={'DOE'}
                        autoCorrect={false}
                        onChangeText={handleChange('nom')}
                        onBlur={handleBlur('nom')}
                        value={values.nom}
                        onSubmitEditing={Keyboard.dismiss}
                      />
                    {errors.nom && touched.nom ? ( <Text style={registersty.errormsg}>{errors.nom}</Text> ) : null}
                </View>

                <View style={registersty.inputview}>
                  <Text style={registersty.description}>Prénom</Text>
                    <TextInput 
                        style={registersty.inputboth} 
                        placeholder={'John'}                    
                        autoCorrect={false}
                        onChangeText={handleChange('prenom')}
                        onBlur={handleBlur('prenom')}
                        value={values.prenom}
                        onSubmitEditing={Keyboard.dismiss}
                      />
                    {errors.prenom && touched.prenom ? ( <Text style={registersty.errormsg} >{errors.prenom}</Text> ) : null}
                </View>
              </View>

                <View style={registersty.inputview}>
                  <Text style={registersty.description}>Numéro</Text>
                    <TextInput 
                        style={registersty.input} 
                        placeholder={'778887711'}                    
                        autoCorrect={false}
                        onChangeText={handleChange('numero')}
                        onBlur={handleBlur('numero')}
                        value={values.numero}
                        onSubmitEditing={Keyboard.dismiss}
                      />
                    {errors.numero && touched.numero ? ( <Text style={registersty.errormsg} >{errors.numero}</Text> ) : null}
                </View>

                <View style={registersty.inputview}>
                  <Text style={registersty.description}>Mot de passe</Text>
                    <TextInput 
                        secureTextEntry={true}
                        style={registersty.input} 
                        placeholder={'******'}                    
                        autoCorrect={false}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        onSubmitEditing={Keyboard.dismiss}
                      />
                    {errors.password && touched.password ? ( <Text style={registersty.errormsg} >{errors.password}</Text> ) : null}
                </View>
              
                <TouchableOpacity style={registersty.connectButton} activeOpacity={0.2} onPress={handleSubmit} >
                  <Text style={registersty.buttonTextStyle}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
          )}
          </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  </View>
);
}


const Register = ({navigation}) => {

    const [ step, setStep ] = useState(1)

    return(
      <Payment />
      // step === 1 ? <Step1 setStep={setStep} /> : <Payment />
    )
};

export default Register;