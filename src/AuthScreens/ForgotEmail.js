import React, { useState } from 'react';
import {View, ImageBackground, Image, TextInput} from 'react-native';
import {Rtext} from '../CommonComponents/common/Rtext';
import {Ainput} from '../CommonComponents/common/Ainput';
import {CusButtom} from '../CommonComponents/common/CusButtom';
import AuthFrame from './AuthFrame';
import LoginStyle from '../Styles/Login';
import { useDispatch } from 'react-redux';
import { sendotp } from '../Store/auth';
import { log } from 'async';
import { setToastMsg } from '../Store/popup';

const ForgotEmail = props => {
const[email,setEmail]=useState('')
const dispatch=useDispatch()



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
      value={email}
      onChangeText={setEmail}
      />
      <CusButtom
        onpress={() =>{
        dispatch(sendotp({
          email:email
        })).then((res )=>{
          //Alart.alart('Sucess')


          console.log("resresresresresresresresresresres====>>>>");
          dispatch(setToastMsg('Otp Send Sucessfully'))
        }).catch((e)=>{
          console.log('##############error**********',e)
        })


        }}
        text={'Send Otp'}></CusButtom>
    </AuthFrame>
  );
};
export default ForgotEmail;
// props.navigation.navigate('Verification')