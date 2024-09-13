import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, removeCategory } from '../Redux/Slice';
import Header from '../Components/Header';
import { Categories } from '../Components/data/CategoriesData';

const CategoriesScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category);

    const addItems = (item) => {
        dispatch(addCategory(item));
    }
    const removeItems = (index) => {
        dispatch(removeCategory(index));
    };

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.imgBoxContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("YourItems")}
                    style={styles.imgBox}>
                    <Image source={item.image} style={styles.categories} />
                    <Text
                        style={{
                            color: 'black',
                            fontSize: moderateScale(15)
                        }}>{item.heading}</Text>

                    <View style={styles.counterContainer}>
                        <TouchableOpacity
                            onPress={() => removeItems(index)}
                            style={styles.counterBox}>
                            <Text style={{ color: 'white' }}>---</Text>
                        </TouchableOpacity>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 18
                            }}>
                            {categories.filter(cat => cat.id === item.id).length}
                        </Text>
                        <TouchableOpacity onPress={() => addItems(item)} style={styles.counterBox}>
                            <Text style={{ color: 'white' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Header
                text='Categories'
                height={moderateScale(100)}
                navigation={navigation}
                enableGoBack={true} />
            <FlatList
                data={Categories}
                numColumns={2}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fdfdfd"
    },
    categories: {
        width: moderateScale(100),
        height: moderateScale(100)
    },
    imgBoxContainer: {
        marginHorizontal: moderateScale(5)
    },
    imgBox: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: moderateScale(17),
        width: "100%",
        borderRadius: moderateScale(10),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        margin: moderateScale(10),
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: moderateScale(20),
        marginTop: moderateScale(5)
    },
    counterBox: {
        width: moderateScale(30),
        height: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f72a4b',
        borderRadius: moderateScale(10)
    }
});
