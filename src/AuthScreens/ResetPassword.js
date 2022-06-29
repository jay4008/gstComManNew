import React from "react";
import { Ainput } from "../CommonComponents/common/Ainput";
import { CusButtom } from "../CommonComponents/common/CusButtom";
import AuthFrame from "./AuthFrame";
import { Rtext } from "../CommonComponents/common/Rtext";
const ResetPassword = (props) =>{
    return(
        <AuthFrame>
             <Rtext
                style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#fff',
                }}>
                Reset Password
            </Rtext>
            <Ainput placeholder = {"Password "}></Ainput>
            <Ainput placeholder = {"Confirm Password"}></Ainput>
            <CusButtom text = {"SUBMIT"} onpress = {() => props.navigation.navigate('LogIn')}></CusButtom>
        </AuthFrame>
    )
}
export default ResetPassword;