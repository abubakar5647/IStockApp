import { StyleSheet, Text, View, ScrollView, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const AccountDetails = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
    };

    const handleName = () => {
        if (name.trim() === '') {
            setNameError('Name is required');
            return false
        } else {
            setNameError('');
            return true;
        }
    };

    const handleEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
            return false
        } else {
            setEmailError('');
            return true
        }
    };

    const handlePassword = () => {
        if (password.trim() === '') {
            setPasswordError('Password is required');
            return false;
        } else {
            setPasswordError('');
            return true
        }
    };

    const handleSubmit = () => {
        // const isName = handleName();
        // const isEmail = handleEmail();
        // const isPassword = handlePassword();

        // if (isName && isEmail && isPassword) {
        //     console.log("Form validation successfull");
        //     navigation.navigate("VerifyScreen")
        // } else {
        //     console.log('Form validation failed');
        // }
        navigation.navigate("VerifyScreen")
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.statusBar}>
                    <StatusBar
                        backgroundColor='#f72a4b'
                        barStyle='light-content'
                    />

                    <View style={styles.headerContainer}>
                        <View style={styles.main}>
                            <TouchableOpacity>
                                <Image source={require("../assets/Images/back.png")}
                                    style={styles.images} />
                            </TouchableOpacity>
                            <Text style={styles.text}>Account Details</Text>
                        </View>
                        <TouchableOpacity
                            style={{ marginRight: moderateScale(20) }}>
                            <Image source={require("../assets/Images/dots.png")}
                                style={styles.images} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputHeading}>Your Name</Text>
                        <View
                            style={{
                                borderBottomWidth: moderateScale(0.2),
                                borderColor: '#b4b4b4b4'
                            }}>
                            <TextInput
                                placeholder='Enter Your Name'
                                placeholderTextColor="black"
                                value={name}
                                onChangeText={(text) => setName(text)}
                                onBlur={handleName}
                            />
                        </View>
                        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputHeading}>Your Email</Text>
                        <View
                            style={{
                                borderBottomWidth: moderateScale(0.2),
                                borderColor: '#b4b4b4b4'
                            }}>
                            <TextInput
                                placeholder='Enter Your Email'
                                placeholderTextColor="black"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                onBlur={handleEmail}
                            />
                        </View>
                        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputHeading}>Create Password</Text>
                        <View
                            style={{
                                borderBottomWidth: moderateScale(0.2),
                                borderColor: '#b4b4b4b4'
                            }}>
                            <TextInput
                                placeholder='Enter Your Password'
                                placeholderTextColor="black"
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={true}
                                onBlur={handlePassword}
                            />
                        </View>
                        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    </View>

                    <View style={styles.checkBoxConntainer}>
                        <TouchableOpacity
                            style={styles.checkBox}
                            onPress={toggleCheckBox}>
                            {
                                isChecked &&
                                <Image source={require("../assets/Images/true.png")}
                                    style={{
                                        width: moderateScale(18), height: moderateScale(18),
                                        tintColor: '#f72a4b'
                                    }} />
                            }
                        </TouchableOpacity>
                        <Text style={{ color: '#353535', fontSize: 15, fontWeight: '500' }}>
                            I Agree term & Condition
                        </Text>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: moderateScale(30) }}>
                        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default AccountDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f7fc"
    },
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
    statusBar: {
        backgroundColor: '#f72a4b',
        height: moderateScale(270),
        borderBottomLeftRadius: moderateScale(30),
        borderBottomRightRadius: moderateScale(30)
    },
    text: {
        color: 'white',
        fontSize: moderateScale(18),
        fontWeight: '500'
    },
    infoContainer: {
        width: "85%",
        backgroundColor: 'white',
        margin: 'auto',
        borderRadius: moderateScale(4),
        height: '100%',
        bottom: moderateScale(180)
    },
    inputHeading: {
        color: '#b4b4b4',
        fontSize: 15,
        fontWeight: '500'
    },
    inputContainer: {
        padding: moderateScale(10)
    },
    button: {
        width: moderateScale(150),
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
    checkBoxConntainer: {
        flexDirection: 'row',
        marginLeft: moderateScale(20),
        gap: 10,
        marginTop: moderateScale(35)
    },
    checkBox: {
        width: moderateScale(20),
        height: moderateScale(20),
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ff604b',
    },
    errorText: {
        color: 'red',
        fontSize: moderateScale(14)
    }
})
