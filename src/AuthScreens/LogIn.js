import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {useState} from 'react';
import {Alert, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Colors, Fonts} from '../assets/common/common';
import {Ainput} from '../CommonComponents/common/Ainput';
import {CusButtom} from '../CommonComponents/common/CusButtom';
import {Rtext} from '../CommonComponents/common/Rtext';
import {login, userLoginSuccess} from '../Store/auth';
import {LoaderOff, LoaderOn, setToastMsg} from '../Store/popup';
import LoginStyle from '../Styles/Login';
import AuthFrame from './AuthFrame';

const LogIn = props => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
useEffect(() => {
  AsyncStorage.setItem('token', "");
},[])
  const dispatch = useDispatch();
  return (
    <>
      <AuthFrame>
        <Rtext
          style={{
            fontSize: 18,
            color: '#fff',
            fontFamily: Fonts.latoBold,
          }}>
          {' '}
          Log In
        </Rtext>
        <Ainput
          value={Email}
          onChangeText={setEmail}
          placeholder={'Email'}></Ainput>
        <Ainput
          value={Password}
          onChangeText={setPassword}
          placeholder={'Password.'}></Ainput>
        <CusButtom
          onpress={async () => {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(Email) === false) {
              dispatch(setToastMsg('Please enter a valid Email address'));
              return;
            } else if (Password.length < 3) {
              dispatch(setToastMsg('Please enter Correct password'));
              return;
            }

            dispatch(LoaderOn());
            dispatch(
              login({
                email: Email,
                password: Password.toString(),
              }),
            )
              .then(async Reqdata => {
                if (Reqdata?.payload?.success) {
                  await AsyncStorage.setItem('token', Reqdata?.payload?.token);
                  dispatch(userLoginSuccess());
                  console.log('Reqdata  ==>', Reqdata);
                } else {
                  dispatch(
                    setToastMsg('Please enter correct email or Password .'),
                  );
                }

                dispatch(LoaderOff());
              })
              .catch(() => {
                dispatch(
                  setToastMsg('Please enter correct email or Password .'),
                );
                dispatch(LoaderOff());
              });
          }}
          text={'LogIn'}></CusButtom>
        <View style={LoginStyle.ViewToMarginTen}>
          <Rtext
            style={LoginStyle.ForgetPassword}
            onPress={() => props.navigation.navigate('LoginEmail')}>
            {' '}
            <Rtext style={{color: Colors.bule}}>Login With </Rtext>: Email
            Address ?
          </Rtext>
        </View>
      </AuthFrame>
    </>
  );
};
export default LogIn;

// dispatch(userLoginSuccess())
