import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert, TouchableHighlight } from 'react-native';
import { Colors } from '../../assets/common/common';
import { Rtext } from '../../CommonComponents/common/Rtext';
import { setData } from '../utility/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { userLogoutSuccess } from '../../Store/auth';
import DocSelection from '../popup/DocModal';
import { useDispatch } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import { useState } from 'react';
const Order = ({ navigation }) => {
  const dispatch = useDispatch();
  const [docPicker, setDocPicker] = useState(false);

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View>

          <View style={{ justifyContent: 'center', alignSelf: 'center' }}>

            <Image
              source={require('../../assets/icons/prof.png')}
              style={{
                height: 100,
                width: 100,
                tintColor: Colors.primaryColor,
                resizeMode: 'contain',
                marginTop: 20,
              }}
            />
            <TouchableOpacity onPress={() => {

              setDocPicker(true)
            }} style={{ position: 'absolute', top: 70, right: 5, height: 30, width: 30 }}>
              <Image
                source={require('../../assets/icons/cameraa.png')}
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                  marginTop: 20,

                  tintColor: Colors.mainblue,
                  borderRadius: 10
                }}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>
              Koushik Sham
            </Text>
            <Text style={{ textAlign: 'center', color: 'silver', marginBottom: 10 }}>
              koushik.sham@mail.com
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UpdateProfile');
              }}>
              <View
                style={{
                  width: '40%',
                  backgroundColor: Colors.primaryColor,
                  borderRadius: 10,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  shadowColor: 'red',
                  shadowOpacity: 0.8,
                  shadowRadius: 10,
                  shadowOffset: { height: 10, width: 10 },
                  elevation: 17,
                  marginBottom: 40,
                }}>
                <Rtext style={{ textAlign: 'center', color: 'white' }}>
                  Edit Profile
                </Rtext>
              </View>
            </TouchableOpacity>
          </View>
          <CommonButton text={'My Order'}
            onPress={() =>
              navigation.navigate('MyOrder')
            }
          />
          <CommonButton text={'Address'}
            onPress={() =>
              navigation.navigate('Address')
            }
          />
          <CommonButton text={'Payment Method'} />
          <CommonButton onPress={() => navigation.navigate('Purchase')} text={'Purchase History'} />
          <CommonButton text={'Setting'} />
          <CommonButton onPress={()=>navigation.navigate('Product')} text={'Share'} />
          <CommonButton onPress={() => dispatch(userLogoutSuccess())} text={'Log Out'} />
        </View>
      </KeyboardAwareScrollView>

      {docPicker && (
        <DocSelection
          onPressDoc={() => uploadDoc()}
          onPressCamera={() => openCamera()}
          onPressGallery={() => openGallery()}
          setIsVisible={setDocPicker}
          isVisible={true}
          doc={false}
        />
      )}

    </SafeAreaView>
  );
};

export default Order;

const CommonButton = ({ onPress, text = '' }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          borderRadius: 10,
          backgroundColor: Colors.primaryColor,
          marginTop: 10,
          paddingVertical: 10,
          paddingHorizontal: 12,
          shadowColor: Colors.primaryColor,
          shadowOpacity: 0.8,
          shadowRadius: 10,
          shadowOffset: { height: 10, width: 10 },
          elevation: 17,
        }}>
        <Image
          source={require('../../assets/icons/clock.png')}
          style={{ height: 20, width: 20, resizeMode: 'contain', tintColor: Colors.white }}
        />
        <Rtext style={{ width: 200, color: Colors.white }}>{text}</Rtext>
        <Image
          source={require('../../assets/icons/grater.png')}
          style={{ height: 20, width: 20, resizeMode: 'contain', tintColor: Colors.white }}
        />
      </View>
    </TouchableOpacity>
  );
};
