import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, removeCategory } from '../Redux/Slice';

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

    const Categories = [
        {
            id: '1',
            image: require("../assets/Images/foot.png"),
            heading: "Shoes",
            oldPrice: "79",
            newPrice: '45'
        },
        {
            id: '2',
            image: require("../assets/Images/shirt.png"),
            heading: "Clothing",
            oldPrice: "59",
            newPrice: '32'
        },
        {
            id: '3',
            image: require("../assets/Images/glasses.png"),
            heading: "Accessories",
            oldPrice: "19",
            newPrice: '9'
        },
        {
            id: '4',
            image: require("../assets/Images/cuting.png"),
            heading: "Eat",
            oldPrice: "45",
            newPrice: '36'
        },
        {
            id: '5',
            image: require("../assets/Images/handwash.png"),
            heading: "Cosmetics",
            oldPrice: "49",
            newPrice: '25'
        },
        {
            id: '6',
            image: require("../assets/Images/mobile.png"),
            heading: "Electronics",
            oldPrice: "46",
            newPrice: '15'
        },
    ];

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
            <View style={styles.statusBar}>
                <StatusBar backgroundColor='#f72a4b' barStyle='light-content' />

                <View style={styles.headerContainer}>
                    <View style={styles.main}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require("../assets/Images/back.png")} style={styles.images} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Categories</Text>
                    </View>
                    <TouchableOpacity style={{ marginRight: moderateScale(20) }}>
                        <Image source={require("../assets/Images/dots.png")} style={styles.images} />
                    </TouchableOpacity>
                </View>
            </View>

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
        gap: moderateScale(20),
        marginTop: moderateScale(10)
    },
    images: {
        width: moderateScale(40),
        height: moderateScale(40),
        tintColor: 'white'
    },
    statusBar: {
        backgroundColor: '#f72a4b',
        height: moderateScale(100),
        borderBottomLeftRadius: moderateScale(30),
        borderBottomRightRadius: moderateScale(30)
    },
    text: {
        color: 'white',
        fontSize: moderateScale(18),
        fontWeight: '500'
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
