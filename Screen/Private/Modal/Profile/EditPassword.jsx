import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import { editstyle } from '../../styles.profile/editProfile.style';
import { userSelector, userget, clearState, userpassword } from '../../../../reduxSlices/UserSlice';
import { useDispatch, useSelector } from "react-redux";
import { Formik } from 'formik';
import * as Yup from "yup";

export default function EditPassword() {
    
    const dispatch = useDispatch()
    const { pwdedited, errorMessage } = useSelector(userSelector);

    useEffect(()=>{
        if(pwdedited){ 
            dispatch(userget())
           // dispatch(clearState())
        }
    },[pwdedited])

    const editProfileSchema = Yup.object().shape({
        oldPassword : Yup.string() 
            .required('Champs requis!'),
  
        newPassword : Yup.string()
            .required('Champs requis'),

        confirmPwd : Yup.string()
            .oneOf([Yup.ref('newPassword'), null], "Mot de passe différent")
            .required('Champs requis')
    });

    return (
        <View style={editstyle.container}>
        {pwdedited && <Text style={editstyle.edited}>Mot de passe changé ! </Text>}
        {pwdedited == false && <Text style={editstyle.error}>{errorMessage}</Text>}
            <Formik
                initialValues={{ 
                    oldPassword: '', 
                    newPassword: ''
                }}
                  
                validationSchema = {editProfileSchema}
                    
                onSubmit={ async (values, { setSubmitting }) => {
                    const data = {
                        oldPassword: values.oldPassword,
                        newPassword: values.newPassword
                    }

                    // edit password
                    dispatch(userpassword(data))
                    dispatch(userget())
                }}>
                    
            {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (
            <View style={editstyle.information}>
                <View style={editstyle.information}>
                    <Text style={editstyle.title}>Information</Text>
                    <View style={editstyle.inputview}>
                        <Text style={editstyle.description}>Ancien mot de passe</Text>
                        <TextInput 
                            secureTextEntry={true}
                            style={editstyle.input} 
                            onChangeText={handleChange('oldPassword')}
                            onBlur={handleBlur('oldPassword')}
                            value={values.oldPassword}
                        />
                        {errors.oldPassword && touched.oldPassword ? ( <Text style={{color : 'red'}}>{errors.oldPassword}</Text> ) : null}
                    </View>

                    <View style={editstyle.inputview}>
                        <Text style={editstyle.description}>Nouveau mot de passe</Text>
                        <TextInput 
                            secureTextEntry={true}
                            style={editstyle.input} 
                            onChangeText={handleChange('newPassword')}
                            onBlur={handleBlur('newPassword')}
                            value={values.newPassword}
                        />
                        {errors.newPassword && touched.newPassword ? ( <Text style={{color : 'red'}}>{errors.newPassword}</Text> ) : null}
                    </View>

                    <View style={editstyle.inputview}>
                        <Text style={editstyle.description}>Confirmer nouveau mot de passe</Text>
                        <TextInput 
                            secureTextEntry={true}
                            style={editstyle.input} 
                            onChangeText={handleChange('confirmPwd')}
                            onBlur={handleBlur('confirmPwd')}
                            value={values.confirmPwd}
                        />
                        {errors.confirmPwd && touched.confirmPwd ? ( <Text style={{color : 'red'}}>{errors.confirmPwd}</Text> ) : null}
                    </View>
                </View>
                <TouchableOpacity style={editstyle.submit} onPress={()=> handleSubmit()}>
                    <Text style={{...editstyle.detailsTarget, color: 'white', marginRight: 10}}>Modifier</Text>
                    <MaterialIcons color={'white'} size={22} name={'save-alt'} />
                </TouchableOpacity>
            <View/>
        </View> )}
        </Formik>
    </View>
        
    );
}
