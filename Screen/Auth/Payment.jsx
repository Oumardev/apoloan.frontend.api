import React, { useState, useEffect } from 'react';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { activationStyle } from './AuthStyle';
import { Formik } from 'formik';
import * as Yup from "yup";

const buttonTextStyle = {
    color: 'red'
};

const Payment = ({navigation}) => {

    const paymentSchema = Yup.object().shape({
        cardname: Yup.string()
            .min(1, 'Trop court!')
            .max(50, 'Trop long!')
            .required('Champs requis'),
        
        cardnumber: Yup.string()
            .min(16, 'Format invalide')
            .required('Champs requis'),
    
        expdate : Yup.string()
            .min(1,'Trop court!')
            .max(4,'Maximul 4 caractères')
            .required('Champs requis!'),
    
        cvc : Yup.string()
            .min(1,'Trop court!')
            .max(3,'Maximum 3 caractères')
            .required('Champs requis'),
    });

    return(
        <View style={activationStyle.container}>
            <ProgressSteps label="Paiement" activeStep={1}>
                <ProgressStep label="Inscription">
                    <View style={{ alignItems: 'center' }}></View>
                </ProgressStep>
                <ProgressStep label="Activation" previousBtnDisabled={true} nextBtnTextStyle={buttonTextStyle} previousBtnText={''} finishBtnText={'Déconnection'} >
                    <View style={{ alignItems: 'center' }}>
                        <Text style={activationStyle.titledesc}>Pour commencer a utuliser votre compte vous devez faire un premier rechargement d'au moins 2000F.L'activation de votre compte entrainera un prélèvement de cette somme sur votre compte bancaire</Text>
                        
                        <Formik
                            initialValues={{ 
                                cardname: '', 
                                cardnumber: '', 
                                expdate: '', 
                                cvc : ''
                            }}
                            
                            enableReinitialize={true}
                            validationSchema = {paymentSchema}
                            
                            onSubmit={(values, { setSubmitting }) => {
                                const data = {
                                    cardname: values.cardname,
                                    cardnumber: values.cardnumber,
                                    expdate: values.expdate,
                                    cvc: values.cvc
                                }
                                            
                                console.log(data)
                                // dispatch(register(data))
                            }}>
                            
                            {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (
                            <>
                            <View style={activationStyle.field}>
                                <Text style={activationStyle.fielddesc}>Nom sur la carte</Text>
                                <TextInput 
                                    placeholder='Kevin De Bruyne'
                                    style={activationStyle.input}
                                    autoCorrect={false}
                                    onChangeText={handleChange('cardname')}
                                    onBlur={handleBlur('cardname')}
                                    value={values.cardname}
                                />
                                {errors.cardname && touched.cardname ? ( <Text style={activationStyle.errormsg} >{errors.cardname}</Text> ) : null}
                            </View>

                            <View style={activationStyle.field}>
                                <Text style={activationStyle.fielddesc}>Numéro de carte</Text>
                                <TextInput 
                                    placeholder='**** **** **** ****'
                                    maxLength={16}
                                    style={activationStyle.input}
                                    autoCorrect={false}
                                    onChangeText={handleChange('cardnumber')}
                                    onBlur={handleBlur('cardnumber')}
                                    value={values.cardnumber}
                                />
                                {errors.cardnumber && touched.cardnumber ? ( <Text style={activationStyle.errormsg} >{errors.cardnumber}</Text> ) : null}
                            </View>

                            <View style={activationStyle.expsec}>
                                <View style={activationStyle.bfield}>
                                    <Text style={activationStyle.fielddesc}>Date d'expiration</Text>
                                    <TextInput 
                                        placeholder='MM/YY'
                                        maxLength={4}
                                        style={activationStyle.input}
                                        autoCorrect={false}
                                        onChangeText={handleChange('expdate')}
                                        onBlur={handleBlur('expdate')}
                                        value={values.expdate}
                                    />
                                    {errors.expdate && touched.expdate ? ( <Text style={activationStyle.errormsg} >{errors.expdate}</Text> ) : null}
                                </View>

                                <View style={activationStyle.bfield}>
                                    <Text style={activationStyle.fielddesc}>Code de sécurité</Text>
                                    <TextInput 
                                        placeholder='CVC'
                                        maxLength={3}
                                        style={activationStyle.input}
                                        autoCorrect={false}
                                        onChangeText={handleChange('cvc')}
                                        onBlur={handleBlur('cvc')}
                                        value={values.cvc}
                                    />
                                    {errors.cvc && touched.cvc ? ( <Text style={activationStyle.errormsg} >{errors.cvc}</Text> ) : null}
                                </View>
                            </View>
                            
                            <TouchableOpacity style={activationStyle.activatebtn} onPress={handleSubmit}>
                                <Text style={activationStyle.activatetxt}>Activer votre compte</Text>
                            </TouchableOpacity>
                        </>
                        )}
                        </Formik>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    )
};

export default Payment;