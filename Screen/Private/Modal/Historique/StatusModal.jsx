import React from "react";
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { statusModal } from '../../styles.home/statusModal.style'
import Successimg from '../../../../assets/success-24.png'
import Errorimg from '../../../../assets/error.png'

const ModalPoup = ({children}) =>{
    return ( 
        <View style={statusModal.modalBackGround}>
          <View style={statusModal.modalContainer}>{children}</View>
        </View>
    )
}

const StatusModal = ({errorHappened, errorMsg, transactStatus}) =>{

    return(
      <>
        { transactStatus == 'pending' && <ActivityIndicator size="large" color="#00ff00" />  }
        { transactStatus == 'success' && (
          <View>
            <ModalPoup>
                <View>
                  <View style={statusModal.header}>
                    <Text style={ statusModal.headerSuccess }>SUCCESS</Text>
                  </View>
                  <View style={statusModal.imgView}>
                    <Image source={Successimg} style={statusModal.img} />
                    <Text style={{...statusModal.textInfo, color:'green'}}>Votre rembourssement a été effectué.</Text>
                  </View>
                </View>
            </ModalPoup>
          </View>
        )}
        { transactStatus == 'rejected' && (
          <View>
            <ModalPoup>
                <View>
                  <View style={statusModal.header}>
                    <Text style={ errorHappened ? statusModal.headerError : statusModal.headerSuccess }>{errorHappened ? `ECHEC` : `SUCCESS`}</Text>
                  </View>
                  <View style={statusModal.imgView}>
                    <Image source={errorHappened ? Errorimg : Successimg } style={statusModal.img} />
                    <Text style={{...statusModal.textInfo, color:'white'}}>{ errorHappened ? errorMsg : `Votre rembourssement a été effectué.`}</Text>
                  </View>
                </View>
            </ModalPoup>
          </View>
        )}
      </>
    )
}
export default StatusModal