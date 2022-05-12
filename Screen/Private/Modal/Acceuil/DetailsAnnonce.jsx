import React,{ useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image} from 'react-native';
import { AntDesign, MaterialCommunityIcons, Fontisto, MaterialIcons,  } from 'react-native-vector-icons';

const ModalPoup = ({visible, children}) =>{
    return ( 
      <Modal transparent visible={visible}>
        <View style={styles.modalBackGround}>
          <View style={styles.modalContainer}>{children}</View>
        </View>
      </Modal>
      )
}

const DetailsAnnonce = ({data, visible, setVisible}) =>{
    
console.log(data)

    return(
        <View>
          <ModalPoup visible={visible}>
              <View style={{}}>
                <View style={styles.header}>
                  <Text style={{fontSize : 20, fontWeight :'500', color:'red'}}>{data.type == "EMPRUNT" ? "Voulez vous vraiment financer cette annonce ?" : "Voulez vous vraiment effectuer cet pret ?"}</Text>
                  <AntDesign onPress={() => setVisible(false) } style={{ width :30}} name="close" size={15}/>
                </View>

                <View style={{}}>
                  <View style={styles.poupBody}>
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
                    <TouchableOpacity style={styles.buttonGo}>
                      <Text style={{fontSize : 26, fontWeight :'600', color : 'white', position : 'absolute'}}>{data.type == "EMPRUNT" ? "FINANCER" : "PRET"}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
        </ModalPoup>
        </View>
    )
}

const styles = StyleSheet.create({

  modalBackGround : {
    flex : 1,
    backgroundColor : 'rgba(0,0,0,0.5)',
    justifyContent : 'flex-end',
    alignItems : 'center'
  },

  modalContainer : {
    width : '100%',
    backgroundColor : 'white',
    paddingHorizontal : 20,
    paddingVertical : 30,
    borderRadius :20, 
    elevation : 20
  },

  header : {
    width : '100%',
    height : 40,
    flexDirection : 'row',
    justifyContent : 'space-around'
  },

  buttonGo : {
    backgroundColor : '#448dee',
    justifyContent : 'center',
    alignItems : 'center',
    height : 40,
    
    borderRadius : 20
  }
});

export default DetailsAnnonce