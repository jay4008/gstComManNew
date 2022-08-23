import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Rtext} from '../CommonComponents/common/Rtext';
import {Ainput} from '../CommonComponents/common/Ainput';
import {CusButtom} from '../CommonComponents/common/CusButtom';
import AuthFrame from './AuthFrame';
import LoginStyle from '../Styles/Login';
import {Colors} from '../assets/common/common';
import { setSucessFailerMsg } from '../Store/popup';
import { useDispatch } from 'react-redux';

const LoginOptions = props => {
    const dispatch = useDispatch()
  return (
    <AuthFrame>
      <CusButtom
        BTNstyle={{justifyContent: 'space-evenly', padding: 20}}
        image={true}
        source={require('../../src/assets/icons/login.png')}
        ImgStyle={styles.icon}
        onpress={() => props.navigation.navigate('LogIn')}
        text={'Existing User ? Login'}></CusButtom>
      <CusButtom
        BTNstyle={{justifyContent: 'space-evenly', padding: 20}}
        image={true}
        source={require('../../src/assets/icons/google.png')}
        ImgStyle={styles.icon}
        onpress={() => {


            dispatch(
                setSucessFailerMsg({
                  successFailureheaderTxt: "Upcomming feature",
                  successFailureContent:' Not Implemented will implement soon',
                    
                  successFailureType: false,
                }),
              );
        }}
        text={'Login with Google'}></CusButtom>
      <CusButtom
        BTNstyle={{justifyContent: 'space-evenly', padding: 20}}
        image={true}
        source={require('../../src/assets/icons/facebook.png')}
        ImgStyle={styles.icon}
        onpress={() => {


            dispatch(
                setSucessFailerMsg({
                  successFailureheaderTxt: "Upcomming feature",
                  successFailureContent:' Not Implemented will implement soon',
                    
                  successFailureType: false,
                }),
              );
        }}
        text={'Login with Facebook'}></CusButtom>
      <CusButtom
        BTNstyle={{justifyContent: 'space-evenly', padding: 20}}
        image={true}
        source={require('../../src/assets/icons/register.png')}
        ImgStyle={styles.icon}
        onpress={() => props.navigation.navigate('Registration')}
        text={'New User ? Register'}></CusButtom>
    </AuthFrame>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: Colors.white,
  },
});
export default LoginOptions;
