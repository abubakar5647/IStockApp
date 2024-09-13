import { StyleSheet, Text, View, ScrollView, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import Header from '../Components/Header'
import Button from '../Components/Button'

const AccountDetails = () => {
    const navigation = useNavigation()
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', isChecked: false, errors: {}
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
            errors: { ...prev.errors, [field]: '' } 
        }));
    };

    const validateForm = () => {
        const { name, email, password } = formData;
        let errors = {};
        if (name.trim() === '') errors.name = 'Name is required';
        if (email.trim() === '') {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = 'Invalid email';
        }
        if (password.trim() === '') errors.password = 'Password is required';

        setFormData(prev => ({ ...prev, errors }));
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Form validation successful");
            navigation.navigate("VerifyScreen");
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <Header
                    text='Account Details'
                    height={moderateScale(270)}
                    enableGoBack={false}
                />

                <View style={styles.infoContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputHeading}>Your Name</Text>
                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder='Enter Your Name'
                                placeholderTextColor="black"
                                value={formData.name}
                                onChangeText={(text) => handleChange('name', text)}
                                onBlur={() => handleChange('name', formData.name)}
                            />
                        </View>
                        {formData.errors.name && <Text style={styles.errorText}>{formData.errors.name}</Text>}
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputHeading}>Your Email</Text>
                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder='Enter Your Email'
                                placeholderTextColor="black"
                                value={formData.email}
                                onChangeText={(text) => handleChange('email', text)}
                                onBlur={() => handleChange('email', formData.email)}
                            />
                        </View>
                        {formData.errors.email && <Text style={styles.errorText}>{formData.errors.email}</Text>}
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputHeading}>Create Password</Text>
                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder='Enter Your Password'
                                placeholderTextColor="black"
                                value={formData.password}
                                onChangeText={(text) => handleChange('password', text)}
                                secureTextEntry={true}
                                onBlur={() => handleChange('password', formData.password)}
                            />
                        </View>
                        {formData.errors.password && <Text style={styles.errorText}>{formData.errors.password}</Text>}
                    </View>

                    <View style={styles.checkBoxContainer}>
                        <TouchableOpacity style={styles.checkBox} onPress={() => handleChange('isChecked', !formData.isChecked)}>
                            {formData.isChecked && <Image source={require("../assets/Images/true.png")} style={styles.checkImage} />}
                        </TouchableOpacity>
                        <Text style={styles.checkboxText}>I Agree to Terms & Conditions</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button onPress={handleSubmit} text='Next' width={moderateScale(150)} />
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
    inputBox: {
        borderBottomWidth: moderateScale(0.2),
        borderColor: '#b4b4b4b4'
    },
    checkBoxContainer: {
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
    checkImage: {
        width: moderateScale(18),
        height: moderateScale(18),
        tintColor: '#f72a4b'
    },
    checkboxText: {
        color: '#353535',
        fontSize: 15,
        fontWeight: '500'
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: moderateScale(30)
    },
    errorText: {
        color: 'red',
        fontSize: moderateScale(14)
    }
})
