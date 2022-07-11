import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../../assets/common/common';
import {Rtext} from '../../CommonComponents/common/Rtext';

import {Ainput} from '../../CommonComponents/common/Ainput';
// import { Ainput } from "../CommonComponents/common/Ainput";

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UpdateProfile = () => {
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 15}}>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <View>
          <View>
            <Rtext style={{paddingVertical: 20}}>Update Profile</Rtext>
          </View>

          <Ainput placeholder={'First Name'}></Ainput>
          <Ainput placeholder={'Last Name'}></Ainput>
          <Ainput placeholder={'Email Id'}></Ainput>
          <Ainput placeholder={'phone number'}></Ainput>
          <Ainput placeholder={'DOB'}></Ainput>
          <Ainput placeholder={'GST no'}></Ainput>
          <Ainput placeholder={'PAN no'}></Ainput>

          <CommonButton text={'Gst Document'} />
          <CommonButton text={'Pan Document'} />
          <CommonButton text={'Addhar Document'} />
          <CommonButton text={'Addhar proof'} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateProfile;

const CommonButton = ({onPress, text = ''}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          borderRadius: 10,
          backgroundColor: Colors.white,
          marginTop: 10,
          paddingVertical: 10,
          paddingHorizontal: 12,
          borderColor : Colors.silver , borderWidth : 1
        }}>
        <Image
          source={require('../../assets/icons/clock.png')}
          style={{height: 20, width: 20, resizemode: 'contain'}}
        />
        <Text style={{width: 200}}>{text}</Text>
        <Image
          source={require('../../assets/icons/grater.png')}
          style={{height: 20, width: 20, resizemode: 'contain'}}
        />
      </View>
    </TouchableOpacity>
  );
};
