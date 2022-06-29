import React from "react";
import {
    View,
} from "react-native";
import { Colors, Fonts } from "../assets/common/common";
import { Ainput } from "../CommonComponents/common/Ainput";
import { CusButtom } from "../CommonComponents/common/CusButtom";
import { Rtext } from "../CommonComponents/common/Rtext";
import LoginStyle from "../Styles/Login";
import AuthFrame from "./AuthFrame";

const LogIn = (props) =>{
    return(
        <AuthFrame>
             <Rtext
          style={{
    
            fontSize: 18,
            color: '#fff',
            fontFamily : Fonts.latoBold,
          }}>
          {' '}
         Log In
        </Rtext>
            <Ainput placeholder = {"Phone no."}></Ainput>
            <CusButtom    onpress = {() => props.navigation.navigate('Verification') } text = {"Send Otp"} ></CusButtom>
        <View style= {LoginStyle.ViewToMarginTen}>
        <Rtext style = {LoginStyle.ForgetPassword} onPress = {() => props.navigation.navigate('LoginEmail')}> <Rtext style = {{color : Colors.bule}}>Login With  </Rtext>: Email Address ?</Rtext>
        </View>
          
        </AuthFrame>
    )
}
export default LogIn;