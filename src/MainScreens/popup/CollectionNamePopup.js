import React, {useEffect, useState} from 'react';
import {
  View,
} from 'react-native';

import {Colors} from '../../assets/common/common';
import {Rtext} from '../../CommonComponents/common/Rtext';
import Modal from 'react-native-modal';
import {CusButtom} from '../../CommonComponents/common/CusButtom';
import {Ainput} from '../../CommonComponents/common/Ainput';
const CollectionNamePopUP = ({
  headerText = '',
  madalVisible,
  cancelButtonText = 'Cancel',
  continueButtonText = 'Ok',
  textInputFuctionType = '',
  desc = '',
  setName,
  setDesc,
  onpress,
  name,
  desc1,
}) => {
  return (
    <Modal isVisible={true} backdropColor={Colors.tranparentBlack}>
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
            width: '100%',
            backgroundColor: Colors.white,
            paddingHorizontal: 20,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Rtext
            style={{
              color: Colors.primaryColor,
              fontSize: 18,
              alignSelef: 'center',
              marginBottom: 10,
            }}>
            {headerText}
          </Rtext>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: Colors.primaryColor,
              marginTop: 5,
            }}
          />
          <View style={{width: '100%', marginTop: 10}}>
            <Rtext>{desc}</Rtext>
          </View>

          <Ainput
            placeholder={'Collection Name'}
            style={{textAlignVertical: 'top'}}
            multiline={true}
            value={name}
            onChangeText={setName}
          />
          <Ainput
            placeholder={'Description'}
            style={{height: 60, textAlignVertical: 'top'}}
            multiline={true}
            value={desc1}
            onChangeText={setDesc}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
            }}>
            <CusButtom
              onpress={() => {
                madalVisible(false);
              }}
              text={cancelButtonText}
              BTNstyle={{width: '45%', backgroundColor: Colors.primaryColor}}
            />
            <CusButtom
              onpress={onpress}
              text={continueButtonText}
              BTNstyle={{width: '45%', backgroundColor: Colors.primaryColor}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CollectionNamePopUP;
