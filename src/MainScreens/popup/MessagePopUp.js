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

const {width}=Dimensions.get('window');
 export const MessgePopUp = ({headerText = "Message"  , headerColor = Colors.red , desc = `Please remember to add a link to us wherever you use this icon` , butnTxt = "Continue"  , btnBackgroundColor = Colors.primaryColor}) =>{
    return(
        <Modal isVisible={true} backdropColor={Colors.tranparentBlack} >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
            <View style={{ paddingVertical: 30, width: "100%", backgroundColor: Colors.white, paddingHorizontal: 20, alignItems: 'center', borderRadius: 10 }}>
                <Rtext style={{ color:headerColor, fontSize: 18, alignSelef: 'center', borderBottomWidth: 1, borderBottomColor:headerColor, marginBottom: 10 }}> {headerText}</Rtext>

                <Rtext> {desc}</Rtext>
                <TouchableOpacity onPress={() => {
                    setPopUp(false)
                }}>
                    <CusButtom BTNstyle={{ width: width - 80, backgroundColor: btnBackgroundColor }} text={butnTxt} ></CusButtom>
                </TouchableOpacity>

            </View>


            {/* <TouchableOpacity onPress={() => setPopUp(false)} style={{ backgroundColor: Colors.primaryColor, paddingVertical: 7, paddingHorizontal: 8, borderRadius: 10 }}>
                <Rtext style={{ color: Colors.black }} >open pop up </Rtext>
            </TouchableOpacity> */}
        </View>
    </Modal>

    )
}