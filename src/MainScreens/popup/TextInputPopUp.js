import React, { useEffect, useState } from "react";
import {
    View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions, Alert
} from "react-native";

import { Colors } from "../../assets/common/common";
import { Rtext } from "../../CommonComponents/common/Rtext";
import Modal from "react-native-modal";
import { BlurView } from "@react-native-community/blur";
import { CusButtom } from "../../CommonComponents/common/CusButtom";
import { Ainput } from "../../CommonComponents/common/Ainput";
import { request } from "../../utility/common";
import { useDispatch, useSelector } from "react-redux";
import { commentsApi, emptyAllData, HomeTodosApi, HomeTodosApi1, Api2 } from "../../Store/home";
import { userLogoutSuccess } from "../../Store/auth";
export const TextInputPopUp = ({setMessagePopup , headerTxt = "please Enter"}) => {
    return (
        <Modal isVisible={true} backdropColor={Colors.tranparentBlack} >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <View style={{ paddingVertical: 30, width: "100%", backgroundColor: Colors.white, paddingHorizontal: 20, alignItems: 'center', borderRadius: 10 }}>
                    <Rtext style={{ color: Colors.primaryColor, fontSize: 18, alignSelef: 'center', marginBottom: 10 }}>{headerTxt}</Rtext>
                    <View style={{ width: '100%', height: 1, backgroundColor: Colors.primaryColor, marginTop: 5 }} />
                    <View style={{ width: "100%", marginTop: 10 }}>
                        <Rtext>Feedback</Rtext>
                    </View>

                    <Ainput placeholder={"Message"} style={{ height: 200, textAlignVertical: "top" }} multiline={true} />
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", width: '100%' }}>
                        <CusButtom onpress = {() => setMessagePopup(false)} text={"Cancel"} BTNstyle={{ width: "45%" }} />
                        <CusButtom   onpress = {() => setMessagePopup(false)}  text={"Continue"} BTNstyle={{ width: "45%" }} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}