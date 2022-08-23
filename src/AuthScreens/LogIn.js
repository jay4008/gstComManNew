import React from "react";
import { useState } from "react";
import {
    Alert,
    View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Colors, Fonts } from "../assets/common/common";
import { Ainput } from "../CommonComponents/common/Ainput";
import { CusButtom } from "../CommonComponents/common/CusButtom";
import { Rtext } from "../CommonComponents/common/Rtext";
import { login, userLoginSuccess } from "../Store/auth";
import { LoaderOff, LoaderOn, setToastMsg } from "../Store/popup";
import LoginStyle from "../Styles/Login";
import AuthFrame from "./AuthFrame";
import ResetPassword from "./ResetPassword";


const LogIn = (props) => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const dispatch = useDispatch()
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
                <Ainput value={Email} onChangeText={setEmail} placeholder={"Email"}></Ainput>
                <Ainput value={Password} onChangeText={setPassword} placeholder={"Password."}></Ainput>
                <CusButtom onpress={() => {
                    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                    if (reg.test(Email) === false) {
                        dispatch(setToastMsg("Please enter a valid Email address"));
                        return
                    } else if (Password.length < 3) {
                        dispatch(setToastMsg("Please enter Correct password"));
                        return
                    }

                    dispatch(LoaderOn())
                    dispatch(login({
                        "email": Email,
                        "password": Password,

                    })).then((Reqdata) => {
                        dispatch(LoaderOff());
                        dispatch(userLoginSuccess());
                        console.log('Reqdata  ==>', Reqdata);
                    }).catch(() => {
                        dispatch(setToastMsg("Something went wrong!"));
                        dispatch(LoaderOff())
                    })
                }


                } text={"LogIn"} ></CusButtom>
                <View style={{ flexDirection: 'row-reverse', paddingVertical: 5 }}>
                    {/* <Rtext style={LoginStyle.ForgetPassword} onPress={() => props.navigation.navigate('LoginEmail')}> <Rtext style={{ color: Colors.bule }}>Login With  </Rtext>: Email Address ?</Rtext> */}
                    {/* <TouchableOpacity 
                        onPress={()=>
                        props.navigation.navigate('ResetPassword')
                        }
                    >
                    <Rtext style={{color:Colors.white,fontFamily:Fonts.latoBold}}>Forget password? </Rtext>
                    </TouchableOpacity> */}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 20 }}>
                    <Rtext style={{ color: Colors.white }}>New user ? / </Rtext>
                    <TouchableOpacity 
                    onPress={()=>
                        props.navigation.navigate('Registration')
                        }
                    
                    >
                        <View>
                            <Rtext style={{ color: Colors.white, fontFamily: Fonts.latoBold }}>Sign up</Rtext>
                            <View style={{ height: 1, borderColor: Colors.black, borderWidth: 1, justifyContent: 'center', marginTop: 4 }}/>
                        </View>
                    </TouchableOpacity>
                </View>




            </AuthFrame>
        </>
    )
}
export default LogIn;
