import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Cet écrant affichera les informations
 * sur le profile de l'utilisateur en cour 
*/
export default function Home({navigation}) {
  
    return (
        <View style={styles.container}>
            <Text>Profile page</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'center'
  }

});