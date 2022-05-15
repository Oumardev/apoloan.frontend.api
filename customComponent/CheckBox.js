import React from "react";
import { View ,TouchableOpacity, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    container:{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        margin :7
    },

    text:{
        fontSize : 16,
        fontWeight : '500',
        margin : 2
    },

    checkbox:{
        height : 30,
        width: 30,
        borderColor : 'gray',
        borderWidth : 2,
        borderRadius : 14
    },

    checkboxfill:{
        height : 30,
        width: 30,
        borderColor : 'white',
        backgroundColor : 'orange',
        borderWidth : 2,
        borderRadius : 14
    }
})

const CheckBox = ({isChecked, setIsChecked, text, setType, checkPrev, setCheckPrev}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity 
                style={isChecked ? styles.checkboxfill : styles.checkbox} 
                onPress={() => {
                    !isChecked && setIsChecked(!isChecked)
                    checkPrev && setCheckPrev(false)
                    setType(text)
                }}
            />
        </View>
    )
}

export default CheckBox