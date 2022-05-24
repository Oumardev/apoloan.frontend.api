import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Cet écrant sera l'écrant ou l'utilisateur devra remboursé 
 * il affichera :
 * - LIST ANNONCE ['EMPRUNT'] avec le status 'en cour'
*/
export default function Refund({navigation}) {
  
    return (
        <View style={styles.container}>
            <Text>Page du code promo</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'center'
  }

});