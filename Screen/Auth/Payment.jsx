import React, { useState, useEffect } from 'react';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { activationStyle } from './AuthStyle';

const buttonTextStyle = {
    color: 'red'
};

const Payment = ({navigation}) => {

    return(
        <View style={activationStyle.container}>
            <ProgressSteps label="Paiement" activeStep={1}>
                <ProgressStep label="Inscription">
                    <View style={{ alignItems: 'center' }}></View>
                </ProgressStep>
                <ProgressStep label="Activation" previousBtnDisabled={true} nextBtnTextStyle={buttonTextStyle} previousBtnText={''} finishBtnText={'Déconnection'} >
                    <View style={{ alignItems: 'center' }}>
                        <Text style={activationStyle.titledesc}>Pour commencer a utuliser votre compte vous devez faire un premier rechargement d'au moins 2000F.L'activation de votre compte entrainera un prélèvement de cette somme sur votre compte bancaire</Text>
                        
                        <View style={activationStyle.field}>
                            <Text style={activationStyle.fielddesc}>Nom sur la carte</Text>
                            <TextInput 
                                placeholder='Kevin De Bruyne'
                                style={activationStyle.input}
                            />
                        </View>

                        <View style={activationStyle.field}>
                            <Text style={activationStyle.fielddesc}>Numéro de carte</Text>
                            <TextInput 
                                placeholder='**** **** **** ****'
                                style={activationStyle.input}
                            />
                        </View>

                        <View style={activationStyle.expsec}>
                            <View style={activationStyle.bfield}>
                                <Text style={activationStyle.fielddesc}>Date d'expiration</Text>
                                <TextInput 
                                    placeholder='MM/YY'
                                    style={activationStyle.input}
                                />
                            </View>

                            <View style={activationStyle.bfield}>
                                <Text style={activationStyle.fielddesc}>Code de sécurité</Text>
                                <TextInput 
                                    placeholder='CVC'
                                    style={activationStyle.input}
                                />
                            </View>
                        </View>
                        
                        <TouchableOpacity style={activationStyle.activatebtn}>
                             <Text style={activationStyle.activatetxt}>Activer votre compte</Text>
                        </TouchableOpacity>

                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    )
};

export default Payment;