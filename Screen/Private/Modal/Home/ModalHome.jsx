import React, {useEffect} from "react";
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from 'react-native-vector-icons';
import { annonceSelector ,topropose, clearState } from '../../../../reduxSlices/AnnonceSlice'
import { useDispatch, useSelector } from 'react-redux';
import { confirmModal } from '../../styles.home/confirmModal.style'
import SaveSignature from "./SaveSignature";

const ModalPoup = ({visible, children}) =>{
    return ( 
        <Modal animationType = {"slide"} transparent visible={visible}>
            <View style={confirmModal.modalBackGround}>
            <View style={confirmModal.modalContainer}>{children}</View>
            </View>
        </Modal>
    )
}

const ModalHome = ({visible, setVisible, id, navigation}) =>{

    const dispatch = useDispatch();
    const { errorsignMsg, hideModal, errorMessage } = useSelector(annonceSelector);

    const handleSendRequest = ()=>{
        dispatch(topropose({IDANNONCE : id}))
    }

    useEffect(()=>{
        hideModal && setVisible(false)
    },[hideModal])

    useEffect(()=>{
        if(errorsignMsg){
          setVisible(false)
            navigation.navigate('SaveSignature')
            console.log(errorsignMsg)
        }
    },[errorsignMsg])

    return(
        <View>
          <ModalPoup visible={visible}>
            <View>
            <Text style={{fontSize : 20, fontWeight :'500', color:'red',textAlign:'center'}}>{errorMessage && errorMessage}</Text>
                {errorsignMsg && <SaveSignature />}
                <View style={confirmModal.header}>
                  <Text style={{fontSize : 20, fontWeight :'500', color:'red'}}>Effectuer cette proposition ?</Text>
                  <AntDesign onPress={()=> setVisible(false)} color={'red'} name="close" size={20}/>
                </View>

                <View style={confirmModal.buttonSection}>
                  <TouchableOpacity style={confirmModal.button} onPress={() => handleSendRequest()}>
                    <Text style={confirmModal.buttonText}>Confirmer</Text>
                    <MaterialCommunityIcons color={'white'} size={22} name="page-next"/>
                  </TouchableOpacity>

                  <TouchableOpacity style={{...confirmModal.button, backgroundColor:'gray'}} onPress={() => {
                    setVisible(false)
                    dispatch(clearState())
                  } }>
                    <Text style={{...confirmModal.buttonText}}>Annuler</Text>
                    <MaterialCommunityIcons color={'white'} size={23} name="delete-circle-outline"/>
                  </TouchableOpacity>
                </View>
            </View>
        </ModalPoup>
        </View>
    )
}
export default ModalHome