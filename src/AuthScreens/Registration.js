import React from "react";
import { Ainput } from "../CommonComponents/common/Ainput";
import { CusButtom } from "../CommonComponents/common/CusButtom";
import AuthFrame from "./AuthFrame";

const Registration = (props) => {
    return (
        <AuthFrame>
            <Ainput placeholder={"Name"}></Ainput>
            <Ainput placeholder={"Email"}></Ainput>
            <Ainput placeholder={"Phone"}></Ainput>
            <Ainput placeholder={"DOB"}></Ainput>
            <Ainput placeholder={"Password"}></Ainput>
            <CusButtom text={"SUBMIT"} onpress={() => props.navigation.navigate('Verification')}></CusButtom>
        </AuthFrame>
    )
}
export default Registration;