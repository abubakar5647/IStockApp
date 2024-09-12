import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { addCategory, removeAllCategory, removeCategory, selectOne } from '../Redux/Slice';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';

const YourItems = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const categories = useSelector(state => state.category);

  const addItems = (item) => {
    dispatch(addCategory(item));
  };
  const removeItems = (index) => {
    dispatch(removeCategory(index));
  };
  const removeAll = () => {
    dispatch(removeAllCategory());
  };

  const getTotalSum = () => {
    let total = 0;
    categories.forEach(item => {
      total += parseInt(item.newPrice);
    });
    return total;
  };

  const singleSelect = (index) => {
    if (isSelected) {
      setIsSelected(false);
    }
    const updatedCategories = categories.map((item, indx) => {
      if (index === indx) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    dispatch(selectOne(updatedCategories));
  };

  const selectAll = () => {
    setIsSelected(!isSelected);
    const updatedCategories = categories.map((item) => {
      return { ...item, checked: isSelected };
    });
    dispatch(selectOne(updatedCategories));
  };



  const renderItem = ({ item, index }) => {
    return (
      <View>
        <View style={styles.itemContainer}>
          <View style={styles.imgBoxContainer}>
            <TouchableOpacity style={styles.checkBox} onPress={() => singleSelect(index)}>
              {item.checked && (
                <Image
                  source={require("../assets/Images/true.png")}
                  style={{
                    width: moderateScale(18),
                    height: moderateScale(18),
                    tintColor: '#f72a4b'
                  }}
                />
              )}
            </TouchableOpacity>

            <View style={styles.imgBox}>
              <Image source={item.image} style={styles.img} />
            </View>
            <View>
              <Text style={styles.heading}>{item.heading}</Text>
              <Text style={styles.oldPrice}>${item.oldPrice}</Text>
              <Text style={styles.newPrice}>${item.newPrice}</Text>
            </View>
          </View>

          <View>
            <View style={styles.counterContainer}>
              <TouchableOpacity onPress={() => removeItems(index)}>
                <Text style={{ color: 'black' }}>---</Text>
              </TouchableOpacity>
              <View style={styles.counterBox}>
                <Text>
                  {categories.filter(cat => cat.id === item.id).length}
                </Text>
              </View>
              <TouchableOpacity onPress={() => addItems(item)}>
                <Text style={{ color: 'black' }}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => { removeItems(index) }}
              style={styles.delete}>
              <Text style={{ fontSize: 15, color: 'white' }}>Delete Item</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header text='Mega Sales' height={moderateScale(100)} navigation={navigation} />

      <View style={styles.cartContainer}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <TouchableOpacity
            onPress={selectAll}
            style={styles.button}>
            <Text style={{ fontSize: 15, color: 'white' }}>Select All</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5
            }}>
            <Text style={{ color: '#353535', fontSize: 25, fontWeight: '500' }}>
              Total:</Text>
            <Text style={styles.newPrice}>${getTotalSum()}</Text>
          </View>
          <TouchableOpacity
            onPress={() => { removeAll() }}
            style={styles.button}>
            <Text style={{ fontSize: 15, color: 'white' }}>Delete All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginBottom: moderateScale(40) }}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  );
};

export default YourItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd"
  },
  cartContainer: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(20),
    justifyContent: 'space-between',
    marginTop: moderateScale(25),
    paddingBottom: 10
  },
  checkBox: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ff604b',
  },
  img: {
    width: moderateScale(90),
    height: moderateScale(90)
  },
  imgBox: {
    width: moderateScale(100),
    height: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5
  },
  imgBoxContainer: {
    flexDirection: 'row',
    gap: moderateScale(10),
    alignItems: 'center'
  },
  heading: {
    fontSize: moderateScale(16),
    color: 'black',
    fontWeight: '600'
  },
  newPrice: {
    fontSize: moderateScale(20),
    color: "#f72a4b",
    fontWeight: 'bold'
  },
  oldPrice: {
    fontSize: moderateScale(17),
    color: "#c8cdcb",
    fontWeight: 'bold'
  },
  counterContainer: {
    flexDirection: 'row',
    gap: moderateScale(10),
    alignItems: 'center',
    marginBottom: moderateScale(5)
  },
  counterBox: {
    width: moderateScale(30),
    height: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: moderateScale(4)
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: moderateScale(20),
    marginVertical: moderateScale(10)
  },
  button: {
    backgroundColor: '#f72a4b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: moderateScale(5)
  },
});
