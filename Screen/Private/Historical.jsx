import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Cet écrant sera l'écrant d'historique
 * Il répectorie La liste des emprunts et prets du user en cour ...
*/
export default function Historical({navigation}) {
  
    return (
        <View style={styles.container}>
            <Text>Historial page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'center'
  }

});