import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from "yup";

const Register = ({navigation}) => {

    const [errormsg, setErrorMsg] = useState('')

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

        sexe: Yup.string()
          .required('Champs requis'),

        adresse: Yup.string()
            .required('Champs requis'),

        fonction: Yup.string()
            .required('Champs requis'),

        numeroCNI : Yup.number()
            .typeError('Format invalide')
            .required('Champs requis!'),

        password : Yup.string()
            .min(8,'Minimum 8 caractères')
            .required('Champs requis'),

        passwordConfirm : Yup.string()
            .oneOf([Yup.ref('password'), null], "Mot de passe différent")
            .required('Champs requis'),
    });

    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
         <View style={styles.bienvenue}>
          <Text style={{color : 'white', fontSize : 50, fontWeight : 'bold'}}>Inscrivez-vous</Text>
        </View>
              
          <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={{flex: 1, justifyContent: 'center',alignContent: 'center' }}>
          <KeyboardAvoidingView behavior={"position"}>
             {/** Begin forms  */}
             <Text  style={styles.errormsgheader}>{errormsg}</Text>
             <Formik
                    initialValues={{ 
                        nom: '', 
                        prenom: '', 
                        numero: '', 
                        sexe: 'M', 
                        adresse: '', 
                        fonction: '',
                        numeroCNI: '',
                        password : '',
                        passwordConfirm: ''
                    }}
                    
                    validationSchema = {registerSchema}
                    
                    onSubmit={(values, { setSubmitting }) => {

                        const data = {
                            nom: values.nom,
                            prenom: values.prenom,
                            numero: parseInt(values.numero),
                            sexe: values.sexe,
                            age: 10,
                            adresse: values.adresse,
                            fonction: values.fonction,
                            numeroCNI: parseInt(values.numeroCNI),
                            password: values.password
                        }

                        console.log(data)
                    }}>
                    {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (
                        <View>
                            <View style={styles.SectionStyle}>
                                <View style={styles.buttonStyle}>
                                    <TextInput
                                        style={styles.inputStyle} 
                                        placeholder='nom' 
                                        placeholderTextColor="#d0c8c8d6"

                                        autoCorrect={false}
                                        onChangeText={handleChange('nom')}
                                        onBlur={handleBlur('nom')}
                                        value={values.nom}
                                        onSubmitEditing={Keyboard.dismiss}
                                    />
                                </View>
                                {errors.nom && touched.nom ? ( <Text style={styles.errormsg}>{errors.nom}</Text> ) : null}
                            </View>

                            <View style={styles.SectionStyle}>
                                <View style={styles.buttonStyle}>
                                    <TextInput
                                        style={styles.inputStyle} 
                                        placeholder='prenom' 
                                        placeholderTextColor="#d0c8c8d6"

                                        autoCorrect={false}
                                        onChangeText={handleChange('prenom')}
                                        onBlur={handleBlur('prenom')}
                                        value={values.prenom}
                                        onSubmitEditing={Keyboard.dismiss}
                                    />
                                </View>
                                {errors.prenom && touched.prenom ? ( <Text style={styles.errormsg}>{errors.prenom}</Text> ) : null}
                            </View>

                            <View style={styles.SectionStyle}>
                                <View style={styles.buttonStyle}>
                                    <TextInput
                                        style={styles.inputStyle} 
                                        placeholder='telephone'
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
                                {errors.telephone && touched.telephone ? ( <Text style={styles.errormsg}>{errors.telephone}</Text> ) : null}
                            </View>

                            <View style={styles.SectionStyle}>
                                <View style={styles.buttonStyle}>
                                    <TextInput
                                        style={styles.inputStyle} 
                                        placeholder='adresse'
                                        placeholderTextColor="#d0c8c8d6"
                                        autoCapitalize="sentences"

                                        autoCorrect={false}
                                        onChangeText={handleChange('adresse')}
                                        onBlur={handleBlur('adresse')}
                                        value={values.adresse}
                                        onSubmitEditing={Keyboard.dismiss}
                                    />
                                </View>   
                                {errors.adresse && touched.adresse ? ( <Text style={styles.errormsg}>{errors.adresse}</Text> ) : null}
                            </View>

                            <View style={styles.SectionStyle}>
                                <View style={styles.buttonStyle}>
                                    <TextInput
                                        style={styles.inputStyle} 
                                        placeholder='fonction'
                                        placeholderTextColor="#d0c8c8d6"
                                        autoCapitalize="sentences"

                                        autoCorrect={false}
                                        onChangeText={handleChange('fonction')}
                                        onBlur={handleBlur('fonction')}
                                        value={values.fonction}
                                        onSubmitEditing={Keyboard.dismiss}
                                    />
                                </View>   
                                {errors.fonction && touched.fonction ? ( <Text style={styles.errormsg}>{errors.fonction}</Text> ) : null}
                            </View>

                            <View style={styles.SectionStyle}>
                                <View style={styles.buttonStyle}>
                                    <TextInput
                                        style={styles.inputStyle} 
                                        placeholder='numero CNI'
                                        placeholderTextColor="#d0c8c8d6"
                                        keyboardType="numeric"
                                        autoCapitalize="sentences"

                                        autoCorrect={false}
                                        onChangeText={handleChange('numeroCNI')}
                                        onBlur={handleBlur('numeroCNI')}
                                        value={values.numeroCNI}
                                        onSubmitEditing={Keyboard.dismiss}
                                    />
                                </View>   
                                {errors.numeroCNI && touched.numeroCNI ? ( <Text style={styles.errormsg}>{errors.numeroCNI}</Text> ) : null}
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

                            <View style={styles.SectionStyle}>
                                <View style={styles.buttonStyle}>
                                    <TextInput 
                                        style={styles.inputStyle} 
                                        placeholder='Confirmer mot de passe' 
                                        secureTextEntry={true}
                                        placeholderTextColor="#d0c8c8d6"
                                        
                                        autoCorrect={false}
                                        onChangeText={handleChange('passwordConfirm')}
                                        onBlur={handleBlur('passwordConfirm')}
                                        value={values.passwordConfirm}
                                        onSubmitEditing={Keyboard.dismiss}
                                    />
                                </View>   
                                {errors.passwordConfirm && touched.passwordConfirm ? ( <Text style={styles.errormsg}>{errors.passwordConfirm}</Text> ) : null}
                            </View>
                           
                            <TouchableOpacity
                                style={styles.connectButton}
                                activeOpacity={0.8}
                                onPress={handleSubmit}>
                                <Text style={styles.buttonTextStyle}>INSCRIPTION</Text>
                            </TouchableOpacity>
                    </View>
                )}
            </Formik>
          </KeyboardAvoidingView>
          </ScrollView>
      </View>
    );
  };
  export default Register;
  
  const styles = StyleSheet.create({
    SectionStyle: {
      backgroundColor:'white',
      flexDirection:'row',
      alignItems:'center',
      height: 35,
      margin:5,
      borderRadius:20
    },

    buttonStyle: {
      flex:1
    },

    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 19,
      fontWeight : '600'
    },

    inputStyle: {
        fontSize: 20,
        padding:10,
        fontWeight: '500',
        backgroundColor: 'white',
        flex:1,
        borderRadius:15
    },

    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },

    successTextStyle: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      padding: 30,
    },
  
    indicatif : {
      position : 'absolute',
      zIndex : 1,
      fontSize : 15,
      fontWeight : '900',
      backgroundColor : '#d6cacadb',
      width : 50,
      color : '#907d7dd9',
      paddingLeft : 8,
      height : 40,
      paddingTop : 12,
      borderRadius: 3,
    },
  
    iconRegister : {
      position : 'absolute',
      zIndex : 1,
      backgroundColor : 'white',
      width : 50,
      color : 'black',
      paddingLeft : 12,
      height : 40,
      paddingTop : 7,
      borderRadius: 3,
    },
  
    childStyle : {
      backgroundColor: "#000000db",
      borderRadius: 12,
      paddingTop: 2,
      justifyContent : 'center',
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 5
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height : 80,
      width : 280
    },

    connectButton:{
      backgroundColor: '#0096FF',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 45,
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 30,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 20,
      marginBottom: 25,
    },

    bienvenue:{
      marginLeft:20,
      marginTop:80,  
    },

    errormsg:{
        color:'red',
        paddingRight:10
    },

    errormsgheader:{
        fontSize:20,
        fontWeight:'600',
        color:'red',
        paddingLeft:10,
        paddingBottom:5
    }
  });