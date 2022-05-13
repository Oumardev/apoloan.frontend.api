import React from "react";
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Fontisto  } from 'react-native-vector-icons';
import { confirmModal } from '../../styles.home/confirmModal.style'

const ModalPoup = ({visible, children}) =>{
    return ( 
      <Modal transparent visible={visible}>
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

                <View>
                  <View style={confirmModal.poupBody}>
                    <View style={{flexDirection:'row', justifyContent:"space-around"}}>
                      <View>
                        <MaterialCommunityIcons name="percent" size={20} style={{margin:8}}/>
                        <Fontisto name="money-symbol" size={20} style={{margin:8}}/>
                        <MaterialCommunityIcons name="timer-outline" size={20} style={{margin:8}}/>
                      </View>
                      <View>
                        <Text style={{fontSize : 20, fontWeight :'500', color: '#08313A',margin:8}}>{data.pourcentage}</Text>
                        <Text style={{fontSize : 20, fontWeight :'500', color: '#08313A',margin:8}}>{data.montant} F</Text>
                        <Text style={{fontSize : 20, fontWeight :'500', color: '#08313A',margin:8}}>{data.duree}</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={confirmModal.buttonGo}>
                      <Text style={{fontSize : 26, fontWeight :'600', color : 'white', position : 'absolute'}}>{data.type == "EMPRUNT" ? "FINANCER" : "PRET"}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
        </ModalPoup>
        </View>
    )
}
export default ConfirmModal