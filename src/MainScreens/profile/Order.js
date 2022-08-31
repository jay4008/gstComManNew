import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert, TouchableHighlight } from 'react-native';
import { Colors } from '../../assets/common/common';
import { Rtext } from '../../CommonComponents/common/Rtext';
import { setData } from '../utility/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { userLogoutSuccess } from '../../Store/auth';
import DocSelection from '../popup/DocModal';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import { useState } from 'react';
import RNFetchBlob from 'rn-fetch-blob';
const Order = ({ navigation }) => {
  const userTokenInfo = useSelector(state => state.auth.userTokenInfo);
  const dispatch = useDispatch();
  const [docPicker, setDocPicker] = useState(false);
  // console.log('data=====',userTokenInfo)


  const formDatapost = async(  uri = "")=>  {

   



    const data = new FormData(); 

    data.append("image", {
  
      uri:
        Platform.OS === "android"
          ? uri
          : uri.replace("file://", "")
    });



    console.log("datadatadatadatadata", data)
    // const URL = `${"https://gstcomman.herokuapp.com"}${"/api/userinfo/upload"}`;
    //const URL = "/api/userinfo/upload";
    const URL = "https://gstcomman.herokuapp.com/api/userinfo/profile/" + userTokenInfo.userId;
    // console.log('formDatapost url----------->', URL);
    // RNFetchBlob.fetch('POST', URL, headers, data)
    //   .then((sucessRes) => {
    //     // resolve(sucessRes);
    //     console.log("sucessRes", sucessRes);

    //   })
    //   .catch((errorRes) => {
    //     // reject(errorRes);
    //   });

    try{
      let res = await fetch(URL, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          // Authorization: this.state.accesstoken
        }
      });
      console.log("resresresres",res);
    }catch(error) {
      console.log("error",error);

    }
 




  }


  // https://gstcomman.herokuapp.com/api/userinfo/upload



  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {

let uri = image.path.replace("//" , "/")
      // let data = [
      //   {
      //     name: 'image',
      //     data: RNFetchBlob.wrap(uri),
      //   },
     
      // ]
      // console.log("Imageeeeeeee========= camera", image.path);


      formDatapost(uri)

    });
  };

  const openGallery = () => {

 
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      let uri = image.path
      let data = [
        {
          name: 'image',
          data: RNFetchBlob.wrap(uri),
        },
      ]
      console.log("Imageeeeeeee========= camera", image.path);


   
      formDatapost(uri)

    });
  };
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View>

          <View style={{ justifyContent: 'center', alignSelf: 'center' }}>

            <Image
              source={{uri : "file:/storage/emulated/0/Android/data/com.gstcomman/files/Pictures/7e3a57f5-e467-4ceb-8b16-530e50e07122.jpg"}}
              style={{
                height: 100,
                width: 100,
                // tintColor: Colors.primaryColor,
                resizeMode: 'contain',
                marginTop: 20,
              }}
            />
        
          </View>

          <TouchableOpacity onPress={() => {

setDocPicker(true)
}} >
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
              // navigation.navigate('MyOrder')
              setDocPicker(true)
            }
          />
          <CommonButton text={'Address'}
            onPress={() =>
              navigation.navigate('Address')
            }
          />
          <CommonButton onPress={() => navigation.navigate('CouponCode')} text={'Payment Method'} />
          <CommonButton onPress={() => navigation.navigate('Purchase')} text={'Purchase History'} />
          <CommonButton text={'Setting'} />
          <CommonButton onPress={() => navigation.navigate('Product')} text={'Share'} />
          <CommonButton onPress={() => dispatch(userLogoutSuccess())} text={'Log Out'} />
        </View>
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
      </KeyboardAwareScrollView>

  

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
