import React, { useEffect, useState } from "react";
import {
    View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions, Alert, Text
} from "react-native";

import { Colors, Fonts } from "../../assets/common/common";
import { Rtext } from "../../CommonComponents/common/Rtext";
import Modal from "react-native-modal";
import { BlurView } from "@react-native-community/blur";
import { CusButtom } from "../../CommonComponents/common/CusButtom";
import { Ainput } from "../../CommonComponents/common/Ainput";
import { request } from "../../utility/common";
import { useDispatch, useSelector } from "react-redux";
import { commentsApi, emptyAllData, HomeTodosApi, HomeTodosApi1, Api2 } from "../../Store/home";
import { userLogoutSuccess } from "../../Store/auth";
import { messagePopUpActions, messagePopUpClose } from "../../Store/popup";
import RazorpayCheckout from 'react-native-razorpay';
import { payment } from "../../Store/payment";
import { subscription1 } from "../../Store/payment";
import moment from "moment";
import MessgePopUp from "./MessagePopUp";

const { width } = Dimensions.get('window');
const Subscription = ({ setShowModal, selectedData, price, index }) => {
    console.log('price', price)
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth.userData);
    console.log('userdata==========', userData)


    const makepayment = () => {
        setShowModal(false);
        let money = price
        var options = {
            description: selectedData.name,
            image: 'https://cdn-icons-png.flaticon.com/800/7207/7207388.png',
            currency: 'INR',
            key: 'rzp_test_GQvvt2m7UTpdIw', // Your api key
            amount: (money * 100),
            name: 'ATLC Group',
            prefill: {
                email: userData.email,
                contact: '9191919191',
                name: 'Razorpay Software'
            },
            theme: { color: '#F37254' }
        }
        RazorpayCheckout.open(options).then((data) => {


            dispatch(payment({
                orderId: "123",
                receiptId: "12345",
                paymentId: data.razorpay_payment_id,
                signature: "121554",
                amount: price,
                currency: "INR",
                createdSuscriptionDate: moment().format("DD/MM/YYYY"),
                status: "4545"
            })).then(() => {
                dispatch(messagePopUpActions({
                    headerText: "Congrates",
                    headerColor: Colors.primaryColor,
                    desc: "Payment Sucess",
                    butnTxt: "OK"

                }))
                setTimeout(() => {
                    dispatch(messagePopUpClose())
                }, 3000);




                dispatch(subscription1({

                    userId: "62e8cc3624b291ebd8cff858",
                    isPaid: "true",
                    purchaseMonth: "true",

                    subcribednMonth: "augest",
                    amount: price,
                    subscriptionDate: moment().format("DD/MM/YYYY"),
                    Doc: "wifwuwbiuw"

                })).then(() => {

                    dispatch(messagePopUpActions({
                        headerText: "Congrates",
                        headerColor: Colors.primaryColor,
                        desc: "you are now a Suscriber",
                        butnTxt: "OK"
    
                    }))
                    setTimeout(() => {
                        dispatch(messagePopUpClose())
                    }, 3000);

                })




            })
        }).catch((err) => {
            dispatch(payment({
                orderId: "123",
                receiptId: "12345",
                paymentId: null,
                signature: "121554",
                amount: price,
                currency: "INR",
                createdSuscriptionDate: moment().format("DD/MM/YYYY"),
                status: "4545"
            }))
        })
    }


    return (
        <Modal isVisible={true}  >
            <View style={{ flex: 1, justifyContent: 'center', borderRadius: 10, }}>
                <View style={{ paddingVertical: 30, backgroundColor: Colors.white, borderRadius: 30, }}>
                    {/* <CusButtom onpress={() => {
                        setShowModal(false)
                    }} BTNstyle={{ position: 'absolute', top: 10, right: 20, paddingHorizontal: 5, paddingVertical: 5 }} text={"Premium"}></CusButtom> */}

                    <TouchableOpacity onPress={() => setShowModal(false)} style={{ position: 'absolute', top: 12, right: 3 }}>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/icons/cancel.png')}
                        />

                    </TouchableOpacity>

                    <Rtext style={{ marginLeft: 30, color: Colors.mainblue, fontFamily: Fonts.latoBold, marginBottom: 20, fontSize: 18, width: 180 }}>{selectedData.name}</Rtext>
                    <View style={{ marginLeft: 30, justifyContent: 'space-evenly', marginBottom: 30, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../assets/icons/cart.png')} style={{ height: 50, width: 50, resizeMode: 'contain',tintColor:Colors.mainblue }} />
                            {
                                index !== "" && <Rtext style={{ width: '70%', paddingHorizontal: 10 }}> you choose  {index === 1 ? " Monthly " : index === 2 ? "quaterly " : "Yearly"} <Rtext> complaiance</Rtext></Rtext>
                            }
                        </View>

                        <Rtext style={{ paddingVertical: 5, color: Colors.lightSilver }}>{selectedData.desc}</Rtext>

                        {/* <View>
                            <Rtext style={{}}>StartUp</Rtext>
                            <Rtext>24/Month</Rtext>
                        </View> */}
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 4 }}>
                        {/* <Image source={require('../../assets/icons/tick.png')} style={{ height: 25, width: 25, resizeMode: 'contain'  }} /> */}
                        <Rtext style={{ fontFamily: Fonts.latoBlack }}> 24 * 7 contact us  </Rtext>

                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 4 }}>
                        {/* <Image source={require('../../assets/icons/tick.png')} style={{ height: 25, width: 25, resizeMode: 'contain' }} /> */}

                        <Rtext style={{ fontFamily: Fonts.latoBlack }}>Flexible to use </Rtext>

                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 4 }}>
                        {/* <Image source={require('../../assets/icons/tick.png')} style={{ height: 20, width: 25, resizeMode: 'contain', }} /> */}

                        <Rtext style={{ fontFamily: Fonts.latoBlack }}>One time payment</Rtext>

                    </View>

                    <View >
                        <View style={{ alignSelf: 'center', paddingVertical: 5 }}>
                            <Rtext><Rtext>You have to pay </Rtext>{price}</Rtext>
                        </View>
                        <CusButtom onpress={
                            //setShowModal(false)
                            // dispatch(messagePopUpClose())
                            makepayment


                        } BTNstyle={{ width: width - 100, backgroundColor: Colors.mainblue, paddingHorizontal: 10, alignSelf: "center", paddingVertical: 20 }} text={"Payment"}></CusButtom>
                    </View>


                </View>
            </View>
        </Modal>

    )
}

export default Subscription;

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
        marginRight: 10,
        tintColor: Colors.mainblue,
    },
});

