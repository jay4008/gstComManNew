import React from 'react';
import {View, ImageBackground, Image, TextInput} from 'react-native';
import {Rtext} from '../CommonComponents/common/Rtext';
import {Ainput} from '../CommonComponents/common/Ainput';
import {CusButtom} from '../CommonComponents/common/CusButtom';
import AuthFrame from './AuthFrame';
import LoginStyle from '../Styles/Login';

const ForgotEmail = props => {
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
      <Ainput placeholder={'Email Address'}></Ainput>
      <CusButtom
        onpress={() => props.navigation.navigate('Verification')}
        text={'Send Otp'}></CusButtom>
    </AuthFrame>
  );
};
export default ForgotEmail;
