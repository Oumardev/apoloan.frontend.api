import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, Keyboard } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import { editstyle } from '../../styles.profile/editProfile.style';
import { userSelector, userget, clearState, refil } from '../../../../reduxSlices/UserSlice';
import { useDispatch, useSelector } from "react-redux";
import creditcard from '../../../../assets/creditcard.png'
import { Formik } from 'formik';
import * as Yup from "yup";

export default function Refil() {
    
    const dispatch = useDispatch()
    const { refiled, errorMessage } = useSelector(userSelector);

    useEffect(()=>{
        if(refiled){ 
            dispatch(userget())
           // dispatch(clearState())
        }
    },[refiled])

    const editProfileSchema = Yup.object().shape({
        montant : Yup.number() 
            .typeError('Format invalide')
            .required('Champs requis!'),
    });

    return (
        <View style={editstyle.container} onTouchStart={() => Keyboard.dismiss()}>
        {refiled && <Text style={editstyle.edited}>Votre compte a été rechargé</Text>}
        {refiled == false && <Text style={editstyle.error}>{errorMessage}</Text>}
        <Image style={editstyle.creditcard} source={creditcard} />
            <Formik
                initialValues={{ 
                    montant: '', 
                }}
                  
                validationSchema = {editProfileSchema}
                onSubmit={ async (values, { setSubmitting }) => {
                    const data = {
                        montant: parseInt(values.montant),
                    }

                    // edit password
                    dispatch(refil(data))
                    dispatch(userget())
                }}>
                    
            {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (
            <View style={editstyle.information}>
                <View style={editstyle.information}>
                    <View style={editstyle.inputview}>
                        <Text style={editstyle.description}>Montant du rechargement</Text>
                        <TextInput 
                            style={editstyle.input} 
                            keyboardType="numeric"
                            onChangeText={handleChange('montant')}
                            onBlur={handleBlur('montant')}
                            value={values.montant}
                        />
                    {errors.montant && touched.montant ? ( <Text style={{color : 'red'}}>{errors.montant}</Text> ) : null}
                    </View>
                </View>

                <TouchableOpacity style={editstyle.submit} onPress={()=> handleSubmit()}>
                    <Text style={{...editstyle.detailsTarget, color: 'white', marginRight: 10}}>Recharger</Text>
                    <MaterialIcons color={'white'} size={22} name={'save-alt'} />
                </TouchableOpacity>
            <View/>
        </View> )}
        </Formik>
    </View>
        
    );
}
