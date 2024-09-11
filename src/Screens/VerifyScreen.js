import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const VerifyScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <View>
                    <StatusBar
                        backgroundColor='#ffffff'
                        barStyle='dark-content'
                    />
                    <View style={styles.headerContainer}>
                        <View style={styles.main}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={require("../assets/Images/back.png")}
                                    style={styles.images} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: moderateScale(20) }}>
                                <Image source={require("../assets/Images/dots.png")}
                                    style={styles.images} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{
                    alignItems: 'center'
                }}>
                    <Image source={require("../assets/Images/verification.png")} />

                    <Text style={styles.text}>Verification Code</Text>
                </View>

                <View style={styles.boxConatiner}>
                    <TextInput style={styles.box} keyboardType='numeric' maxLength={1} />
                    <TextInput style={styles.box} keyboardType='numeric' maxLength={1} />
                    <TextInput style={styles.box} keyboardType='numeric' maxLength={1} />
                    <TextInput style={styles.box} keyboardType='numeric' maxLength={1} />
                </View>
                <View style={{ alignItems: 'center', marginTop: moderateScale(15) }}>
                    <Text style={{
                        fontSize: moderateScale(15),
                        color: 'black'
                    }}>Check The SMS</Text>
                    <Text style={{
                        fontSize: moderateScale(15),
                        color: 'black'
                    }}>message Verification Code</Text>
                </View>

                <View style={{ alignItems: 'center', marginTop: moderateScale(30) }}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate("BottomTabs")}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default VerifyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: moderateScale(5),
        justifyContent: 'space-between'
    },
    images: {
        width: moderateScale(40),
        height: moderateScale(40),
    },
    headerContainer: {
        marginTop: moderateScale(10)
    },
    text: {
        color: 'black',
        fontSize: moderateScale(15),
        marginTop: moderateScale(20)
    },
    boxConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: moderateScale(20),
        marginHorizontal: moderateScale(10)
    },
    box: {
        width: moderateScale(65),
        height: moderateScale(65),
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
        textAlign: 'center',
        fontSize: moderateScale(25)
    },
    button: {
        width: moderateScale(170),
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