import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Fontisto, MaterialIcons } from 'react-native-vector-icons';
import profileimg from '../../../../assets/profileimg.jpg'
import { editstyle } from '../../styles.profile/editProfile.style';
import { userSelector, useredit, userget, clearState } from '../../../../reduxSlices/UserSlice';
import { useDispatch, useSelector } from "react-redux";
import { Formik } from 'formik';
import * as Yup from "yup";

export default function EditProfile({route,navigation}) {
    const { data } = route.params;
    const dispatch = useDispatch()

    const { edited } = useSelector(userSelector);

    useEffect(()=>{
        if(edited){ 
            dispatch(userget())
            dispatch(clearState())
        }
    },[edited])

    const editProfileSchema = Yup.object().shape({
        nom : Yup.string() 
            .required('Champs requis!'),
  
        prenom : Yup.string()
            .required('Champs requis'),

        profession : Yup.string()
            .required('Champs requis')
    });

    return (
        <View style={editstyle.container}>
        {edited && <Text style={editstyle.edited}>Utilisateur modifié ! </Text>}
        <View style={editstyle.head}>
            <Image style={editstyle.image} source={profileimg} />
            <View style={editstyle.edit}>
                <Text style={editstyle.fullname}>{data.user.prenom} {data.user.nom}</Text>
                <TouchableOpacity style={editstyle.edtitpwd}>
                    <Text style={editstyle.edtitpwdText}>Modifier le mot de passe</Text>
                    <Fontisto size={20} name="key"/>
                </TouchableOpacity>
            </View>
        </View> 
            <Formik
                initialValues={{ 
                    nom: data.user.nom, 
                    prenom : data.user.prenom,
                    profession : data.user.fonction
                }}
                  
                validationSchema = {editProfileSchema}
                    
                onSubmit={ async (values, { setSubmitting }) => {
                    const sended = {
                        nom: values.nom,
                        prenom: values.prenom,
                        age: data.user.age,
                        adresse: data.user.adresse,
                        fonction: values.profession
                    }

                    // edit profile
                    dispatch(useredit(sended))
                }}>
                    
            {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (
            <View style={editstyle.information}>
                <View style={editstyle.information}>
                    <Text style={editstyle.title}>Information</Text>
                    <View style={editstyle.inputview}>
                        <Text style={editstyle.description}>Nom</Text>
                        <TextInput 
                            style={editstyle.input} 
                            onChangeText={handleChange('nom')}
                            onBlur={handleBlur('nom')}
                            value={values.nom}
                        />
                        {errors.nom && touched.nom ? ( <Text style={{color : 'red'}}>{errors.nom}</Text> ) : null}
                    </View>

                    <View style={editstyle.inputview}>
                        <Text style={editstyle.description}>Prénom</Text>
                        <TextInput 
                            style={editstyle.input} 
                            onChangeText={handleChange('prenom')}
                            onBlur={handleBlur('prenom')}
                            value={values.prenom}
                        />
                        {errors.prenom && touched.prenom ? ( <Text style={{color : 'red'}}>{errors.prenom}</Text> ) : null}
                    </View>

                    <View style={editstyle.inputview}>
                        <Text style={editstyle.description}>Profession</Text>
                        <TextInput 
                            style={editstyle.input} 
                            onChangeText={handleChange('profession')}
                            onBlur={handleBlur('profession')}
                            value={values.profession}
                        />
                        {errors.profession && touched.profession ? ( <Text style={{color : 'red'}}>{errors.profession}</Text> ) : null}
                    </View>
                </View>
                <TouchableOpacity style={editstyle.submit} onPress={()=> handleSubmit()}>
                    <Text style={{...editstyle.detailsTarget, color: 'white', marginRight: 10}}>Enregistrer</Text>
                    <MaterialIcons color={'white'} size={22} name={'save-alt'} />
                </TouchableOpacity>
            <View/>
        </View> )}
        </Formik>
    </View>
        
    );
}
