import React, { useState } from 'react'
import { View, Text, SafeAreaView, Linking , StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch } from 'react-redux'
import { Colors, Fonts } from '../../assets/common/common'
import { Ainput } from '../../CommonComponents/common/Ainput'
import { CusButtom } from '../../CommonComponents/common/CusButtom'
import { Rtext } from '../../CommonComponents/common/Rtext'
import { LoaderOff, LoaderOn, setToastMsg } from '../../Store/popup'
import { contactus } from '../../Store/auth'

const ContactUs = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [subject,setSubject]=useState('')
    const [message,setMessage]=useState('')
    const[it,setIt]=useState('')

    const dispatch=useDispatch()

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator = {false} style={{ flex: 1 }}>
                <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                    <Rtext style={{ fontFamily: Fonts.latoBold , fontSize : 20 }}>Get In Touch</Rtext>
                </View>
                <Ainput value={name} onChangeText={setName} placeholder={'Name'}></Ainput>
                <Ainput value={email} onChangeText={setEmail}  placeholder={'Email'} 
                    keyboardType={'email-address'}
                />
                <Ainput value={subject} onChangeText={setSubject}  placeholder={'Subject'}></Ainput>
                <Ainput value={message} onChangeText={setMessage}  placeholder={"Message"} style={{ height: 120, textAlignVertical: "top" }} multiline={true} />
                <TouchableOpacity>
                    <Ainput value={it} onChangeText={setIt} placeholder={'Select Information Type'}></Ainput>
                </TouchableOpacity>

                <CusButtom BTNstyle={{ backgroundColor: Colors.primaryColor }} text={'Submit'} 
                onpress={()=>{
                    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                    if (name.length < 2) {
                        dispatch(setToastMsg("Please enter First name"))
                        return
                    }
                    else if (reg.test(email) === false) {
                        dispatch(setToastMsg("Please enter a valid Email address"));
                        return
                    }
                    
                    else if (subject.length < 2 )
                    {
                        dispatch(setToastMsg("Please enter a valid Subject"));
                        return
                    }
                    else if (message.length < 2 )
                     {
                        dispatch(setToastMsg("Please enter a valid message"));
                        return  
                     }
                     else if (it.length < 2 )
                     {
                        dispatch(setToastMsg("Please enter Correct Information"));
                        return  
                     }
                     dispatch(LoaderOn())
                     dispatch(contactus({
                        "name":name,
                        "email":email,
                        "subject":subject,
                        "message":message,
                        "informationType":it 
                     })).then(()=>{
                        dispatch(
                            setSucessFailerMsg({
                              successFailureheaderTxt: "Thank you",
                              successFailureContent:'Adress Updated Sucessfully',
                              successFailureType: true,
                            }),
                          );
                          dispatch(LoaderOff())
                            // dispatch(setToastMsg('Thank you !! for your information'));
                            // return

                     })

                
                
                }}
                
                
                
                
                
                
                />
                <View style={{ paddingVertical: 20, backgroundColor: Colors.white, marginTop: 20, paddingHorizontal: 10, borderRadius: 10 }}>
                    <Rtext style={{ fontFamily: Fonts.latoBlack }}>Contact Us</Rtext>
                    <View style={{ height: 1, width: "100%", backgroundColor: Colors.silver, marginTop: 10 }} />
                    <MainButton onpress = {()=> Linking.openURL(`tel:${"7003880972"}`) } source={require('../../assets/icons/phone.png')} text={'+91 7005648756'} />
                    <MainButton onpress ={()=>Linking.openURL('mailto:technoplat@gmail.com?subject=help&body=Get In Touch With You')} source={require('../../assets/icons/message.png')} text={'tecnoplat@gmail.com'} />
                    <MainButton source={require('../../assets/icons/schedule.png')} text={'10.30 am to 7.30 pm'} />
                    <MainButton source={require('../../assets/icons/location.png')} text={'Biswakarma comparment,Dum Dum  Cant. kolkata 700156'} />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}


const MainButton = ({ source, text , onpress }) => {
    return (
        <CusButtom onpress = {onpress} source={source} image={true} ImgStyle={styles.imageStyle} textStyle={styles.textStyle} BTNstyle={styles.buttonStyle}
            text={text} />
    )
}

export default ContactUs;

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#fff',
        // width: 70,
        marginTop: 15,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.3,
        elevation: 5,
        shadowRadius: 15,
        marginBottom: 10,
        shadowOffset: { width: 4, height: 4 },
    },
    buttonStyle: {
        marginTop: 0, paddingVertical: 7,
        backgroundColor: Colors.white,
        justifyContent: 'flex-start'

    },
    textStyle:
    {
        color: Colors.black,
        marginLeft: 10
    },
    imageStyle: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginLeft: 10,
        tintColor: Colors.primaryColor
    }

})
