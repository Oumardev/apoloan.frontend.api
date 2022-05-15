import React from "react";
import { Text, View, Image } from 'react-native';
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
        { transactStatus == 'pending' && <Text style={{fontSize: 20, color: 'white', fontWeight: '700'}}>Chargement...</Text> }
        { transactStatus == 'success' && (
          <View>
            <ModalPoup>
                <View>
                  <View style={statusModal.header}>
                    <Text style={ errorHappened ? statusModal.headerError : statusModal.headerSuccess }>{errorHappened ? `ECHEC` : `SUCCESS`}</Text>
                  </View>
                  <View style={statusModal.imgView}>
                    <Image source={errorHappened ? Errorimg : Successimg } style={statusModal.img} />
                    <Text style={statusModal.textInfo}>{ errorHappened ? errorMsg : `La tansaction a été éffectué vous n'aurez que 38H pour l'annuler.`}</Text>
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
                    <Text style={statusModal.textInfo}>{ errorHappened ? errorMsg : `La tansaction a été éffectué vous n'aurez que 38H pour l'annuler.`}</Text>
                  </View>
                </View>
            </ModalPoup>
          </View>
        )}
      </>
    )
}
export default StatusModal