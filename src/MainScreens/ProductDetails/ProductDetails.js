import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {Colors} from '../../assets/common/common';
import {Rtext} from '../../CommonComponents/common/Rtext';

const ProductDetails = () => {
  let newArr = [
    {
      name: 'jay shah',
      arr: [1, 2, 3, 45, 5, 67, 435, 435, 43543, 534, 534, 534, 5345],
      read: true,
    },
    {
      name: 'Shovik',
      arr: [1, 2, 3, 45, 5, 67, 435, 435, 43543, 534, 534, 534, 5345],
      read: false,
    },
    {
      name: 'Koushik',
      arr: [1, 2, 3, 45, 5, 67, 435, 435, 43543, 534, 534, 534, 5345],
      read: true,
    },
    {
      name: 'Rimpa',
      arr: [1, 2, 3, 45, 5, 67, 435, 435, 43543, 534, 534, 534, 5345],
      read: false,
    },
    {
      name: 'shyamLandu',
      arr: [1, 2, 3, 45, 5, 67, 435, 435, 43543, 534, 534, 534, 5345],
      read: false,
    },
    {
      name: 'arpam',
      arr: [1, 2, 3, 45, 5, 67, 435, 435, 43543, 534, 534, 534, 5345],
      read: false,
    },
    {
      name: 'shubham',
      arr: [1, 2, 3, 45, 5, 67, 435, 435, 43543, 534, 534, 534, 5345],
      read: false,
    },
    {
      name: 'Shouri',
      arr: [1, 2, 3, 45, 5, 67, 435, 435, 43543, 534, 534, 534, 5345],
      read: true,
    },
    {
      name: 'Shamsher',
      arr: [1, 2, 3, 45, 5, 67, 435, 435, 43543, 534, 534, 534, 5345],
      read: true,
    },
  ];

  const renderItem1 = ({item}) => {
    return (
      <View>
        <Rtext style={{paddingHorizontal: 10}}>{item}</Rtext>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{paddingTop: 10, paddingHorizontal: 20}}>
        <Rtext>{item.name}</Rtext>
        <FlatList horizontal={true} data={item.arr} renderItem={renderItem1} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={newArr} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
