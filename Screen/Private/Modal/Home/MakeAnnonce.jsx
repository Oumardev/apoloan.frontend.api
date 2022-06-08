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
import DropDownPicker from 'react-native-dropdown-picker';

const MakeAnnonce = ({route, navigation}) =>{

    const { addStatus } = useSelector(annonceSelector);
    const dispatch = useDispatch();

    const [openType, setOpenType] = useState(false);
    const [valueType, setValueType] = useState(null);
    const [type, setType] = useState([ {label: 'PRET', value: 'PRET'}, {label: 'EMPRUNT', value: 'EMPRUNT'}]);

    const [openDuree, setOpenDuree] = useState(false);
    const [valueDuree, setValueDuree] = useState(null);
    const [duree, setDuree] = useState([ 
      {label: '1 Mois', value: 1}, 
      {label: '2 Mois', value: 2}, 
      {label: '3 Mois', value: 3},
      {label: '4 Mois', value: 4},
      {label: '5 Mois', value: 5},
      {label: '6 Mois', value: 6},
      {label: '7 Mois', value: 7},
      {label: '8 Mois', value: 8},
      {label: '9 Mois', value: 9},
      {label: '10 Mois', value: 10},
      {label: '11 Mois', value: 11},
      {label: '12 Mois', value: 12}
    ]);

    const [openModa, setOpenModa] = useState(false);
    const [valueModa, setValueModa] = useState(null);
    const [modalite, setModa] = useState([ 
      {label: 'Chaque 1 mois', value: 1}, 
      {label: 'Chaque 2 mois', value: 2}, 
      {label: 'Chaque 3 mois', value: 3},
    ]);

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
                        console.log(data)
                        // make annonce
                      // dispatch(annoncecreate(data))
                    }}>
                    
                    {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (
                      <View style={makeAnnonceStyle.main}>
                        
                        <DropDownPicker open={openType} value={valueType}
                          zIndex={2000}
                          placeholder="Type d'annonce"
                          placeholderStyle={{
                            color: "grey",
                            fontWeight: "bold",
                            fontSize: 18
                          }}
                          labelStyle={{
                            fontWeight: "bold"
                          }}
                          style={{
                            backgroundColor: "white",
                            borderColor : 'grey',
                            borderWidth : 2,
                            marginBottom : 20
                          }}
                          containerStyle={{
                             borderColor : 'grey',
                          }}
                          items={type} setOpen={setOpenType} setValue={setValueType}
                          setItems={setType}
                        />

                        <DropDownPicker open={openDuree} value={valueDuree}
                          zIndex={1000}
                          placeholder="Durée"
                          placeholderStyle={{
                            color: "grey",
                            fontWeight: "bold",
                            fontSize: 18
                          }}
                          labelStyle={{
                            fontWeight: "bold"
                          }}
                          style={{
                            backgroundColor: "white",
                            borderColor : 'grey',
                            borderWidth : 2,
                            marginBottom : 20
                          }}
                          items={duree} setOpen={setOpenDuree} setValue={setValueDuree}
                          setItems={setDuree}
                        />

                        <DropDownPicker open={openModa} value={valueModa}
                          zIndex={500}
                          placeholder="Modalité de rembourssement"
                          placeholderStyle={{
                            color: "grey",
                            fontWeight: "bold",
                            fontSize: 18
                          }}
                          labelStyle={{
                            fontWeight: "bold"
                          }}
                          style={{
                            backgroundColor: "white",
                            borderColor : 'grey',
                            borderWidth : 2,
                            marginBottom : 20
                          }}
                          items={modalite} setOpen={setOpenModa} setValue={setValueModa}
                          setItems={setModa}
                        />

                        <View style={{display:'flex', flexDirection:'row', alignItems: 'center',width:'100%'}}>
                          <TextInput
                            placeholder="Montant"
                            style={{
                              height : 50,
                              borderColor : 'black',
                              borderWidth : 2,
                              borderRadius : 12,
                              borderRightWidth : 0,
                              fontSize : 20,
                              paddingLeft : 15,
                              fontWeight : '600',
                              width:'90%'
                            }}
                          />
                          <Text style={{fontSize : 20,fontWeight : '600'}}>FCFA</Text>
                        </View>
                      </View>
                    )}
              </Formik>
        </View>
    )
}
export default MakeAnnonce
