import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Alert, TextInput } from 'react-native';
import { SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Colors, Fonts } from '../../assets/common/common';
import { Rtext } from '../../CommonComponents/common/Rtext';
import moment from 'moment';
import { Ainput } from '../../CommonComponents/common/Ainput';
import { BlurView } from '@react-native-community/blur';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CusButtom } from '../../CommonComponents/common/CusButtom';
import DatePickerr from '../popup/DatePicker';
import DocSelection from '../popup/DocModal';
import ImagePicker from 'react-native-image-crop-picker';
const { width, height } = Dimensions.get('window');
import DocumentPicker from 'react-native-document-picker';
import { setToastMsg } from '../../Store/popup';
import { useDispatch } from 'react-redux';
const UpdateProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pan, setPan] = useState('');
  const [gst, setGst] = useState('');
  const [DateModal, setDateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [docPicker, setDocPicker] = useState(false);
  const dispatch = useDispatch();

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setDocPicker(false);
      console.log(image);
    });
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setDocPicker(false);
      console.log(image);
    });
  };


  const uploadDoc = async () => {


    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      setDocPicker(false);
    } catch (err) {

      console.log("err", err);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          elevation: 3,
          backgroundColor: '#D3D3D3',
          paddingHorizontal: 15,
        }}
        imageStyle={{
          height: height / 2,
          width: width,
          backgroundColor: Colors.primaryColor,
        }}>
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View>
            <View>
              <Rtext
                style={{
                  paddingVertical: 20,
                  fontFamily: Fonts.latoBold,
                  color: Colors.white,
                  fontSize: 18,
                }}>
                Update Profile
              </Rtext>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Ainput

                onChangeText={(val) => console.log(val)}


                containerStyle={{ width: '48%' }}
                placeholder={'First Name'}
                value={firstName}
                onChangeText={(newFirstname) => setFirstName(newFirstname)}

              />



              <Ainput
                containerStyle={{ width: '48%' }}
                placeholder={'Last Name'}
                value={lastName}
                onChangeText={(newLastname) => setlastName(newLastname)}
              />

            </View>

            <CommonButton
              onPress={() => {
                setDateModal(true);
                setSelectedDate(moment().toDate());
              }}
              image={false}
              text={
                selectedDate === null
                  ? 'DOB'
                  : moment(selectedDate, 'YYYY-MM-DD').format('DD MMM YYYY')
              }
            />
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Ainput
                containerStyle={{ width: '48%' }}
                placeholder={'Email Id'}
                value={email}
                onChangeText={newValue => {
                  setEmail(newValue);
                  // handleValidEmail(newValue);
                  //console.log('value', newValue)
                  //Alert.alert('email')
                }}
              />




              <Ainput
                containerStyle={{ width: '48%' }}
                placeholder={'phone number'}
                value={phone}
                onChangeText={newPhone => {
                  setPhone(newPhone)
                  // Alert.alert('koushik')

                }}

              />
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Ainput
                containerStyle={{ width: '48%' }}
                placeholder={'GST no'}
                value={gst}
                onChangeText={newGst => {
                  setGst(newGst)
                  //Alert.alert('gst')

                }}

              />
              <Ainput
                containerStyle={{ width: '48%' }}
                placeholder={'PAN no'}
                value={pan}
                onChangeText={(newPan) => setPan(newPan)}


              />
            </View>

            <CommonButton
              onPress={() => {
                setDocPicker(true);
              }}
              text={'Gst Document'}
            />
            <CommonButton
              onPress={() => {
                setDocPicker(true);
              }}
              text={'Pan Document'}
            />
            <CommonButton
              onPress={() => {
                setDocPicker(true);
              }}
              text={'Addhar Document'}
            />
            <CusButtom
              onpress={() => {
                //console.log('selectedDate', selectedDate);
                console.log('email', email)
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                let regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
                let regadhar = /^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/;
                if (reg.test(email) === false) {
                  dispatch(setToastMsg("Please enter a valid Email address"));
                }
                else if (firstName.length < 2) {
                  dispatch(setToastMsg("Please enter First name"))
                }
                else if (lastName.length < 2) {
                  dispatch(setToastMsg("Please enter last name"))
                }
                else if (phone.length <= 10) {
                  dispatch(setToastMsg("Please enter phone number"))
                }
                else if (regpan.test(pan) === false) {
                  dispatch(setToastMsg("Please enter email"))
                }
                else if (regadhar.test(adhar) === false) {
                  dispatch(setToastMsg("Please enter adhar"))
                }
                else {
                  dispatch(setToastMsg("Please fill all the field"))
                }

              }}
              BTNstyle={{ backgroundColor: Colors.primaryColor }}
              text={'Submit'}
            />

          </View>
        </KeyboardAwareScrollView>
        {DateModal && (
          <BlurView style={styles.absolute} blurType="light" blurAmount={10}>
            <DatePickerr
              onDateChange={setSelectedDate}
              selectedDate={selectedDate === null ? new Date() : selectedDate}
              modalVisble={() => setDateModal(false)}
            />
          </BlurView>
        )}

        {docPicker && (
          <DocSelection
            onPressDoc={() => uploadDoc()}
            onPressCamera={() => openCamera()}
            onPressGallery={() => openGallery()}
            setIsVisible={setDocPicker}         
            isVisible={true}
          />
        )}
      </ImageBackground>
    </SafeAreaView>
  );                                
};

export default UpdateProfile;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const CommonButton = ({ onPress, text = '', image = true }) => {
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
          borderColor: Colors.silver,
          borderWidth: 1,
        }}>
        {image && (
          <Image
            source={require('../../assets/icons/gallery.png')}
            style={{
              height: 30,
              width: 30,
              resizemode: 'contain',
              tintColor: Colors.primaryColor,
            }}
          />
        )}

        <Text style={{ width: 200 }}>{text}</Text>
        <Image
          source={require('../../assets/icons/grater.png')}
          style={{ height: 20, width: 20, resizemode: 'contain' }}
        />
      </View>
    </TouchableOpacity>
  );
};
