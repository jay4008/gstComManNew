import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {Colors, Fonts} from '../../assets/common/common';
import {Rtext} from '../../CommonComponents/common/Rtext';
import CollectionNamePopUP from '../popup/CollectionNamePopup';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteCollection,
  deleteCollectionPdf,
  setNewPdf,
} from '../../Store/pdfCreat';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useIsFocused} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const PdfDocumentBackPack = props => {
  const isFocused = useIsFocused();
  const pdfDocumentArr = useSelector(state => state.pdfCreat.pdfDocumentArr);
  const dispatch = useDispatch();
  const [namePicker, setnamePicker] = useState(false);
  const Data = [
    {
      name: moment().format('lll'),
      description: moment().format('ll') + '   (1 page)',
      image: require('../../assets/icons/normal.png'),
      price: '100000',
    },
  ];
  console.log('todos', pdfDocumentArr);
  const [name, setName] = useState('GST ' + moment().format('lll'));
  const [desc, setDesc] = useState('GST Desc' + moment().format('lll'));

  useEffect(() => {
    setName('GST ' + moment().format('lll'));
    setDesc('GST Desc' + moment().format('lll'));
  }, [isFocused]);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.flatlistMainView}
        onPress={() => {
          props.navigation.navigate('MyTest', {time: item?.time});
        }}>
        <CustomMenu index={index} />
        <View style={styles.rowWiseChild}>
          <Image
            source={{uri: item?.imagePath}}
            style={styles.flatListIconStyle}
          />
          <View>
            <Rtext>{item.pdfPath.split('/').pop()}</Rtext>
            <Rtext
              style={{
                width: width - 140,
                fontSize: 12,
                color: 'silver',
                marginTop: 5,
              }}>
              {item?.desc}
            </Rtext>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{height: height, width: width}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        data={[...pdfDocumentArr]}
        renderItem={renderItem}
        ListFooterComponent={() => <View style={{paddingBottom: 200}} />}
      />

      <TouchableOpacity
        onPress={() => {
          setnamePicker(true);
        }}
        style={{
          position: 'absolute',
          bottom: 120,
          right: 40,
          backgroundColor: Colors.mainblue,
          paddingVertical: 7,
          paddingHorizontal: 8,
          borderRadius: 20,
        }}>
        <Image
          style={{
            height: 40,
            width: 40,

            resizeMode: 'cover',
            tintColor: Colors.white,
          }}
          source={require('../../assets/icons/create.png')}
        />
      </TouchableOpacity>

      {namePicker && (
        <BlurView style={styles.absolute} blurType="light" blurAmount={10}>
          <CollectionNamePopUP
            name={name}
            desc1={desc}
            onpress={() => {
              let time = moment().format('YYYY-MM-DD HH:mm:ss');
              dispatch(
                setNewPdf({
                  name: name,
                  desc: desc,
                  ImageArr: [],
                  time: time,
                }),
              );

              setnamePicker(false);
              props.navigation.navigate('MyTest', {time: time});
            }}
            setName={setName}
            setDesc={setDesc}
            madalVisible={setnamePicker}
            headerText={'Please provide a collection Information'}
            desc={'Please enter  '}
          />
        </BlurView>
      )}
    </SafeAreaView>
  );
};

const CustomMenu = ({index = 0}) => {
  const dispatch = useDispatch();
  return (
    <View style={{position: 'absolute', top: 10, right: 0}}>
      <Menu>
        <MenuTrigger>
          <Image
            source={require('../../assets/icons/dot.png')}
            style={{
              height: 30,
              width: 30,
              resizeMode: 'contain',
              tintColor: Colors.primaryColor,
            }}></Image>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => alert(`Save`)}>
            <Text style={styles.menuOptionTxt}>Export to pdf</Text>
          </MenuOption>
          <MenuOption onSelect={() => dispatch(deleteCollectionPdf(index))}>
            <Text style={styles.menuOptionTxt}>Delete Collection</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};
const styles = StyleSheet.create({
  flatlistMainView: {
    paddingVertical: 15,
    backgroundColor: Colors.white,
    marginBottom: 5,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  rowWiseChild: {
    flexDirection: 'row',
  },
  flatListIconStyle: {
    height: 64,
    width: 64,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: Colors.mainblue,
    borderRadius: 4,
    marginHorizontal: 15,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  menuOptionTxt: {
    color: Colors.black,
    fontFamily: Fonts.latoRegular,
    fontSize: 14,
    paddingVertical: 15,
    marginLeft: 10,
  },
});

export default PdfDocumentBackPack;
