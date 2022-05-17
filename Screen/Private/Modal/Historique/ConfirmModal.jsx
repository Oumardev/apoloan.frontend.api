import React from "react";
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from 'react-native-vector-icons';
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

const ConfirmModal = ({data, visible, setVisible, setResponse}) =>{

    const handleSendRequest = ()=>{
      setResponse(true)
      setVisible(false)
    }

    return(
        <View>
          <ModalPoup visible={visible}>
              <View>
                <View style={confirmModal.header}>
                  <Text style={{fontSize : 20, fontWeight :'500', color:'red'}}>Vous etes sur le point de remboursser votre pret</Text>
                  <AntDesign onPress={() => {
                    setVisible(false)
                    setResponse(false)
                  } } color={'red'} name="close" size={25}/>
                </View>
                <Text style={confirmModal.textInfo}>Cette action est irréverssible</Text>
                <View style={confirmModal.buttonSection}>
                  <TouchableOpacity style={confirmModal.button} onPress={() => handleSendRequest()}>
                    <Text style={confirmModal.buttonText}>Remboursser</Text>
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