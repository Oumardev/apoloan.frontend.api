import React,{ useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Modal, TextInput, Keyboard } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { makeAnnonceStyle } from '../../styles.home/makeAnnonce.style'
import { annonceSelector, annoncecreate } from "../../../../reduxSlices/AnnonceSlice";
import { Picker } from '@react-native-picker/picker'
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../../../../customComponent/CheckBox";
import AddAnnonceStatus from './AddAnnonceStatus'
import { Formik } from 'formik';
import * as Yup from "yup";

const MakeAnnonce = ({route, navigation}) =>{
    
    const [ type, setType ] = useState("");
    const [ selectedDuree, setSelectedDuree ] = useState("3 MOIS");
    const [ checkPret, setCheckPret ] = useState(false);
    const [ checkEmprunt, setCheckEmprunt ] = useState(false);
    const [ visible, setVisible ] = useState(false)

    const { addStatus } = useSelector(annonceSelector);
    const dispatch = useDispatch();

    const makeAnnonceSchema = Yup.object().shape({
        pourcentage : Yup.number() // dont forget take percent to divided by 100 before send data to API
          .typeError('Format invalide')
          .min(10,'Veuillez choisir un pourcentage entre 10 et 80')
          .max(80,'Veuillez choisir un pourcentage entre 10 et 80')
          .required('Champs requis!'),
  
        montant : Yup.number()
            .typeError('Format invalide')
            .required('Champs requis')
    });
    
    return(
        <View style={makeAnnonceStyle.container} onTouchStart={() => Keyboard.dismiss()}>
            <Formik
                    initialValues={{ 
                        pourcentage: 0, 
                        montant : 0
                    }}
                  
                    validationSchema = {makeAnnonceSchema}
                    
                    onSubmit={ async (values, { setSubmitting }) => {
                        const data = {
                            type : type,
                            duree : selectedDuree,
                            pourcentage: (values.pourcentage/100),
                            montant: parseInt(values.montant)
                        }

                        // make annonce
                      dispatch(annoncecreate(data))
                    }}>
                    
                    {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (
                      <View style={makeAnnonceStyle.main}>
                        <AddAnnonceStatus visible={visible} setVisible={setVisible} status={addStatus} />
                        <View  style={makeAnnonceStyle.SectionCheckBox}>
                          <CheckBox isChecked={checkPret} setIsChecked={setCheckPret} text={'PRET'} setType={setType} checkPrev={checkEmprunt} setCheckPrev={setCheckEmprunt} />
                          <CheckBox isChecked={checkEmprunt} setIsChecked={setCheckEmprunt} text={'EMPRUNT'} setType={setType} checkPrev={checkPret} setCheckPrev={setCheckPret} />
                        </View>

                          <View style={makeAnnonceStyle.SectionStyle}>
                            <View style={makeAnnonceStyle.buttonStyle}>
                                <TextInput
                                  style={makeAnnonceStyle.inputStyle} 
                                  placeholder='Pourcentage'
                                  placeholderTextColor="#d0c8c8d6"
                                  keyboardType="numeric"
                                  autoCapitalize="sentences"
                                  autoCorrect={false}
                                  onChangeText={handleChange('pourcentage')}
                                  onBlur={handleBlur('pourcentage')}
                                  value={values.pourcentage}
                                  onSubmitEditing={Keyboard.dismiss}
                                />
                            </View>   
                            {errors.pourcentage && touched.pourcentage ? ( <Text style={makeAnnonceStyle.errormsg}>{errors.pourcentage}</Text> ) : null}
                          </View>

                          <View style={makeAnnonceStyle.SectionStyle}>
                            <View style={makeAnnonceStyle.buttonStyle}>
                                <TextInput
                                  style={makeAnnonceStyle.inputStyle} 
                                  placeholder='Montant'
                                  placeholderTextColor="#d0c8c8d6"
                                  keyboardType="numeric"
                                  autoCapitalize="sentences"

                                  autoCorrect={false}
                                  onChangeText={handleChange('montant')}
                                  onBlur={handleBlur('montant')}
                                  value={values.montant}
                                  onSubmitEditing={Keyboard.dismiss}
                                />
                            </View>   
                            {errors.montant && touched.montant ? ( <Text style={makeAnnonceStyle.errormsg}>{errors.montant}</Text> ) : null}
                          </View>
                        
                        <View style={makeAnnonceStyle.dureeContainer}>
                            <Text style={makeAnnonceStyle.duree}>Durée</Text>
                            <Picker itemStyle={{color:'black', fontWeight:'600',fontSize:17}} mode="dialog" selectedValue={selectedDuree} style={{ width: '80%', backgroundColor : 'whitesmoke'}}
                                onValueChange={(itemValue) => {
                                  Keyboard.dismiss()
                                  setSelectedDuree(itemValue)
                                }}
                            >
                                <Picker.Item style={makeAnnonceStyle.dureeText} label="1 MOIS" value="1 MOIS" />
                                <Picker.Item label="2 MOIS" value="2 MOIS" />
                                <Picker.Item label="3 MOIS" value="3 MOIS" />
                                <Picker.Item label="4 MOIS" value="4 MOIS" />
                                <Picker.Item label="5 MOIS" value="5 MOIS" />
                                <Picker.Item label="6 MOIS" value="6 MOIS" />
                                <Picker.Item label="7 MOIS" value="7 MOIS" />
                                <Picker.Item label="8 MOIS" value="8 MOIS" />
                            </Picker>
                        </View>
            
                        <TouchableOpacity style={makeAnnonceStyle.buttonAdd} onPress={() =>{ 
                          handleSubmit()
                          setVisible(true)
                        }}>
                            <Ionicons size={22} color={'white'} name="add"/>
                            <Text style={makeAnnonceStyle.addText}>AJOUTER</Text>
                        </TouchableOpacity>
                      </View>
                    )}
              </Formik>
        </View>
    )
}
export default MakeAnnonce
