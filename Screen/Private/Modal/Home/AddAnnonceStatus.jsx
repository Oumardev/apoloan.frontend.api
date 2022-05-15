import React from "react";
import { Text, View, Modal, Image, ActivityIndicator } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { addAnnonceStatus } from '../../styles.home/addAnnonceStatus.style'
import Successimg from '../../../../assets/success-24.png'
import Errorimg from '../../../../assets/error.png'

const ModalPoup = ({visible, children}) =>{
    return ( 
      <Modal animationType = {"slide"} transparent visible={visible}>
        <View style={addAnnonceStatus.modalBackGround}>
          <View style={addAnnonceStatus.modalContainer}>{children}</View>
        </View>
      </Modal>
      )
}

const AddAnnonceStatus = ({visible, setVisible, status}) =>{

    return(
      <>
        { status == 'pending'  && <ActivityIndicator size="large" color="#00ff00" /> }
        { status == 'success' && (
          <View>
            <ModalPoup visible={visible}>
                <View>
                  <View style={addAnnonceStatus.header}>
                    <Text style={{fontSize : 20, fontWeight :'500', color:'black'}}>Annonce crée</Text>
                    <AntDesign onPress={() =>setVisible(false) } color={'black'} name="close" size={25}/>
                  </View>
                  <View style={addAnnonceStatus.imgView}>
                      <Image source={Successimg} style={addAnnonceStatus.img} />
                      <Text style={addAnnonceStatus.textInfo}>NB: Votre solde sera crédité quand un contributeur sera intérssé par votre annonce elle sera supprimé automatiquement au bout d'une semaine</Text>
                  </View>
                </View>
            </ModalPoup>
          </View>
        )}
        { status == 'rejected' && (
          <View>
            <ModalPoup visible={visible}>
                <View>
                  <View style={addAnnonceStatus.header}>
                    <Text style={{fontSize : 20, fontWeight :'500', color:'red'}}>Erreur</Text>
                    <AntDesign onPress={() =>setVisible(false) } color={'red'} name="close" size={25}/>
                  </View>
                  <View style={addAnnonceStatus.imgView}>
                      <Image source={Errorimg} style={addAnnonceStatus.img} />
                      <Text style={{...addAnnonceStatus.textInfo, color:'red'}}>Une erreur est arrivé l'or de la création de l'annonce veuillez ressayez</Text>
                  </View>
                </View>
            </ModalPoup>
          </View>
        )}
      </>
    )
}
export default AddAnnonceStatus