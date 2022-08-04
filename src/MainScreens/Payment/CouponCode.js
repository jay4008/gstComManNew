import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Fonts } from '../../assets/common/common';
import { Rtext } from '../../CommonComponents/common/Rtext';

const DATA = [
    {
        id: '1',
        off: '15%',
        title: 'PAYZAPP75',
        offer: 'Save 75 on this offer using SBI Credit Card',
        desc: 'Use code PAYZAPP75 & get 30% off on Order'
    },
    {
        id: '2',
        off: "75%",
        title: 'MBK100',
        offer: 'Save 75 on this offer using AXIS Credit Card',
        desc: 'Use code PAYZAPP75 & get 30% off on Order'
    },
    {
        id: '3',
        off: "FLAT 100 OFF",
        title: 'FCH25',
        offer: 'Save 75 on this offer using UCO Credit Card',
        desc: 'Use code PAYZAPP75 & get 30% off on Order ',
    },
    {
        id: '4',
        off: "FLAT 200 OFF",
        title: 'SWIGGYIT',
        offer: 'Save 75 on this offer',
        desc: 'Use code PAYZAPP75 & get 30% off on Order'
    },
];

const CouponCode = () => {


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const renderItem = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={{ flex: 1, alignItems: "center", width: "100%" }}>

                <View style={styles.card}>


                    <View style={styles.offer}>
                        <Rtext style={styles.offerText}>15% OFF</Rtext>
                    </View>

                    <View>
                        <View style={styles.upView}>
                            <Image source={require('../../assets/bank.png')} style={{ marginLeft: 5, borderColor: "#808080", borderWidth: 1, width: 30, height: 30, borderRadius: 3 }}></Image>
                            <Rtext fontSize={16}>{item.title}</Rtext>
                            <TouchableOpacity>
                                <Text style={{ color: "#D77D00", fontFamily: Fonts.latoBold, marginLeft: 50 }}>APPLY</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ color: "#00C269", width: "60%", marginBottom: 5 }}>{item.offer}</Text>


                        </View>
                        <View style={{ height: 1, width: "85%", borderColor: "#D77D00", borderWidth: .5 }}></View>

                        <Text style={{ marginLeft: 5, width: "85%" }}>{item.desc}</Text>
                        <TouchableOpacity>
                            <Text style={{ marginLeft: 5, fontWeight: "600" }}>+More</Text>
                        </TouchableOpacity>
                    </View>




                </View>

            </View>
        </TouchableOpacity>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    card: {
        flexDirection: "row",
        height: 150,
        backgroundColor: "#C0C0C0",
        borderRadius: 10,
        width: "95%",
        marginVertical: 10,
    },
    offer: {
        backgroundColor: "#D77D00",
        width: "20%",
        justifyContent: "center"
    },
    offerText: {
        color: "#FFF",
        fontSize: 25,
        fontFamily: Fonts.latoBold,
        alignSelf: "center",
        transform: [{ rotate: '270deg' }]
    },
    upView: {
        width: "80%",
        flexDirection: "row",
        paddingVertical: 10,
        justifyContent: "space-between",
        padding: 5
    },
    item: {
        backgroundColor: '#C0C0C0',
        marginVertical: 8,
        marginHorizontal: 15,
        height: 150,


    },
    title: {
        fontSize: 32,
    },
});

export default CouponCode;