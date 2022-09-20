import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors, Fonts } from '../../assets/common/common'
import { Ainput } from '../../CommonComponents/common/Ainput'
import { CusButtom, RadioButton } from '../../CommonComponents/common/CusButtom'
import { Rtext } from '../../CommonComponents/common/Rtext'
import { getalldata } from '../../Store/auth'
import { getalldatabyid } from '../../Store/auth'
import Modal from "react-native-modal";
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { useIsFocused } from '@react-navigation/native'
const Purchase = () => {
    const dispatch = useDispatch();
    const [radioValue, setradioValue] = useState("");
    const [modal, setModal] = useState(false);
    const isfocus = useIsFocused()
    const [modal1, setModal1] = useState(false);
    const userTokenInfo = useSelector(state => state.auth.userTokenInfo);
    const showinfo = useSelector(state => state.auth.getuseralldata);
    const getalldata = useSelector(state => state.auth.getalldatabyid);
    //const leng = showinfo.usersMsg.length

    // const newdata = useSelector(state => state.auth.userTokenInfo.userId);
    //  console.log("++++++++++++++++++++++++++++++++", userTokenInfo);
    //  const id =userTokenInfo.userId
    // console.log('-----------------------------', id);
    // console.log('**********************************', showinfo);
    const id = userTokenInfo.userId


    useEffect(() => {
        if (isfocus) {
            dispatch(getalldatabyid({
                id: userTokenInfo.userId
            }))
        }
    }, [isfocus])

    const renderItem = ({ item }) => {
        console.log("item....", item);
        return (
            <TouchableOpacity style={{ flex: 1, paddingHorizontal: 10, }}>
                <View style={{ height: 1, backgroundColor: Colors.silver, marginTop: 20 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image style={{height:50,width:50,resizeMode:'contain',tintColor:Colors.primaryColor}}source={require('../../assets/icons/purchase.png')} />
                    <View style={{ flexDirection: 'column', width: '50%', justifyContent: 'flex-start' }}>
                        <Rtext style={{ paddingVertical: 5, fontFamily: Fonts.latoBlack }}>{item?.amount}</Rtext>
                        <Rtext>{moment(item.subscriptionDate, "DD/MM/YYYY").format('MMMM')}</Rtext>
                        <Rtext>{item.subscriptionDate}</Rtext>
                        {/* <CusButtom text={'shared by Koushik Sham'} BTNstyle={{width:'100%',alignSelf :'center',backgroundColor:Colors.silver,}}/> */}
                    </View>
                    <Image source={require('../../assets/icons/grater.png')} style={{ height: 20, width: 20, resizeMode: 'contain', paddingVertical: 30 }} />
                </View>

            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 15 }}>
                <Ainput placeholder={'Search Your order Here'} image={true} source={require('../../assets/icons/search.png')}></Ainput>
            </View>
            <View style={styles.view1}>
                <CusButtom onpress={() => setModal1(true)} image={true} ImgStyle={styles.imgStyle} source={require('../../assets/icons/sort.png')} text={'Sort By'} BTNstyle={styles.shortAndfilter} textStyle={styles.textStyle} />
                <CusButtom onpress={() => setModal(true)} image={true} ImgStyle={styles.imgStyle} source={require('../../assets/icons/filter.png')} text={'Filter'} BTNstyle={styles.shortAndfilter} textStyle={styles.textStyle} />
            </View>
            <FlatList renderItem={renderItem} data={getalldata} />
            {modal && (
                <Modal isVisible={true}
                    animationType="slide">
                    <View
                        style={{
                            paddingVertical: 20,
                            backgroundColor: '#fff',
                            paddingHorizontal: 20,
                            borderRadius: 10,
                        }}>
                        <Rtext style={{ alignSelf: 'center', fontFamily: Fonts.latoBold, fontSize: 18, color: Colors.primaryColor }}>Filter options</Rtext>
                        <View style={{ height: 1, backgroundColor: Colors.silver, marginTop: 20 }} />
                        <RadioButton setradioValue={setradioValue} arrlist={[moment().format("YYYY"), `${parseInt(moment().format("YYYY")) - 1}`, `${parseInt(moment().format("YYYY")) - 2}`, `${parseInt(moment().format("YYYY")) - 3}`, `${parseInt(moment().format("YYYY")) - 4}`]} setModal={setModal} />
                        <CusButtom onpress={() => setModal(false)} text={'cancel'} BTNstyle={{ backgroundColor: Colors.primaryColor }} />
                    </View>
                </Modal>
            )}
            {modal1 && (
                <Modal isVisible={true}
                    animationType="slide">
                    <View
                        style={{
                            paddingVertical: 20,
                            backgroundColor: '#fff',
                            paddingHorizontal: 20,
                            borderRadius: 10,
                        }}>
                        <Rtext style={{ alignSelf: 'center', fontSize: 18, color: Colors.primaryColor, fontFamily: Fonts.latoBlack }}>Sort by</Rtext>
                        <View style={{ height: 1, backgroundColor: Colors.primaryColor, marginTop: 20 }} />
                        <CusButtom textStyle={styles.textStyle1} BTNstyle={styles.BTNstyle} onpress={() => setModal1(false)} text={'Assending Order'} />
                        <CusButtom textStyle={styles.textStyle1} BTNstyle={styles.BTNstyle} onpress={() => setModal1(false)} text={'Desending Order'} />
                        <CusButtom BTNstyle={styles.BTNstyle1} onpress={() => setModal1(false)} text={'Cancel'} />
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    )
}
export default Purchase;

const styles = StyleSheet.create({
    view1: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',

    },
    shortAndfilter: {
        width: '49%',
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: Colors.primaryColor,
    },
    imgStyle: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
        tintColor: "#fff"
    },
    textStyle: {
        marginLeft: 10
    }
    ,
    BTNstyle: {
        borderColor: Colors.primaryColor,
        borderWidth: 1,
        backgroundColor: Colors.white
    },
    BTNstyle1: {
        backgroundColor: Colors.primaryColor
    },
    textStyle1: {
        color: Colors.primaryColor
    }


})




