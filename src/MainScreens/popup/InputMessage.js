import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
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
import Modal from 'react-native-modal';
import {BlurView} from '@react-native-community/blur';
import {CusButtom} from '../../CommonComponents/common/CusButtom';
import {Ainput} from '../../CommonComponents/common/Ainput';
import { useDispatch } from 'react-redux';
import { postMsg } from '../../Store/message';
const {width} = Dimensions.get('window');
const InputMsg = ({setShowModal  ,showModal , userId }) => {

    const dispatch = useDispatch()
  return (
    <Modal isVisible={showModal} backdropColor={Colors.tranparentBlack}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <View
          style={{
            paddingVertical: 30,
            backgroundColor: Colors.lightSilver,
            width: '100%',
            backgroundColor: Colors.white,
            paddingHorizontal: 20,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <TouchableOpacity  onPress = {() => setShowModal(false)} style={{position: 'absolute', top: 10, right: 10}}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/cancel.png')}
            />
          </TouchableOpacity>
          <Rtext
            style={{
              marginTop: 10,
              color: Colors.mainblue,
              fontSize: 18,
              alignSelef: 'center',
              borderBottomWidth: 1,
              borderBottomColor: Colors.mainblue,
              marginBottom: 10,
            }}>
            {'Reach out to your Associate'}
          </Rtext>
          <Ainput
            multiline={true}
            style={{height: 100, textAlignVertical: 'top'}}
            placeholder={'Messages'}
          />
          <View
            style={{
              borderRadius: 13,
              marginTop: 15,
              backgroundColor: Colors.mainblue,
            }}>
            <CusButtom
              onpress={() => {
                dispatch(postMsg({
                    message :"test",
                    userName : "test2",
                    userid: userId,
                    reply :[{
                        replymessageid : "10",
                        message : "something",
                        userName : "koushik shah" ,
                        
                        },]

                }))
              }}
              BTNstyle={{
                width: width - 80,
                marginTop: 2,
                backgroundColor: Colors.mainblue,
                marginBottom: 2,
                marginHorizontal: 2,
              }}
              text={'Send Msg to Your Associate'}></CusButtom>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InputMsg;
const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: Colors.mainblue,
  },
});
