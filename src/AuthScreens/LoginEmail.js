import React from "react";
import {
    View,
    ImageBackground,
    Image,
    TextInput,
} from "react-native";
import { Rtext } from "../CommonComponents/common/Rtext";
import { Ainput } from "../CommonComponents/common/Ainput";
import { CusButtom } from "../CommonComponents/common/CusButtom";
import AuthFrame from "./AuthFrame";
import LoginStyle from "../Styles/Login";

const ForgotEmail = (props) => {
    return (
        <AuthFrame>
        <Rtext
     style={{
       fontWeight: 'bold',
       fontSize: 18,
       color: '#fff',
     }}>
     {' '}
    Log In
   </Rtext>
       <Ainput placeholder = {"Email Address"}></Ainput>
       <CusButtom    onpress = {() => props.navigation.navigate('Verification') } text = {"Send Otp"} ></CusButtom>
       <View style = {LoginStyle.ViewToMarginTen}>
       <Rtext style = {LoginStyle.ForgetPassword} onPress = {() => props.navigation.navigate('Registration')}> <Rtext style = {{color : "#224585"}}>Login With  </Rtext>: Phone no ?</Rtext>
       </View>
     
   </AuthFrame>
    )
}
export default ForgotEmail;