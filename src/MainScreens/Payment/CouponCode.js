import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../assets/common/common'
import { Fonts } from '../../assets/common/common';
import { Rtext } from '../../CommonComponents/common/Rtext';
import { getCoupon } from '../../Store/coupon';
// import { dispatch } from 'jest-circus/build/state';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RazorpayCheckout from 'react-native-razorpay';


const CouponCode = (props) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.coupon.getCoupon);
    console.log('==================', data)
    useEffect(() => {
        dispatch(getCoupon())
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}

                renderItem={({ item, index }) => <RenderItem item={item} props={props} />}
            // keyExtractor={item => item.id}
            />

        </SafeAreaView>
    );
}

const RenderItem = ({ item, props }) => {
const   makePayment=()=>{
    var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_GQvvt2m7UTpdIw', // Your api key
        amount: '5000',
        name: 'TechnoPlat',
        prefill: {
          email: 'Shouvik@razorpay.com',
          contact: '8961700942',
          name: 'Razorpay Software'
        },
        theme: {color: '#F37254'}
      }
      RazorpayCheckout.open(options).then((data) => {


        // handle success
        alert(`Payment Successfull: ${data.razorpay_payment_id}`);
      }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
}
    return (
        <TouchableOpacity onPress={makePayment}>
            <View style={{ flex: 1, alignItems: "center", width: "100%", borderRadius: 15 }}>
                <View style={styles.card}>
                    <View style={styles.offer}>
                        <Rtext style={styles.offerText}>15% OFF</Rtext>
                    </View>
                    <View>
                        <View style={styles.upView}>
                            <Image source={require('../../assets/icons/coupon.png')} style={styles.logo}></Image>
                            <Rtext style={styles.couponCode} >{item.couponCode}</Rtext>
                            <TouchableOpacity>
                                <Rtext style={{ color: Colors.mainblue, fontFamily: Fonts.latoBold, marginLeft: 50 , borderBottomColor : Colors.mainblue , borderBottomWidth : 1 }}>APPLY</Rtext>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ color: "#00C269", width: "60%", marginBottom: 5 }}>{item.couponValue}</Text>
                        </View>
                        <View style={{ height: 1, width: "85%", borderColor: Colors.mainblue, borderWidth: .5 }}></View>
                        <Text style={{ marginLeft: 5, width: "85%" }}>{item.descriPtion}</Text>
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
        backgroundColor: Colors.lightSilver,
    },
    card: {
        flexDirection: "row",
        height: 150,

        backgroundColor: Colors.white,
        borderRadius: 10,
        width: "95%",
        marginVertical: 10,
    },
    offer: {
        borderTopLeftRadius: 14,
        backgroundColor: Colors.mainblue,
        width: "20%",
        justifyContent: "center",
        borderBottomLeftRadius: 14,
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
    logo: {
        marginLeft: 5,
        borderColor: Colors.mainblue,
        // borderWidth: 0.3,
        width: 50,
        height: 50,
        tintColor: Colors.silver
        // borderRadius: 3,

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
    couponCode: {
        fontFamily: Fonts.latoBold,
        fontSize: 13,
        width: 95,
        marginLeft: 5,
    }
});

export default CouponCode;