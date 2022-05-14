import React from "react";
import { Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from 'react-native-vector-icons';
import { successModal } from '../../styles.home/successModal.style'
import Successimg from '../../../../assets/success-24.png'

const ModalPoup = ({visible, children}) =>{
    return ( 
      <Modal animationType = {"slide"} transparent visible={visible}>
        <View style={successModal.modalBackGround}>
          <View style={successModal.modalContainer}>{children}</View>
        </View>
      </Modal>
    )
}

const SuccessModal = ({visible, setVisible, navigation}) =>{

  const handleClose =()=>{
    setVisible(false)
    navigation.navigate('Home')
  }

    return(
        <View>
          <ModalPoup visible={visible}>
              <View>
                <View style={successModal.header}>
                  <Text style={{fontSize : 20, fontWeight :'500', color:'green'}}>SUCCESS</Text>
                  <AntDesign onPress={() => handleClose()} color={'green'} name="close" size={25}/>
                </View>
                <View style={successModal.imgView}>
                  <Image source={Successimg} style={successModal.img} />
                  <Text style={successModal.textInfo}>La tansaction a été éffectué vous n'aurez que 38H pour l'annuler.</Text>
                </View>
              </View>
        </ModalPoup>
        </View>
    )
}
export default SuccessModal