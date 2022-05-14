import React from "react";
import { Text, View, Modal, Image } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { failedModal } from '../../styles.home/failedModal.style'
import Errorimg from '../../../../assets/error.png'

const ModalPoup = ({visible, children}) =>{
    return ( 
      <Modal animationType = {"slide"} transparent visible={visible}>
        <View style={failedModal.modalBackGround}>
          <View style={failedModal.modalContainer}>{children}</View>
        </View>
      </Modal>
    )
}

const FailedModal = ({visible, setVisible,navigation}) =>{

    const handleClose =()=>{
        setVisible(false)
        navigation.navigate('Home')
    }

    return(
        <View>
          <ModalPoup visible={visible}>
              <View>
                <View style={failedModal.header}>
                  <Text style={{fontSize : 20, fontWeight :'500', color:'red'}}>ECHEC</Text>
                  <AntDesign onPress={() => handleClose() } color={'red'} name="close" size={25}/>
                </View>
                <View style={failedModal.imgView}>
                  <Image source={Errorimg} style={failedModal.img} />
                  <Text style={failedModal.textInfo}>La tansaction s'est mal passé veuillez ressayer.</Text>
                </View>
              </View>
        </ModalPoup>
        </View>
    )
}
export default FailedModal