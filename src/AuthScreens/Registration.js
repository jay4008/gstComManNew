import moment from "moment";
import React from "react";
import { useState } from "react";
import { Alert, Text, Image, StyleSheet, View } from "react-native";
import { TouchableOpacity, } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Colors } from "../assets/common/common";
import { Ainput } from "../CommonComponents/common/Ainput";
import { CusButtom } from "../CommonComponents/common/CusButtom";
import { registration, sendotp } from "../Store/auth";
import { setSucessFailerMsg, setToastMsg } from "../Store/popup";
import AuthFrame from "./AuthFrame";
import { BlurView } from '@react-native-community/blur';
import DatePickerr from "../MainScreens/popup/DatePicker";

import Modal from 'react-native-modal';
import { request } from "../utility/common";



const Registration = (props) => {

  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [DOB, setDOB] = useState("")
  const [Password, setPassword] = useState("")
  const [DateModal, setDateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <AuthFrame>
      <Ainput value={name} onChangeText={setName} placeholder={"Name"}></Ainput>
      <Ainput ke value={Email} onChangeText={setEmail} placeholder={"Email"}></Ainput>
      <Ainput keyboardType={'numeric'} value={Phone} onChangeText={setPhone} placeholder={"Phone"}></Ainput>

      <CommonButton
        onPress={() => {
          setDateModal(true);
          setSelectedDate(moment().toDate());
        }}
        image={false}
        text={
          selectedDate === null
            ? 'DOB'
            : moment(selectedDate, 'YYYY-MM-DD').format('DD MMM YYYY')
        }
      />
      {/* <Ainput value={Password} onChangeText={setPassword} placeholder={"Password"}></Ainput> */}
      <CusButtom text={"SUBMIT"} onpress={async () => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (name.length < 2) {
          dispatch(setToastMsg("Please enter First name"))
          return
        }
        else if (reg.test(Email) === false) {
          dispatch(setToastMsg("Please enter a valid Email address"));
          return
        }
        else if (Phone.length !== 10) {
          dispatch(setToastMsg("Please enter a valid Phone Number"));
          return
        }
        else if (selectedDate === null) {
          dispatch(setToastMsg("Please enter a valid Date of Birth"));
          return
        }
        //  else if(Password.length < 3)
        //  {
        //     dispatch(setToastMsg("Please enter Correct password"));
        //     return  
        //  }

        // try{
        //   let reg1 =  await    request("post" ,"/api/users/register-user" ,  {
        //     username: name,
        //     email: Email,
        //     password: Password,
        //     ph: Phone,
        //     dob: selectedDate
        // }
        // )
        // console.log('====================================' ,reg1);
        // }catch(error) {
        // console.log('====================================');
        // console.log("error",error);
        // console.log('====================================');
        // }


        dispatch(registration({
          username: name,
          email: Email,
          password: '',
          ph: Phone,
          dob: selectedDate
        })).then((response) => {
          console.log('====================================');
          console.log("response", response);
          if (response.payload.success) {
            dispatch(sendotp({
              email:Email
            }))
            setTimeout(() => {
              
              // dispatch()
              dispatch(
                setSucessFailerMsg({
                  successFailureheaderTxt: " Verify your Email ",
                  successFailureContent: ' Please check your mail for Email verification',

                  successFailureType: true,
                }),
              );
            }, 1000);
            
            props.navigation.navigate('RegistrationOtp',{email:Email})
          } else {
            dispatch(
              setSucessFailerMsg({
                successFailureheaderTxt: "Please try with a new one.?",
                successFailureContent: response.payload.message,

                successFailureType: false,
              }),
            );
          }
          

        })
        
        .catch(() => {
          dispatch(setToastMsg("Something went wrong!"));
        })

      }
      }></CusButtom>
      {DateModal && (

        <DatePickerr
          onDateChange={setSelectedDate}
          selectedDate={selectedDate === null ? new Date() : selectedDate}
          modalVisble={() => setDateModal(false)}
        />

      )}
    </AuthFrame>
  )
}

export default Registration;



const CommonButton = ({ onPress, text = '', image = true }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          borderRadius: 10,
          backgroundColor: Colors.white,
          marginTop: 10,
          paddingVertical: 10,
          paddingHorizontal: 12,
          borderColor: Colors.silver,
          borderWidth: 1,
        }}>


        <Text style={{ width: 200 }}>{text}</Text>
        <Image
          source={require('../assets/icons/grater.png')}
          style={{ height: 20, width: 20, resizeMode: 'contain' }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});