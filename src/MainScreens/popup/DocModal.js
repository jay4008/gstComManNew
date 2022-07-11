import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {Colors, Fonts} from '../../assets/common/common';
import {CusButtom} from '../../CommonComponents/common/CusButtom';
import {Rtext} from '../../CommonComponents/common/Rtext';
import ImagePicker from 'react-native-image-crop-picker';

const DocSelection = ({
  isVisible = false,
  setIsVisible,
  onPressCamera,
  onPressGallery,
  onPressDoc,
  doc = true,
}) => {
  return (
    <Modal animationIn={'slideInUp'} isVisible={isVisible}>
      <View style={styles.container}>
        <View style={{...styles.selectionView , justifyContent : doc ?  "space-between": 'space-evenly' }}>
          <TouchableOpacity style={styles.BtnContainer} onPress={onPressCamera}>
            <Image
              style={styles.Icon}
              source={require('../../assets/icons/camera.png')}></Image>
            <Rtext style={styles.txt}>Camera</Rtext>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.BtnContainer}
            onPress={onPressGallery}>
            <Image
              style={styles.Icon}
              source={require('../../assets/icons/gallery.png')}></Image>
            <Rtext style={styles.txt}>Gallery</Rtext>
          </TouchableOpacity>

          {doc && (
            <TouchableOpacity style={styles.BtnContainer} onPress={onPressDoc}>
              <Image
                style={styles.Icon}
                source={require('../../assets/icons/doc.png')}></Image>
              <Rtext style={styles.txt}>Documents</Rtext>
            </TouchableOpacity>
          )}
        </View>
        <CusButtom
          onpress={() => {
            setIsVisible(false);
          }}
          BTNstyle={{backgroundColor: Colors.primaryColor}}
          textStyle={{fontSize: 16}}
          text={'Cancel'}
        />
      </View>
    </Modal>
  );
};
export default DocSelection;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  txt: {
    fontFamily: Fonts.latoBold,
  },
  selectionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between' ,
    marginVertical: 20,
  },
  Icon: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    tintColor: Colors.primaryColor,
  },
  BtnContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelBtn: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 50,
    backgroundColor: Colors.primaryColor,
  },
  cancelTxt: {
    color: Colors.white,
    fontFamily: Fonts.latoBlack,
  },
});
