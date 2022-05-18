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
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from "yup";

const Step1 = ({setStep,data,setData,error}) =>{
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
        .required('Champs requis!')
});

return (
  <View style={registersty.container}>
    <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={registersty.scrollStyle}>
      <KeyboardAvoidingView behavior={'position'}>
      <Text style={registersty.errormsgheader}>{error && error}</Text>
          <Formik
            initialValues={{ 
              nom: data ? data.nom : '', 
              prenom: data ? data.prenom : '', 
              numero: data ? data.numero : '', 
              sexe: 'M', 
              adresse: data ? data.adresse : '', 
              fonction: data ? data.fonction : '',
              numeroCNI: data ? data.numeroCNI : ''
            }}
            
            enableReinitialize={true}
            validationSchema = {registerSchema}
            
            onSubmit={(values, { setSubmitting }) => {

            const data = {
              nom: values.nom,
              prenom: values.prenom,
              numero: values.numero,
              sexe: values.sexe,
              age: 10,
              adresse: values.adresse,
              fonction: values.fonction,
              numeroCNI: values.numeroCNI
            }
              setData(data)
              setStep(2)
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

              <View style={registersty.viewbothinput}>
                <View style={registersty.inputview}>
                  <Text style={registersty.description}>Numéro</Text>
                    <TextInput 
                        style={registersty.inputboth} 
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
                  <Text style={registersty.description}>Adresse</Text>
                    <TextInput 
                        style={registersty.inputboth} 
                        placeholder={'Dakar, Fass'}                    
                        autoCorrect={false}
                        onChangeText={handleChange('adresse')}
                        onBlur={handleBlur('adresse')}
                        value={values.adresse}
                        onSubmitEditing={Keyboard.dismiss}
                      />
                    {errors.adresse && touched.adresse ? ( <Text style={registersty.errormsg} >{errors.adresse}</Text> ) : null}
                </View>
              </View>

              <View style={registersty.viewbothinput}>
                <View style={registersty.inputview}>
                  <Text style={registersty.description}>Fonction</Text>
                    <TextInput 
                        style={registersty.inputboth} 
                        placeholder={'Responsable ...'}                    
                        autoCorrect={false}
                        onChangeText={handleChange('fonction')}
                        onBlur={handleBlur('fonction')}
                        value={values.fonction}
                        onSubmitEditing={Keyboard.dismiss}
                      />
                    {errors.fonction && touched.fonction ? ( <Text style={registersty.errormsg} >{errors.fonction}</Text> ) : null}
                </View>

                <View style={registersty.inputview}>
                  <Text style={registersty.description}>CNI</Text>
                    <TextInput 
                        style={registersty.inputboth} 
                        placeholder={'234-838'}                    
                        autoCorrect={false}
                        onChangeText={handleChange('numeroCNI')}
                        onBlur={handleBlur('numeroCNI')}
                        value={values.numeroCNI}
                        onSubmitEditing={Keyboard.dismiss}
                      />
                    {errors.numeroCNI && touched.numeroCNI ? ( <Text style={registersty.errormsg} >{errors.numeroCNI}</Text> ) : null}
                </View>
              </View>
                <TouchableOpacity style={registersty.connectButton} activeOpacity={0.2} onPress={handleSubmit} >
                  <Text style={registersty.buttonTextStyle}>Suivant</Text>
                  <MaterialIcons name='navigate-next' color={'white'} size={35} />
                </TouchableOpacity>
            </View>
          )}
          </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  </View>
);
}

const Step2 = ({setStep,data,setError}) =>{

  const dispatch = useDispatch()
  const { errorMessage , msgregister } = useSelector(userSelector);

  useEffect(()=>{
    if(errorMessage){
      setStep(1)
      setError(errorMessage)
    }
  },[errorMessage])

  const registerSchema = Yup.object().shape({

    password : Yup.string()
        .min(8,'Minimum 8 caractères')
        .required('Champs requis'),

    passwordConfirm : Yup.string()
        .oneOf([Yup.ref('password'), null], "Mot de passe différent")
        .required('Champs requis'),
});

return (
  <View style={registersty.container}>
    <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={registersty.scrollStyle}>
      <KeyboardAvoidingView behavior={'position'}>
       
          <Formik
            initialValues={{ 
              password : '',
              passwordConfirm: ''
            }}

            validationSchema = {registerSchema}

            onSubmit={(values, { setSubmitting }) => {

            const senddata = {...data , password : values.password, numero: parseInt(data.numero), numeroCNI : parseInt(data.numeroCNI)}
            
            console.log(senddata)
            dispatch(register(senddata))
            }}>
            
            {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (

            <View style={registersty.formulaire}>
              <View style={registersty.inputview}>
                <Text style={registersty.description}>Mot de passe</Text>
                  <TextInput 
                    secureTextEntry={true}
                    style={registersty.input} 
                    placeholder={'*******'}                    
                    autoCorrect={false}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    onSubmitEditing={Keyboard.dismiss}
                  />
                {errors.password && touched.password ? ( <Text style={registersty.errormsg} >{errors.password}</Text> ) : null}
              </View>

                    <View style={registersty.inputview}>
                      <Text style={registersty.description}>Confirmer le mot de passe</Text>
                        <TextInput 
                            secureTextEntry={true}
                            style={registersty.input} 
                            placeholder={'*******'}                    
                            autoCorrect={false}
                            onChangeText={handleChange('passwordConfirm')}
                            onBlur={handleBlur('passwordConfirm')}
                            value={values.passwordConfirm}
                            onSubmitEditing={Keyboard.dismiss}
                          />
                        {errors.passwordConfirm && touched.passwordConfirm ? ( <Text style={registersty.errormsg} >{errors.passwordConfirm}</Text> ) : null}
                    </View>

                <View style={registersty.buttonView}>
                  <TouchableOpacity style={registersty.connectButton} activeOpacity={0.2} onPress={handleSubmit} >
                    <Text style={registersty.buttonTextStyle}>S'inscrire</Text>
                    <FontAwesome name='sign-in' color={'black'} size={35} />
                  </TouchableOpacity>

                  <TouchableOpacity style={registersty.backButton} activeOpacity={0.2} onPress={()=> setStep(1)} >
                    <Text style={registersty.buttonTextStyle}>Revenir</Text>
                    <Ionicons name='ios-arrow-back-circle-sharp' color={'black'} size={35} />
                  </TouchableOpacity>
                </View>
                
            </View>
          )}
          </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  </View>
);
}

const PaymentStep = ({data}) =>{

  const paymentSchema = Yup.object().shape({

    cardName: Yup.string()
      .required('Champs requis'),

    cardNumber: Yup.number()
      .min(15,'Format de la carte invalide')
      .required('Champs requis'),

    expiry: Yup.number()
      .min(8,'Format de la carte invalide')
      .required('Champs requis'),
    
    cvv: Yup.string()
      .required('Champs requis'),

    streetaddr: Yup.string()
      .required('Champs requis'),
    
    city: Yup.string()
      .required('Champs requis'),
});

return (
  <View style={cardstyle.container}>
    <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={cardstyle.scrollStyle}>
      <KeyboardAvoidingView behavior={'position'}>
       
          <Formik
            initialValues={{ 
              cardName: '',
              cardNumber: '',
              expiry: '',
              cvv: '',
              streetaddr: '',
              city: ''
            }}

            validationSchema = {paymentSchema}

            onSubmit={(values, { setSubmitting }) => {
              
              const senddata = {
                cardName: values.cardName,
                cardNumber: values.cardNumber,
                expiry: values.expiry,
                cvv: values.cvv,
                streetaddr: values.streetaddr,
                city: values.city
              }
            
            console.log(senddata)
          
            }}>
            
            {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (

            <View style={cardstyle.formulaire}>
              
              <View style={cardstyle.inputview}>
                  <TextInput 
                    style={cardstyle.input} 
                    placeholder={'Nom de carte'}                    
                    autoCorrect={false}
                    onChangeText={handleChange('cardName')}
                    onBlur={handleBlur('cardName')}
                    value={values.cardName}
                    onSubmitEditing={Keyboard.dismiss}
                  />
                {errors.cardName && touched.cardName ? ( <Text style={cardstyle.errormsg} >{errors.cardName}</Text> ) : null}
              </View>

              <View style={cardstyle.viewbothinput}>
                <View style={cardstyle.inputview}>
                    <TextInput 
                      style={cardstyle.inputboth} 
                      placeholder={'Numero de carte'}                    
                      autoCorrect={false}
                      onChangeText={handleChange('cardNumber')}
                      onBlur={handleBlur('cardNumber')}
                      value={values.cardNumber}
                      onSubmitEditing={Keyboard.dismiss}
                    />
                  {errors.cardNumber && touched.cardNumber ? ( <Text style={cardstyle.errormsg} >{errors.cardNumber}</Text> ) : null}
                </View>

                <View style={cardstyle.inputview}>
                    <TextInput 
                      style={{...cardstyle.inputboth, width:90}} 
                      placeholder={'Expiration'}                    
                      autoCorrect={false}
                      onChangeText={handleChange('expiry')}
                      onBlur={handleBlur('expiry')}
                      value={values.expiry}
                      onSubmitEditing={Keyboard.dismiss}
                    />
                  {errors.expiry && touched.expiry ? ( <Text style={cardstyle.errormsg} >{errors.expiry}</Text> ) : null}
                </View>

                <View style={cardstyle.inputview}>
                    <TextInput 
                      style={{...cardstyle.inputboth, width:90}} 
                      placeholder={'CVV'}                    
                      autoCorrect={false}
                      onChangeText={handleChange('cvv')}
                      onBlur={handleBlur('cvv')}
                      value={values.cvv}
                      onSubmitEditing={Keyboard.dismiss}
                    />
                  {errors.cvv && touched.cvv ? ( <Text style={cardstyle.errormsg} >{errors.cvv}</Text> ) : null}
                </View>
              </View>

              <View style={cardstyle.viewbothinput}>
                <View style={cardstyle.inputview}>
                    <TextInput 
                      style={{...cardstyle.inputboth, width:170}} 
                      placeholder={'Adresse'}                    
                      autoCorrect={false}
                      onChangeText={handleChange('streetaddr')}
                      onBlur={handleBlur('streetaddr')}
                      value={values.streetaddr}
                      onSubmitEditing={Keyboard.dismiss}
                    />
                  {errors.streetaddr && touched.streetaddr ? ( <Text style={cardstyle.errormsg} >{errors.streetaddr}</Text> ) : null}
                </View>

                <View style={cardstyle.inputview}>
                    <TextInput 
                      style={{...cardstyle.inputboth, width:170}} 
                      placeholder={'Ville'}                    
                      autoCorrect={false}
                      onChangeText={handleChange('city')}
                      onBlur={handleBlur('city')}
                      value={values.city}
                      onSubmitEditing={Keyboard.dismiss}
                    />
                  {errors.city && touched.city ? ( <Text style={cardstyle.errormsg} >{errors.city}</Text> ) : null}
                </View>
              </View>

                <View style={cardstyle.buttonView}>
                  <TouchableOpacity style={cardstyle.connectButton} activeOpacity={0.2} onPress={handleSubmit} >
                    <Text style={cardstyle.buttonTextStyle}>Activer</Text>
                    <MaterialCommunityIcons name='cash-lock-open' color={'green'} size={35} />
                  </TouchableOpacity>

                  <TouchableOpacity style={cardstyle.backButton} activeOpacity={0.2} onPress={()=> setStep(1)} >
                    <Text style={cardstyle.buttonTextStyle}>Connexion</Text>
                    <Ionicons name='ios-arrow-back-circle-sharp' color={'black'} size={35} />
                  </TouchableOpacity>
                </View>
                
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
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState('')

    return(
      //<PaymentStep />
      step === 1 ? <Step1 setStep={setStep} data={data} setData={setData} error={error} /> : <Step2 setStep={setStep} data={data} setError={setError} />
    )
};

export default Register;