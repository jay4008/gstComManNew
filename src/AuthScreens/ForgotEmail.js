import React, { useState } from 'react';
import { View, ImageBackground, Image, TextInput } from 'react-native';
import { Rtext } from '../CommonComponents/common/Rtext';
import { Ainput } from '../CommonComponents/common/Ainput';
import { CusButtom } from '../CommonComponents/common/CusButtom';
import AuthFrame from './AuthFrame';
import LoginStyle from '../Styles/Login';
import { useDispatch } from 'react-redux';
import { sendotp } from '../Store/auth';
import { log } from 'async';
import { setSucessFailerMsg, setToastMsg } from '../Store/popup';
import { LoaderOff, LoaderOn,  } from '../Store/popup';

const ForgotEmail = props => {
  const [Email, setEmail] = useState('')
  const dispatch = useDispatch()



  const sendOtp = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(Email)=== false) {
      // Alert.alert('Enter Correct Email')
      dispatch(setToastMsg('Please enter a valid Email address'));
      return;
    }
    dispatch(LoaderOn())
    dispatch(
      sendotp({
        email: Email,
      }),
    ).then(res => {
      console.log('resssss====>', res.payload);
      dispatch(LoaderOff())
      if (res?.payload?.statusText === 'error') {
        //   dispatch(setToastMsg(res?.payload?.message));
        dispatch(
          setSucessFailerMsg({
            successFailureheaderTxt: 'Oops',
            successFailureContent: res?.payload?.message,
            successFailureType: false,
          }),
        );
      } else {
        setTimeout(() => {
          dispatch(
            setSucessFailerMsg({
              successFailureheaderTxt: 'Otp sent',
              successFailureContent: 'Please check the  your email for otp. ',
              successFailureType: true,
            }),
          );
        }, 1500);
      }
    });
  };
  return (
    <AuthFrame>
      <Rtext
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          color: '#fff',
        }}>
        {' '}
        Forgot Password
      </Rtext>
      <Ainput placeholder={'Email Address'}
        value={Email}
        onChangeText={setEmail}
      />
      
      <CusButtom
        onpress={() => {
          let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
          if (reg.test(Email)=== false) {
            // Alert.alert('Enter Correct Email')
            dispatch(setToastMsg('Please enter a valid Email address'));
            return;
          }

          dispatch(
            sendotp({
              email: Email,
            }),
          ).then(res => {
            console.log('resssss====>', res.payload);

            if (res?.payload?.statusText === 'error') {
              //   dispatch(setToastMsg(res?.payload?.message));
              dispatch(
                setSucessFailerMsg({
                  successFailureheaderTxt: 'Oops',
                  successFailureContent: res?.payload?.message,
                  successFailureType: false,
                }),
              );
            } else {
              props.navigation.navigate('Verification', {email: Email},{sendOtp: sendOtp});

              setTimeout(() => {
                dispatch(
                  setSucessFailerMsg({
                    successFailureheaderTxt: 'Otp sent',
                    successFailureContent:
                      'Please check the  your email for otp. ',
                    successFailureType: true,
                  }),
                );
              }, 1500);
            }
          });
        }}
        // onpress={() => }
        text={'Send Otp'}></CusButtom>
    </AuthFrame>
  );
};
export default ForgotEmail;
//props.navigation.navigate('Verification')