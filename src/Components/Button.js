import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Button = ({ onPress, text, width }) => {
    return (
        <View>
            <TouchableOpacity style={[styles.button, { width: width }]} onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f72a4b',
        padding: moderateScale(15),
        alignItems: 'center',
        borderRadius: moderateScale(30)
    },
    buttonText: {
        color: 'white',
        fontSize: moderateScale(18),
        fontWeight: 'bold'
    },
})