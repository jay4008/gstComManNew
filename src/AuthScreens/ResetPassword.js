// import React from "react";
// import { Ainput } from "../CommonComponents/common/Ainput";
// import { CusButtom } from "../CommonComponents/common/CusButtom";
// import AuthFrame from "./AuthFrame";
// import { Rtext } from "../CommonComponents/common/Rtext";
// const ResetPassword = (props) =>{
//     return(
//         <AuthFrame>
//              <Rtext
//                 style={{
//                     fontWeight: 'bold',
//                     fontSize: 18,
//                     color: '#fff',
//                 }}>
//                 Reset Password
//             </Rtext>
//             {/* <Ainput placeholder = {"Email or Ph No "}></Ainput> */}
//             <Ainput placeholder = {"Password "}></Ainput>
//             <Ainput placeholder = {"Confirm Password"}></Ainput>
//             <CusButtom text = {"SUBMIT"} onpress = {() => props.navigation.navigate('LogIn')}></CusButtom>
//         </AuthFrame>
//     )
// }
// export default ResetPassword;
import React, {useState} from 'react';
import {Ainput} from '../CommonComponents/common/Ainput';
import {CusButtom} from '../CommonComponents/common/CusButtom';
import AuthFrame from './AuthFrame';
import {Rtext} from '../CommonComponents/common/Rtext';
import {useDispatch} from 'react-redux';
import {LoaderOff, LoaderOn, setToastMsg} from '../Store/popup';
import { resetpassword } from '../Store/auth';
const ResetPassword = props => {
  const Email = props.route.params.email;
  const Otp=props.route.params.otp;

  console.log('props.route.params.Email', Email);
  console.log('props.route.params.Otp', Otp);


  const [pass1, setpass1] = useState('');
  const [pass2, setpass2] = useState('');
  const dispatch = useDispatch();
  return (
    <AuthFrame>
      <Rtext
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          color: '#fff',
        }}>
        Reset Password
      </Rtext>
      <Ainput
        value={pass1}
        onChangeText={setpass1}
        placeholder={'Password '}></Ainput>
      <Ainput
        value={pass2}
        onChangeText={setpass2}
        placeholder={'Confirm Password'}></Ainput>

      <CusButtom
        text={'SUBMIT'}
        onpress={() => {
          if (pass1 !== pass2) {
            dispatch(setToastMsg('Password doesnot match'));
            // return
          }
          else if(pass1.length==false)
          {
            dispatch(setToastMsg('Please enter password')); 
          }
          else if(pass2.length==false)
          {
            dispatch(setToastMsg('Please enter password')); 
          }
          dispatch(LoaderOn());
          dispatch(
            resetpassword({
              email: Email,
              code: Otp,
              password: pass2,
            }),
          ).then(()=>{
            dispatch(LoaderOff())
            props.navigation.navigate('LogIn');
          })

        
        }}></CusButtom>
    </AuthFrame>
  );
};
export default ResetPassword;