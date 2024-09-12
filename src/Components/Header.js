import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Header = ({ text, height, navigation, enableGoBack }) => {
    return (
        <View style={[styles.statusBar, { height: height }]}>
            <StatusBar backgroundColor='#f72a4b' barStyle='light-content' />

            <View style={styles.headerContainer}>
                <View style={styles.main}>
                    {enableGoBack ? (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require("../assets/Images/back.png")} style={styles.images} />
                        </TouchableOpacity>
                    ) : (
                        <View style={{ width: moderateScale(40) }} />
                    )}
                    <Text style={styles.text}>{text}</Text>
                </View>
                <TouchableOpacity style={{ marginRight: moderateScale(20) }}>
                    <Image source={require("../assets/Images/dots.png")} style={styles.images} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: moderateScale(10)
    },
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: moderateScale(5),
        gap: moderateScale(20)
    },
    images: {
        width: moderateScale(40),
        height: moderateScale(40),
        tintColor: 'white'
    },
    text: {
        color: 'white',
        fontSize: moderateScale(18),
        fontWeight: '500'
    },
    statusBar: {
        backgroundColor: '#f72a4b',
        borderBottomLeftRadius: moderateScale(30),
        borderBottomRightRadius: moderateScale(30)
    },
})
