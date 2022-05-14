import React,{ useEffect } from "react";
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from 'react-native-vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { confirmModal } from '../../styles.home/confirmModal.style'
import { annonceSelector, annoncedebit } from '../../../../reduxSlices/AnnonceSlice'
import FailedModal from "./FailedModal";
import SuccessModal from './SuccessModal';

const ModalPoup = ({visible, children}) =>{
    return ( 
      <Modal animationType = {"slide"} transparent visible={visible}>
        <View style={confirmModal.modalBackGround}>
          <View style={confirmModal.modalContainer}>{children}</View>
        </View>
      </Modal>
      )
}

const ConfirmModal = ({data, visible, setVisible, navigation}) =>{
    const id = data.id
    const dispatch = useDispatch()
    const { isFetching , errorHappened, errorMessage } = useSelector(annonceSelector);

    useEffect(()=>{
      if(errorHappened){ 
        console.log(errorMessage)
        setVisible(false)
      }
    },[errorHappened])

    const handleSendRequest = ()=>{
      const data = { IDANNONCE : id }
      dispatch(annoncedebit(data))
    }

    return(
        <View>
          <FailedModal visible={errorHappened} setVisible={setVisible} errorMsg={errorMessage} navigation={navigation} />
          <ModalPoup visible={visible}>
              <View>
                <View style={confirmModal.header}>
                  <Text style={{fontSize : 20, fontWeight :'500', color:'red'}}>{data.type == "EMPRUNT" ? "Voulez vous vraiment financer cette annonce ?" : "Voulez vous vraiment effectuer cet pret ?"}</Text>
                  <AntDesign onPress={() => setVisible(false) } color={'red'} name="close" size={25}/>
                </View>
                <Text style={confirmModal.textInfo}>NB: Après confirmation vous n'aurez que 38H pour l'annuler</Text>
                <View style={confirmModal.buttonSection}>
                  <TouchableOpacity style={confirmModal.button} onPress={() => handleSendRequest()}>
                    <Text style={confirmModal.buttonText}>Confirmer</Text>
                    <MaterialCommunityIcons color={'white'} size={22} name="page-next"/>
                  </TouchableOpacity>

                  <TouchableOpacity style={{...confirmModal.button, backgroundColor:'gray'}} onPress={() => setVisible(false) }>
                    <Text style={{...confirmModal.buttonText}}>Annuler</Text>
                    <MaterialCommunityIcons color={'white'} size={23} name="delete-circle-outline"/>
                  </TouchableOpacity>
                </View>
              </View>
        </ModalPoup>
        </View>
    )
}
export default ConfirmModal