import React, { useEffect, useState } from "react";
import {
    View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../../assets/common/common";
import { Rtext } from "../../CommonComponents/common/Rtext";
import { messagePopUpActions } from "../../Store/popup";
import Subscription from "../popup/Subscription";



const { width, height } = Dimensions.get('window')

const GstMenu = (props) => {

    const [selectedData, setSelecetedData] = useState({})
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.home.comments);
    const Data = [

        {
            name: 'Normal Taxpayer',
            description: `Once the Threshold limit of Rs 20 Lac in case of special category states) and 40 lacs in case of Normal category states crosses registration is required.

            A Registered Person, whose aggregate turnover in the preceding financial year did not exceed Seventy-Five Lakh Rupees.
            
            The taxpayers are related to the Service industry other than the restaurant sector. The taxpayers registered under the regular scheme have to file returns monthly. Currently, GSTR 3B and GSTR 1 are required to be filed.
            
            Regular taxpayers can avail of an input tax credit of GST paid on the purchase of goods or services or both.`,
            image: require('../../assets/icons/normal.png'),
            price: '100000',

        },
        {
            name: 'Composition',
            description: `Input Service Distributor means an office of the supplier of goods/services which receives tax invoices on receipt of input services and issues tax invoices for the purpose of distributing the credit of CGST/SGST/IGST paid on the said services to your branch with the same PAN. (It must be a supplier of taxable goods /services having the same PAN as that of the office referred to above).

            Thus, only credit on ‘input services can be distributed and not on input goods or capital goods.
            
            This will be a new concept for assessees who are currently not registered as input service distributors. However, this facility is optional in nature.
            
            .`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Casual Taxable Person',
            description: `Any person who occasionally supplies goods and/or services in a territory where GST is applicable but he does not have a fixed place of business. Such a person will have to treat as a casual taxable person as per GST.

            For example, A person who has a place of business in Bangalore and supplies taxable consulting services in Pune where he has no place of business would be treated as a casual taxable person in Pune.`,
            image: require('../../assets/icons/casual.png'),
        },
        {
            name: 'Input Service Distributor (ISD)',
            description: `Input Service Distributor means an office of the supplier of goods/services which receives tax invoices on receipt of input services and issues tax invoices for the purpose of distributing the credit of CGST/SGST/IGST paid on the said services to your branch with the same PAN. (It must be a supplier of taxable goods /services having the same PAN as that of the office referred to above).

            Thus, only credit on ‘input services can be distributed and not on input goods or capital goods.
            
            This will be a new concept for assessees who are currently not registered as input service distributors. However, this facility is optional in nature.`,
            image: require('../../assets/icons/normal.png'),
            price: '100000',

        },
        {
            name: 'Non-Resident Taxable Person',
            description: `When a non-resident occasionally supplies goods/services in a territory where GST applies but does not have a fixed place of business in India.

            As per GST, he will be treated as a non-resident taxable person.
            
            It is similar to the above except the non-resident has no place of business in India.`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Non-Resident Online Service Distributor',
            description: `Online information and database access or retrieval services mean services provided by the means of Information Technology, over the internet or electronic network such as advertising on the internet, cloud services, e-books, downloading movies, software, online supplies of digital content (movies, t.v shows, music, data storage, gaming, etc.

                Every person supplying online information and database access or retrieval services from a place outside India to a person in India, other than the registered person (hereinafter referred to as Non-Resident Online Services Provider), is required to register in GST as a provider of OIDAR Services.  
                
                other than the registered person (hereinafter referred to as Non-Resident Online Services Provider), is required to register in GST as a provider of OIDAR Services.  
                
                So, for the provision of OIDAR Services by such foreign service providers to the unregistered persons in India, obtaining Registration by such foreign service providers is mandatory.
                
                In the case of Non-Resident Online Service Providers, Single Registration will be valid for PAN India.
                
                For all such persons, the processing of registration and subsequent action will be done centrally at the Office of Principal Commissioner of Central Tax, Bengaluru West.
                
                Such Non-Resident Online Service Providers need to appoint an Authorised Signatory (Indian) in India possessing a valid PAN. That Authorised person shall apply for registration at the GST portal on behalf of such Non-Resident Online Service Providers. `,
            image: require('../../assets/icons/casual.png'),
        },
        {
            name: 'Embassy/UN Body/ Other Notified Persons',
            description: `UIN stands for Unique Identity Number, granted to UN Bodies and Embassies on the basis of the letter issued by the Ministry of External Affairs (MEA).

            A UIN can also be granted to any other Notified Persons (as may be notified by the Commissioner) on the basis of a request received from the respective notified organization.
            
            UIN enables the UN Bodies, Embassies, and Other Notified Persons to get the supplies of taxable goods /services from the registered persons.
            
            The relevance of UIN is that it needs to be mentioned on purchase invoices so that the UIN holder could claim a refund of GST paid on such transactions on the basis of Form RFD -10, which is generated after their filing Statement of such inward supplies in Form GSTR-11.
            
            You can apply for registration as UN Bodies/ Embassies/Other Notified Person for allotment of UIN directly on the GST Portal. Navigate to Services > Registration > New Registration option.
            
            Select the New Registration option and United Nation Body/ Consulate or Embassy of Foreign Country/ Other Notified Person from I am a drop-down list.
            
            UN Bodies/ Embassies/Other Notified Person must fulfill the following conditions so that they can file an application for allotment of UIN on the GST Portal:
            
            1. The applicant is not already registered in the State i.e. he does not have UIN for this entity in that State.
            
            Note: UN Bodies/ Embassies are not required to take state-wise registration but one single registration is enough for them for the whole of India. Other Notified Person is required to take state-wise registration.
            
            2. Applicant has a valid Indian mobile number
            
            3. Applicant has a valid E-mail Address
            
            4. The applicant has the prescribed documents and information on all mandatory fields as required for registration
            
            5. Applicant has an authorized signatory with valid details.
            
            `,
            image: require('../../assets/icons/normal.png'),
            price: '100000',

        },
        {
            name: 'Special Economic Zone (SEZ) Developer/ Unit',
            description: `SEZ developers and SEZ Units are required to be registered a-fresh in the GST regime.

            You need to apply for new registration, as a separate business vertical under GST.
            
            And You need to select SEZ Unit or SEZ developer in the “reason to obtain registration” in the Business Detail tab. You are required to upload the necessary certificate/documents issued by the Government of India, as proof of you being SEZ unit or Developer in the “principal place of business” tab, to substantiate your claim.
            
            In case you had selected SEZ as one of the Business Activities in the Enrolment Form, your Primary Authorized signatory should have received an email seeking your input for identifying the GSTIN as SEZ Unit or Developer. In case, you have not received such an email from GST system ID or missed to select SEZ as Business Activity, you may approach the Jurisdictional Tax Authority, who in turn may raise a request to the GST system for making this change.
            
            And in case, you have not received such an email from GST system ID or missed selecting SEZ as Business Activity, you may approach the Jurisdictional Tax Authority, who in turn may raise a request to the GST system for making this change.
            
            In case, you have not received such an email from GST system ID or missed to select SEZ as Business Activity, you may approach the Jurisdictional Tax Authority, who in turn may raise a request to the GST system for making this change..`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Tax Deductor at Source (TDS) /Tax Collector at Source (TCS)',
            description: `TDS stands for Tax Deducted at Source (TDS). All Department or establishment of Centre / State Government, Local Authority, Government Agencies & Persons or category of persons notified by Central / State Government Governments, making contractual payments in excess of INR 2.5 Lakhs to suppliers need to register as a TDS under GST.

            In the GST regime, while making such payment in excess of INR 2.5 Lakhs, the concerned Department or establishment of Centre / State Government, Local Authority, Government Agencies & Persons or category of persons notified by Central / State Government Governments needs to deduct 1% under CGST Act and 1% under SGST Act;
            
            In case of inter-state transactions, 2% (under the IGST Act) of the total payable amount and remit it into the appropriate GST account. The credit for such GST payments will be given to the suppliers.
            
            The Registration Application for Tax Deductor/Tax Collector can be filed by the applicant directly themselves.
            
            In the GST regime, the registration process is online and any person/entity wishing to register will have to access the GST system for the same.
            
            Any person who wishes to get registered as the Tax Deductor/Tax Collector needs to apply in the form prescribed.
            
            The preconditions are:
            
            1. Applicant has valid PAN or TAN.
            
            2. Applicant must have a valid mobile number.
            
            3. Applicant must have a valid E-mail ID.
            
            4. Applicant must have the prescribed documents and information on all mandatory fields as required for registration.
            
            5. Applicant must have a place of business.
            
            6. Applicant must have an authorized signatory with valid details.
            
            Finally, you should read all types of GST Registration before applying for GST registration.`,
            image: require('../../assets/icons/casual.png'),
        },

    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.flatlistMainView} onPress={() => {
                // dispatch(messagePopUpActions({
                //     headerText : "jay shah",
                //     desc : `pjkskjadgjhasghjdgasjhdgjahsgdhjgasd.
                //     You may also install the standalone version of React Developer Tools to inspect the React component hierarchy, their props, and state.
                //     Status: Debugger session` ,
                //     butnTxt : "masbdkjashjkdh ",
                // }))


                props.navigation.navigate("ProductDetailsGst" , {item: item});
                // ProductDetailsGst
                // setShowModal(true);
                // setSelecetedData(item);
            }

            }>
                <View style={styles.rowWiseChild}>
                    <Image source={item.image} style={styles.flatListIconStyle} />
                    <View>
                        <Rtext>{item?.name}</Rtext>
                        <Rtext style={{ width: width - 140, fontSize: 12, color: 'silver', marginTop: 5 }}>{item?.description?.substr(0,119)}</Rtext>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                data={Data}
                renderItem={renderItem}

            />

           



        </SafeAreaView>
    )
}
export default GstMenu;

const styles = StyleSheet.create({

    flatlistMainView: {
        paddingVertical: 15,
        backgroundColor: Colors.white,
        marginBottom: 5,
        borderRadius: 10
    },
    rowWiseChild: {
        flexDirection: 'row'
    },
    flatListIconStyle: {
        height: 64,
        width: 64,
        resizeMode: 'contain',
        marginHorizontal: 15
    }
})