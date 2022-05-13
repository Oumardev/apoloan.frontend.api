import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Fontisto  } from 'react-native-vector-icons';
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

const ConfirmModal = ({data, visible, setVisible}) =>{

    return(
        <View>
          <ModalPoup visible={visible}>
              <View>
                <View style={confirmModal.header}>
                  <Text style={{fontSize : 20, fontWeight :'500', color:'red'}}>{data.type == "EMPRUNT" ? "Voulez vous vraiment financer cette annonce ?" : "Voulez vous vraiment effectuer cet pret ?"}</Text>
                  <AntDesign onPress={() => setVisible(false) } color={'red'} name="close" size={25}/>
                </View>
                
                <Text>Après confirmation vous n'aurez que 38h pour annuler l'emprunt</Text>
                
                <View style={confirmModal.buttonSection}>
                  <TouchableOpacity style={confirmModal.button}>
                    <Text style={confirmModal.buttonText}>Confirmer</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={confirmModal.button}>
                    <Text style={confirmModal.buttonText}>Annuler</Text>
                  </TouchableOpacity>
                </View>
              </View>
        </ModalPoup>
        </View>
    )
}
export default ConfirmModal