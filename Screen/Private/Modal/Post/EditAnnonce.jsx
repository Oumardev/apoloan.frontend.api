import React,{ useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Modal, TextInput, Keyboard } from 'react-native';
import { makeAnnonceStyle } from '../../styles.home/makeAnnonce.style'
import { annonceSelector, annonceedit } from "../../../../reduxSlices/AnnonceSlice";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from 'formik';
import * as Yup from "yup";
import DropDownPicker from 'react-native-dropdown-picker';

const EditAnnonce = ({route, navigation}) =>{
    const { IDANNONCE, DUREE, TYPE, MODALITEPAIEMENT, MONTANT } = route.params;

    const { errorMessage } = useSelector(annonceSelector);
    const dispatch = useDispatch();

    const [openDuree, setOpenDuree] = useState(false);
    const [valueDuree, setValueDuree] = useState(DUREE);
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
    const [valueModa, setValueModa] = useState(MODALITEPAIEMENT);
    const [modalite, setModa] = useState([ 
      {label: 'Chaque 1 mois', value: 1}, 
      {label: 'Chaque 2 mois', value: 2}, 
      {label: 'Chaque 3 mois', value: 3},
    ]);

    const [error, setError] = useState(null)

    const makeAnnonceSchema = Yup.object().shape({
          montant : Yup.number()
            .typeError('Format invalide')
            .required('Champs requis')
            .min(10000,'Le montant est trop petit minimum 10k')
            .max(5000000,'Le montant est trop grand maximum 5M')
    });
 
    return(
        <View style={makeAnnonceStyle.container} onTouchStart={() => Keyboard.dismiss()}>
          <Text style={makeAnnonceStyle.errormsg} >{errorMessage}</Text>
          {error && <Text style={makeAnnonceStyle.errormsg} >{error}</Text> }
            <Formik
                    initialValues={{ 
                        idAnnonce: IDANNONCE, 
                        duree : valueDuree,
                        modalitePaiement: valueModa, 
                        montant: String(MONTANT)
                    }}
                  
                    validationSchema = {makeAnnonceSchema}
                    
                    onSubmit={ async (values, { setSubmitting }) => {
                        const data = {
                            idAnnonce : IDANNONCE,
                            duree : valueDuree,
                            modalitePaiement: valueModa,
                            montant: parseInt(values.montant)
                        }

                        if(!data.idAnnonce || !data.duree || !data.modalitePaiement){
                          setError('Impossible de soumettre l\'annonce')
                        }else{
                        // edit annonce
                        setError(null)
                        dispatch(annonceedit(data))
                        }
                    }}>
                    
                    {({ errors ,handleChange, handleBlur, values, handleSubmit, touched }) => (
                      <View style={makeAnnonceStyle.main}>
                        <Text style={{fontSize: 23, fontWeight: '600',margin: 20,textAlign:'center'}}>{TYPE}</Text>
                        <Text>D'une durée de</Text>
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

                        <Text>A remboursser</Text>
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

                        <Text>D'un montant de</Text>
                        <View style={{display:'flex', flexDirection:'row', alignItems: 'center',width:'100%'}}>
                          <TextInput
                            placeholder="Montant"
                            onChangeText={handleChange('montant')}
                            onBlur={handleBlur('montant')}
                            value={values.montant}
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
                        {errors.montant && touched.montant ? ( <Text style={makeAnnonceStyle.errormsg} >{errors.montant}</Text> ) : null}
                        <TouchableOpacity style={makeAnnonceStyle.submit} onPress={handleSubmit}>
                          <Text style={makeAnnonceStyle.submitTxt}>Modifier</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                 
              </Formik>
        </View>
    )
}
export default EditAnnonce
