import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Alert, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors, Fonts } from '../assets/common/common';
import { Ainput } from '../CommonComponents/common/Ainput';
import { CusButtom } from '../CommonComponents/common/CusButtom';
import { Rtext } from '../CommonComponents/common/Rtext';
import { login, setUserTokenInfo, userLoginSuccess } from '../Store/auth';
import { LoaderOff, LoaderOn, setToastMsg } from '../Store/popup';
import LoginStyle from '../Styles/Login';
import AuthFrame from './AuthFrame';
import jwt_decode from 'jwt-decode';
import { TouchableOpacity } from 'react-native-gesture-handler';
const LogIn = props => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [phno, setPhno] = useState('')
  const [emailLogin, setEmailLogin] = useState(true)
  useEffect(() => {
    AsyncStorage.setItem('token', '');
  }, []);
  const dispatch = useDispatch();


  function isEmail(email) { 
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
} 

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
        <View style={{ flexDirection: 'row-reverse', alignItems: 'center', marginTop: 20 }}>


          <TouchableOpacity onPress={() =>{ setEmailLogin(true);
          
          
          setEmail("");
          }} style={{ flexDirection: 'row', alignItems: 'center', width: 100 }}>
            <Rtext style={{ color: Colors.white }}>Email</Rtext>
            <View style={{ marginLeft: 10, backgroundColor: emailLogin ? Colors.mainblue : Colors.white, height: 25, width: 25, borderRadius: 15, borderColor: !emailLogin ? Colors.mainblue : Colors.white, borderWidth: 3 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setEmailLogin(false);
           setEmail("+91-");
          }} style={{ flexDirection: 'row', alignItems: 'center', width: 100 }}>
            <Rtext style={{ color: Colors.white }}>Mobile</Rtext>
            <View style={{ marginLeft: 10, backgroundColor: !emailLogin ? Colors.mainblue : Colors.white, height: 25, width: 25, borderRadius: 15, borderColor: emailLogin ? Colors.mainblue : Colors.white, borderWidth: 3 }} />
          </TouchableOpacity>
        </View>
        <Ainput
          value={ Email}
          onChangeText={(val) =>{
            if(emailLogin){
              setEmail(val)
            }else{
              if(val.length > 3){
                setEmail(val)
              }
            }
          }}
         
          keyboardType = {emailLogin ? "email-address" :'numeric'}
          placeholder={emailLogin ? 'Email' : 'Mobile'} />

        <Ainput
          secureTextEntry={true}
          value={Password}
          onChangeText={setPassword}
          eye={true}
          placeholder={'Password.'}></Ainput>

        <CusButtom
          onpress={async () => {

            if (emailLogin) {
              let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
              if (reg.test(Email) === false) {
                console.log("reg.test(Email)",reg.test(Email) ,Email);
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

                  console.log('Reqdata  ==>', Reqdata);
                  if (Reqdata?.payload?.success) {
                    await AsyncStorage.setItem('token', Reqdata?.payload?.token);
                    dispatch(userLoginSuccess());
                    console.log('Reqdata  ==>', Reqdata);
                    var userData = jwt_decode(Reqdata?.payload?.token.replace('Bearer ', ''));
                    console.log("data", userData,);
                    dispatch(setUserTokenInfo(userData))
                  } else {
                    dispatch(
                      setToastMsg('Please enter correct email or Password .'),
                    );
                  }

                  dispatch(LoaderOff());
                })
                .catch(errr => {
                  console.log('====================================');
                  console.log('errr', errr);
                  console.log('====================================');
                  dispatch(
                    setToastMsg('Please enter correct email or Password .'),
                  );
                  dispatch(LoaderOff());
                });
            } 
            else {
              //Alert.alert("Email"+Email)
              if (Email.length !== 14) {
                dispatch(setToastMsg('Please enter a valid ph no'));
                return;
              } else if (Password.length < 3) {
                dispatch(setToastMsg('Please enter Correct password'));
                return;
              }

              dispatch(LoaderOn());
              dispatch(
                login({
                  ph:Email.replace(/[^a-zA-Z0-9]/g, ''),
                  password: Password.toString(),
                }),
              )
                .then(async Reqdata => {

                  console.log('Reqdata  ==>', Reqdata);
                  if (Reqdata?.payload?.success) {
                    await AsyncStorage.setItem('token', Reqdata?.payload?.token);
                    dispatch(userLoginSuccess());
                    console.log('Reqdata  ==>', Reqdata);
                    var userData = jwt_decode(Reqdata?.payload?.token.replace('Bearer ', ''));
                    console.log("data", userData,);
                    dispatch(setUserTokenInfo(userData))
                  } else {
                    dispatch(
                      setToastMsg('Please enter correct Phone no. or Password .'),
                    );
                  }

                  dispatch(LoaderOff());
                })
                .catch(errr => {
                  console.log('====================================');
                  console.log('errr', errr);
                  console.log('====================================');
                  dispatch(
                    setToastMsg('Please enter correct email or Password .'),
                  );
                  dispatch(LoaderOff());
                });
            } 
            

          }}
          text={'LogIn'}></CusButtom>

        <View style={LoginStyle.ViewToMarginTen}>
          <Rtext
            style={LoginStyle.ForgetPassword}
            onPress={() => props.navigation.navigate('ForgotEmail')}>
            Forgot Password
          </Rtext>



        </View>

      </AuthFrame>
    </>
  );
};
export default LogIn;


