import React, {useState , useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from 'react-native-vector-icons';
import DetailsAnnonce from "./Modal/Acceuil/DetailsAnnonce"
import { demandestyles } from './styles.home/demande.style';
import { contributeurstyles } from './styles.home/contributeur.style';

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
            "id": 3,
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
            "id": 4,
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
            "id": 5,
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
        <View style={contributeurstyles.container}>

            <View style={contributeurstyles.view}>
              <Text style={contributeurstyles.title}>Contributeurs de la semaine</Text>
                <View style={contributeurstyles.scroll}>
                  <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                      annonce.success.map(item =>(
                        item.type == "PRET" ?
                        <React.Fragment key={item.id}>
                          <DetailsAnnonce data={data} visible={visible} setVisible={setVisible}/>
                          <TouchableOpacity 
                            onPress={()=>{ 
                              setVisible(true)
                              setData(item)
                            }} 
                            key={item.id}
                            style={contributeurstyles.item}
                          >
                            <FontAwesome5 name={'user-tie'} size={35} color={'white'}/>
                            <Text style={{...contributeurstyles.itemName, color:'#98FB98'}}>{item.User.prenom}</Text>
                            <Text style={{...contributeurstyles.itemName, color:'#98FB98'}}>{item.User.nom}</Text>
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

            <View style={demandestyles.view}>
              <Text style={demandestyles.title}>Les dernières demandes</Text>
                <View style={demandestyles.scroll}>
                  <ScrollView  horizontal={false} showsHorizontalScrollIndicator={false}>
                    {
                      annonce.success.map(item =>(
                        item.type == "EMPRUNT" &&
                          <React.Fragment key={item.id}>
                            <DetailsAnnonce data={data} visible={visible} setVisible={setVisible}/>
                              <TouchableOpacity 
                                onPress={()=>{ 
                                setVisible(true)
                                setData(item)
                                }} 
                                style={demandestyles.item}
                                key={item.id}
                              >
                              <View style={demandestyles.leftInfo} >
                                <MaterialCommunityIcons name={'hand-extended'} size={35} color={'black'}/>
                                <View style={demandestyles.info}>
                                  <Text style={demandestyles.itemName}>Demande de 150K</Text>
                                  <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400'}}>Avec pourcentage de 0.38</Text>
                                  <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'400'}}>pour une durée de 3 MOIS</Text>
                                </View>
                              </View>

                              <View style={demandestyles.date}>
                                <Text style={{...demandestyles.itemName, color:'gray',fontWeight:'300',fontSize:15}}>12/11/2000</Text>
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