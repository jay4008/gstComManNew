import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors, Fonts } from '../../assets/common/common';
import { Ainput } from '../../CommonComponents/common/Ainput';
import { CusButtom } from '../../CommonComponents/common/CusButtom';
import { Rtext } from '../../CommonComponents/common/Rtext';
import Subscription from '../popup/Subscription';
import { getCoupon } from '../../Store/coupon';
// import { dispatch } from 'jest-circus/build/state';
import { useDispatch, useSelector } from 'react-redux';
import { setToastMsg } from '../../Store/popup';

const ProductDetailsGst = (props) => {
  let [price, setPrice] = useState("");
  const dispatch = useDispatch()
  // let data = { "item": { "desc": "Hhhhh", "maxamount": "10000", "maxvaluerange": "200000", "midamount": "5000", "midvaluerange": "25000", "minamount": "1000", "name": "Gggggg" } };
  const [index, setIndex] = useState(1)
  const [showModal, setShowModal] = useState(false);
  console.log("props", props.route.params);

  console.log("**********", props.route.params.item.desc);

  const [gstAmt, setGstAmt] = useState("");

  const [couponData, setcouponData] = useState('')

  const value = props.route.params;
  console.log('value==============', value)
  const getdata = (data) => {
    setcouponData(data)
  }
  console.log('data', couponData)
  return (
    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
        elevation: 3,
        backgroundColor: Colors.lightSilver,

      }}
      imageStyle={{
        height: '100%',
        width: '100%',
        backgroundColor: Colors.white,
      }}>
      <KeyboardAwareScrollView>
        <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
          <Rtext
            style={{
              color: Colors.black,
              fontSize: 18,
              fontFamily: Fonts.latoBold,
            }}>
            {props.route.params.item.name}
          </Rtext>
          <Rtext
            style={{
              fontSize: 12,
              marginVertical: 10,
              color: Colors.black,
            }}>{props.route.params.item.description} </Rtext>
        </View>


        <View style={{ borderRadius: 10, width: 250, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
          <Rtext style={{ color: Colors.black, fontFamily: Fonts.latoBold, paddingHorizontal: 10 }}> Please choose your plan</Rtext>
          <View style={{ height: 1, width: '100%', color: Colors.black }}></View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 30, backgroundColor: "#fff", marginHorizontal: 15, borderRadius: 10, marginTop: 15, borderColor: Colors.lightSilver, borderWidth: 1, elevation: 3 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
            <Rtext style={{ color: Colors.black, fontFamily: Fonts.latoRegular, fontSize: 12 }}>Monthely</Rtext>
            <CheckBox checked={index === 1} onPress={() => setIndex(1)} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
            <Rtext style={{ color: Colors.black, fontFamily: Fonts.latoRegular, fontSize: 12 }}>Quaterly</Rtext>
            <CheckBox checked={index === 2} onPress={() => setIndex(2)} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, alignItems: 'center' }}>
            <Rtext style={{ color: Colors.black, fontFamily: Fonts.latoRegular, fontSize: 12 }}>Yearly</Rtext>
            <CheckBox checked={index === 3} onPress={() => setIndex(3)} />
          </View>
          {/* <View style={{ borderRadius: 10, borderColor: Colors.white, borderWidth: 1, width: 270,marginVertical:10 }}>
        

          <Rtext style={{ color: Colors.mainblue, fontFamily: Fonts.latoBold, paddingHorizontal: 10 }}> Enter your amount for GST</Rtext>
        </View> */}


          <Ainput keyboardType={'numeric'} value={gstAmt} onChangeText={(val) => {
            setGstAmt(val);
            if (val === "") {
              setPrice("")
            }

            if (parseInt(val) > 0 && parseInt(val) < parseInt(props.route.params.item.midvaluerange)) {
              setPrice(parseInt(props.route.params.item.minamount));
            }


            if (parseInt(val) > parseInt(props.route.params.item.midvaluerange) && parseInt(val) < parseInt(props.route.params.item.maxvaluerange)) {
              setPrice(props.route.params.item.midamount);
            }

            if (parseInt(val) > parseInt(props.route.params.item.maxvaluerange)) {
              setPrice(props.route.params.item.maxamount);
            }


          }} placeholder={"Please enter Amount for GST."} style={{}} />

        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 15 }}>
          {
            price !== "" && <Rtext style={{ width: "100%" }}> You have to pay {price === "" ? "" : parseInt(price) * (index === 1 ? 1 : (index === 2 ? 4 : 12)) - couponData} rs {index === 1 ? " for monthly Suscription " : index === 2 ? "for quaterly Suscription " : "for yealy Suscription"}</Rtext>
          }

        </View>

        <View style={{ marginHorizontal: 15 }}>
          <CusButtom text={"Apply Coupon or Promo Code"}
            onpress={() =>
              // dispatch(getCoupon())


              //   .then(Reqdata => {
              //     // dispatch(LoaderOff());
              //     // dispatch(userLoginSuccess());
              //     // dispatch(userLoginSuccess());
              //     //console.log('Reqdata  ==>', Reqdata);
              //     props.navigation.navigate('CouponCode',{item:data})
              //   })
              //   .catch((e) => {
              //     // dispatch(setToastMsg("Something went wrong!"));
              //     // dispatch(LoaderOff())
              //     console.log('Reqdata  ==>',e);
              //   })

              props.navigation.navigate('CouponCode', { getdata: getdata },)
            }
          />

          {/* <CusButtom title={'Submit'}
          onpress={()=>
          console.log('data',couponData)
          }
          /> */}

        </View>
      </KeyboardAwareScrollView>

      <View
        style={{

          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
          flexDirection: 'row',
          borderTopColor: Colors.lightSilver,
          borderTopWidth: 1
        }}>

        <CusButtom

          BTNstyle={{
            width: '50%',
            borderRadius: 0,
            marginTop: 0,
            backgroundColor: Colors.mainblue,
          }}


          text={'Cancel'}
        />
        <CusButtom
          onpress={() => {
            if (gstAmt === "") {
              dispatch(setToastMsg("Please enter the gst amount to purchase the suscription.!"))
            } else {
              setShowModal(true)
            }

          }}
          BTNstyle={{
            width: '50%',
            borderRadius: 0,
            marginTop: 0,
            backgroundColor: Colors.white,
          }}
          textStyle={{ color: Colors.mainblue }}
          text={'Purchase'}
        />
      </View>

      <View>
        {
          gstAmt !== "" && showModal && <Subscription setShowModal={setShowModal} selectedData={props.route.params.item} price={price === "" ? "" : parseInt(price) * (index === 1 ? 1 : (index === 2 ? 4 : 12)) - couponData} index={index} coupon={couponData} />
        }
      </View>
    </ImageBackground>
  );
};

const CheckBox = ({
  checked,
  onPress
}) => {
  // const [checked, setChecked] = useState(0);

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row' }}
      onPress={onPress}>
      <View
        style={
          checked ? styles.checkedSleceted : styles.checkedUnSleceted
        }></View>
    </TouchableOpacity>
  );
};

export default ProductDetailsGst;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginTop: 10,
  },
  mainview3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  mainview2: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 20,
    height: 100,
  },
  checkedSleceted: {
    height: 30,
    width: 30,
    backgroundColor: Colors.mainblue,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5
  },
  checkedUnSleceted: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    borderColor: Colors.mainblue,
    borderWidth: 1,
    borderRadius: 5
  }
});

const CommonButton = ({ onPress, text1 = '', text2 = '', arrHide = false }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          borderRadius: 10,
          paddingVertical: 8,
          paddingHorizontal: 12,
        }}>
        <Rtext style={{}}>{text1}</Rtext>
        <View style={{ flexDirection: 'row' }}>
          <Rtext style={{}}>{text2}</Rtext>

          {!arrHide && (
            <Image
              source={require('../../assets/icons/grater.png')}
              style={{ height: 20, width: 20, resizeMode: 'contain' }}
            />
          )}
        </View>
      </View>
      <View style={{ height: 0.5, backgroundColor: Colors.silver }} />
    </TouchableOpacity>
  );
};
