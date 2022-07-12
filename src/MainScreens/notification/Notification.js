import React, { useState } from "react";
import {
    View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions
} from "react-native";
import { Colors, Fonts } from "../../assets/common/common";
import { Rtext } from "../../CommonComponents/common/Rtext";



const { width, height } = Dimensions.get('window')

const Notifications = () => {
    const Data = [

        {
            name: 'What is GST registration?',
            description: `GST registration is the process by which a taxpayer gets registered under Goods and Service Tax (GST) in the different types of GST registration as per their requirement. Once the registration process has been completed, the Goods and Service Tax Identification Number (GSTIN) is provided. The 15-digit GSTIN is provided by the Central Government and helps to determine whether a business is liable to pay GST.`,
        },
        {
            name: 'Who is eligible for different types of GST registration?',
            description: `GST Registration must be completed by the following individuals and businesses-

            1) Individuals who registered under the tax services before the GST law came into effect.\n
            2) Non-Resident Taxable Person and Casual Taxable Person\n
            3) Individuals who pay tax under the reverse charge mechanism\n
            4) All e-commerce aggregators\n
            5) Businesses that have a turnover that exceeds Rs.40 lakh. In the case of special category states Rs. 20 lakh.\n
            6) Input service distributors and agents of a supplier\n
            7) Individuals who supply goods through an e-commerce aggregator.\n
            8) Individuals providing database access and online information from outside India to people who live in India other than those who are registered taxable persons.\n`,
            image: require('../../assets/icons/query.png'),
        },
        {
            name: 'What are the benefits of GST registration?',
            description: `There are many benefits of GST registration-some are given below-

            1) Goods can be sold online and offline without fear.\n
            2) Goods can be sold across the country.\n
            3) No issue in transportation of goods.\n
            4) GST registration acts as valid proof as it is a legal entity registration.\n
            5) Input tax credit can be availed when any goods or services are being purchased.\n
            6) With the help of a GSTIN, a current bank account can be opened.\n
            7) The GSTIN helps in increasing the brand value of the business.\n
            8) Big projects can be accepted from Multinational Corporations (MNCs)\n`,
            image: require('../../assets/icons/casual.png'),
        },

        {
            name: 'GST,',
            description: `GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
            image: require('../../assets/icons/normal.png'),
        },
        {
            name: 'Composition',
            description: `Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Casual',
            description: 'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
            image: require('../../assets/icons/casual.png'),
        },
        {
            name: 'GST',
            description: `GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
            image: require('../../assets/icons/normal.png'),
        },
        {
            name: 'Composition',
            description: `Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Casual',
            description: 'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
            image: require('../../assets/icons/casual.png'),
        },
        {
            name: 'GST',
            description: `GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
            image: require('../../assets/icons/normal.png'),
        },
        {
            name: 'Composition',
            description: `Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Casual',
            description: 'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
            image: require('../../assets/icons/casual.png'),
        },

        {
            name: 'GST,',
            description: `GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
            image: require('../../assets/icons/normal.png'),
        },
        {
            name: 'Composition',
            description: `Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Casual',
            description: 'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
            image: require('../../assets/icons/casual.png'),
        },
        {
            name: 'GST',
            description: `GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
            image: require('../../assets/icons/normal.png'),
        },
        {
            name: 'Composition',
            description: `Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Casual',
            description: 'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
            image: require('../../assets/icons/casual.png'),
        },
    ]


    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                data={Data}
                renderItem={({ item, index }) => <RenderItem item={item} index={index} />}

            />
        </SafeAreaView>
    )
}
export default Notifications;



const RenderItem = ({ item, index }) => {

    const [read, setRead] = useState(false)
    return (
        <View>
            <TouchableOpacity style={{ ...styles.flatlistMainView, backgroundColor: read ? Colors.white : Colors.lightSilver }} onPress={() => {
                setRead(true);
            }}>
                <View style={{ ...styles.rowWiseChild, justifyContent: 'space-between' }}>
                    <View style={styles.rowWiseChild}>
                        <Image source={require('../../assets/icons/query.png')} style={styles.flatListIconStyle} />
                        <View>
                            <Rtext style={{ width: width - 130, fontSize: 14 , fontFamily : Fonts.latoBold }} >{item?.name}</Rtext>

                        </View>

                    </View>

                </View>
                <Rtext style={{ width: width - 90, marginLeft: 50,marginTop : 10, fontSize: 12, color: !read ? Colors.white : Colors.silver, marginBottom: 15 }}>{item?.description.substr(0, 119)}</Rtext>

            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({

    flatlistMainView: {
        paddingVertical: 10,
        backgroundColor: Colors.silver,
        marginBottom: 5,
        borderRadius: 10
    },
    rowWiseChild: {
        flexDirection: 'row'
    },
    flatListIconStyle: {
        height: 24,
        width: 30,
        resizeMode: 'contain',
        marginHorizontal: 15
    }
})