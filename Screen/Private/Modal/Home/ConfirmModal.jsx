import React from "react";
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from 'react-native-vector-icons';
import { annoncedelete, clearState } from '../../../../reduxSlices/AnnonceSlice'
import { useDispatch } from "react-redux";
import { confirmModal } from '../../styles.home/confirmModal.style'

const ModalPoup = ({visible, children}) =>{
    return ( 
      <Modal animationType = {"slide"} transparent visible={visible}>
        <View style={confirmModal.modalBackGround}>
          <View style={confirmModal.modalContainer}>{children}</View>
        </View>
      </Modal>
      )
}

const ConfirmModal = ({visible, setVisible, idAnnonce}) =>{

    const dispatch = useDispatch();
    
    const handleSendRequest = ()=>{
      dispatch(annoncedelete({idAnnonce : idAnnonce}))
      setVisible(false)
    }

    return(
        <View>
          <ModalPoup visible={visible}>
              <View>
                <View style={confirmModal.header}>
                  <Text style={{fontSize : 20, fontWeight :'500', color:'red'}}>Voulez vous vraiment supprimer ce post ?</Text>
                  <AntDesign onPress={()=> setVisible(false)} color={'red'} name="close" size={20}/>
                </View>
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