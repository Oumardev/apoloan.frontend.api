import React, {useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from 'react-native-vector-icons';
import DetailsAnnonce from "./Modal/Acceuil/DetailsAnnonce"

/**
 * Cet écrant sera l'écrant d'acceuil 
 * il affichera :
 * - LIST ANNONCE ['EMPRUNT', 'PRET']
*/
export default function Home({navigation}) {

  const [visible , setVisible] = useState(false)
  const [data , setData] = useState(false)

  const annonce = {
    "success": [
        {
            "id": 2,
            "type": "EMPRUNT",
            "duree": "5MOIS",
            "pourcentage": 0.38,
            "montant": 1580000,
            "isBooster": false,
            "isVisible": true,
            "codeUser": 11,
            "createdAt": "2022-05-10T15:10:08.000Z",
            "updatedAt": "2022-05-10T15:10:08.000Z",
            "User": {
                "id": 11,
                "nom": "GATES",
                "prenom": "Henry",
                "numero": 712571212,
                "age": 22,
                "sexe": "M",
                "adresse": "UKR, Kiev",
                "fonction": "Combatant",
                "numeroCNI": 288392,
                "password": "$2b$10$i7aEQLKFC7JC0rsGfG68henbj7PgKwO0ZTxRqFHfgOjEe3qIttGp2",
                "idCompte": 11,
                "createdAt": "2022-05-10T14:55:44.000Z",
                "updatedAt": "2022-05-10T14:55:44.000Z"
            }
        },
        {
            "id": 1,
            "type": "EMPRUNT",
            "duree": "3MOIS",
            "pourcentage": 0.3,
            "montant": 200000,
            "isBooster": false,
            "isVisible": true,
            "codeUser": 13,
            "createdAt": "2022-05-10T15:03:49.000Z",
            "updatedAt": "2022-05-10T15:03:49.000Z",
            "User": {
                "id": 13,
                "nom": "DIAZ",
                "prenom": "Michelle",
                "numero": 784563425,
                "age": 28,
                "sexe": "F",
                "adresse": "ANG, United",
                "fonction": "Directrice",
                "numeroCNI": 653838,
                "password": "$2b$10$C0jmCTUveEFIbMaf3R.X/.LSULW30pVj5CBlYFCGGdAsiN8wLOSEC",
                "idCompte": 13,
                "createdAt": "2022-05-10T14:57:18.000Z",
                "updatedAt": "2022-05-10T14:57:18.000Z"
            }
        },
        {
            "id": 1,
            "type": "EMPRUNT",
            "duree": "3MOIS",
            "pourcentage": 0.3,
            "montant": 200000,
            "isBooster": false,
            "isVisible": true,
            "codeUser": 13,
            "createdAt": "2022-05-10T15:03:49.000Z",
            "updatedAt": "2022-05-10T15:03:49.000Z",
            "User": {
                "id": 13,
                "nom": "DIAZ",
                "prenom": "Michelle",
                "numero": 784563425,
                "age": 28,
                "sexe": "F",
                "adresse": "ANG, United",
                "fonction": "Directrice",
                "numeroCNI": 653838,
                "password": "$2b$10$C0jmCTUveEFIbMaf3R.X/.LSULW30pVj5CBlYFCGGdAsiN8wLOSEC",
                "idCompte": 13,
                "createdAt": "2022-05-10T14:57:18.000Z",
                "updatedAt": "2022-05-10T14:57:18.000Z"
            }
        },
        {
            "id": 1,
            "type": "EMPRUNT",
            "duree": "3MOIS",
            "pourcentage": 0.3,
            "montant": 200000,
            "isBooster": false,
            "isVisible": true,
            "codeUser": 13,
            "createdAt": "2022-05-10T15:03:49.000Z",
            "updatedAt": "2022-05-10T15:03:49.000Z",
            "User": {
                "id": 13,
                "nom": "DIAZ",
                "prenom": "Michelle",
                "numero": 784563425,
                "age": 28,
                "sexe": "F",
                "adresse": "ANG, United",
                "fonction": "Directrice",
                "numeroCNI": 653838,
                "password": "$2b$10$C0jmCTUveEFIbMaf3R.X/.LSULW30pVj5CBlYFCGGdAsiN8wLOSEC",
                "idCompte": 13,
                "createdAt": "2022-05-10T14:57:18.000Z",
                "updatedAt": "2022-05-10T14:57:18.000Z"
            }
        },
        {
            "id": 1,
            "type": "EMPRUNT",
            "duree": "3MOIS",
            "pourcentage": 0.3,
            "montant": 200000,
            "isBooster": false,
            "isVisible": true,
            "codeUser": 13,
            "createdAt": "2022-05-10T15:03:49.000Z",
            "updatedAt": "2022-05-10T15:03:49.000Z",
            "User": {
                "id": 13,
                "nom": "DIAZ",
                "prenom": "Michelle",
                "numero": 784563425,
                "age": 28,
                "sexe": "F",
                "adresse": "ANG, United",
                "fonction": "Directrice",
                "numeroCNI": 653838,
                "password": "$2b$10$C0jmCTUveEFIbMaf3R.X/.LSULW30pVj5CBlYFCGGdAsiN8wLOSEC",
                "idCompte": 13,
                "createdAt": "2022-05-10T14:57:18.000Z",
                "updatedAt": "2022-05-10T14:57:18.000Z"
            }
        }
    ]
}

    return (
        <View style={styles.container}>

            <View style={styles.viewContrib}>
              <Text style={styles.titleContrib}>Contributeurs de la semaine</Text>
                <View style={styles.scrollContrib}>
                  <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                      annonce.success.map(item =>(
                        item.type == "PRET" ?
                        <React.Fragment>
                          <DetailsAnnonce data={data} visible={visible} setVisible={setVisible}/>
                          <TouchableOpacity 
                            onPress={()=>{ 
                              setVisible(true)
                              setData(item)
                            }} 

                            style={styles.itemContrib}
                          >
                            <FontAwesome5 name={'user-tie'} size={'35'} color={'white'}/>
                            <Text style={{...styles.itemName, color:'#98FB98'}}>{item.User.prenom}</Text>
                            <Text style={{...styles.itemName, color:'#98FB98'}}>{item.User.nom}</Text>
                          </TouchableOpacity>
                        </React.Fragment>
                        :
                        <React.Fragment>
                          <Text></Text>
                        </React.Fragment>
                      ))
                    }
                  </ScrollView>
              </View>
            </View>

            <View style={styles.viewDemand}>
              <Text style={styles.titleDemand}>Les dernières demandes</Text>
                <View style={styles.scrollDemand}>
                  <ScrollView  horizontal={false} showsHorizontalScrollIndicator={false}>
                    {
                      annonce.success.map(item =>(
                        item.type == "EMPRUNT" &&
                          <React.Fragment>
                            <DetailsAnnonce data={data} visible={visible} setVisible={setVisible}/>
                              <TouchableOpacity 
                                onPress={()=>{ 
                                setVisible(true)
                                setData(item)
                                }} 
                                style={styles.itemDemand}
                              >
                              <View style={styles.leftInfo}>
                                <MaterialCommunityIcons name={'hand-extended'} size={'35'} color={'orange'}/>
                                <Text style={styles.itemName}>{item.User.prenom}</Text>
                                <Text style={styles.itemName}>{item.User.nom}</Text>
                              </View>

                              <View style={styles.info}>
                                <Text style={styles.itemName}>Demande</Text>
                                <Text style={styles.itemName}>Pourcentage</Text>
                                <Text style={styles.itemName}>Echéance</Text>
                              </View>

                              <View style={styles.info}>
                                <Text style={{...styles.itemName, color:'black',fontWeight:'900'}}>{item.montant}</Text>
                                <Text style={{...styles.itemName, color:'black',fontWeight:'900'}}>{item.pourcentage}</Text>
                                <Text style={{...styles.itemName, color:'black',fontWeight:'900'}}>{item.duree}</Text>
                              </View>
                            </TouchableOpacity>
                          </React.Fragment>
                      ))
                    }
                  </ScrollView>
              </View>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  viewContrib:{
    margin: 10

  },

  titleContrib:{
    fontSize: '30px',
    fontWeight: '700'
  },

  scrollContrib: {
    flexDirection: 'row'
  },

  itemContrib:{
    margin: 5,
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor : 'black',
    padding: 10,
    borderRadius : '18px',
    width : 80
  },

  itemName:{
    fontSize: '18px',
    fontWeight : '600',
    color : 'white',
    paddingTop:3
  },

  viewDemand:{
    margin: 10,
    maxHeight: 440
  },

  titleDemand:{
    fontSize: '30px',
    fontWeight: '700'
  },

  scrollDemand: {
    flexDirection: 'column',
  },

  itemDemand:{
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection : 'row',
    margin: 5,
    padding: 10,
    borderRadius : '18px',
    backgroundColor : '#A9A9A9',
  },

  leftInfo:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  info:{
    display: 'flex',
    justifyContent: 'center',
  }

});