import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Pressable, Modal, FlatList, Image } from 'react-native'
import { Colors, Fonts } from '../../assets/common/common'
import { CusButtom } from '../../CommonComponents/common/CusButtom'
import { Rtext } from '../../CommonComponents/common/Rtext'
//import Modal from 'react-native-modal';
import { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import subscription from '../../Store/subscription'
import { subscription } from '../../Store/subscription'
import moment from 'moment'
import { useIsFocused } from '@react-navigation/native'


const DATA = [
    {
        name: 'koushik',
        desc: 'is simply dummy text of the printing and typesetting industry'
    },
    {
        name: 'souvik',
        desc: 'is simply dummy text of the printing and typesetting industry'
    },
    {
        name: 'Ranjan',
        desc: 'is simply dummy text of the printing and typesetting industry'
    },
    {
        name: 'jay',
        desc: 'is simply dummy text of the printing and typesetting industry'
    },
]



const MySubscription = (props) => {
const isfocus = useIsFocused()
    // const [modalVisible, setModalVisible] = useState(!paid);
    const userTokenInfo = useSelector(state => state.auth.userTokenInfo);
    const userId = userTokenInfo.userId

    console.log('userTokenInfo data============', userTokenInfo);
    console.log('userTokenInfo id============', userId);


    const SuscriptionData = useSelector(state => state.subscription.subscription);
    // const paid=SuscriptionData.isPaid
    console.log('Subscription data============', SuscriptionData);
    // console.log('Subscription ispaid============', paid);



    // console.log('iddddddddd======',SuscriptionData.purchaseMonth)
    const dispatch = useDispatch();
    useEffect(() => {
        if(isfocus){
            dispatch(subscription({ userId }))
        }
    

    }, [isfocus])
    return (
        <SafeAreaView>
            <KeyboardAwareScrollView>
                <View style={{ paddingHorizontal: 10 }}>


                    {
                        !SuscriptionData?.isPaid &&

                        <>

                            <View style={{ paddingHorizontal: 10, marginTop : 20}}>
                                <Rtext style={{ color: Colors.black, fontFamily: Fonts.latoBold, fontsize: 20, }}>{"Subscription for Month  " +   moment().format('MMMM')}</Rtext>
                                <View style={{ height: 1, borderColor: Colors.black, borderWidth: 1, justifyContent: 'center', marginTop: 4, width: 220 }} />
                            </View>
                            <View style = {{paddingVertical : 60 ,backgroundColor : Colors.white , borderRadius : 20, marginTop : 10 , alignItems :'center', justifyContent :'center' }}>
                              <Image style = {{tintColor : Colors.mainblue , height : 60 , width : 60 , resizeMode :'contain'}} source = {require('../../assets/icons/suscription.png')} />
                            <Rtext style={{ fontFamily : Fonts.latoBold ,  paddingHorizontal: 40, marginTop: 10 }}> {"You dont have any active Plan"}</Rtext>
                            </View>
                            <View style={{}} >
                            </View>

                            <View style = {{width : "70%" ,alignSelf :'center'}}>
                    <CusButtom onpress = {() => props.navigation.navigate('Home')} textStyle = {{fontFamily : Fonts.latoBlack}} source = {require('../../assets/icons/cal.png')}  image = {true} ImgStyle = {{height : 30 , width : 30 ,tintColor : Colors.white, resizeMode : "contain" , marginRight : 10}} text={'Suscribe now'} />
                </View>
                        </>
                    }



                    {SuscriptionData?.isPaid && <>
                        <View style={{ width: '100%', paddingHorizontal: 10 }}>
                            <View style={{ paddingHorizontal: 10, }}>
                                <Rtext style={{ color: Colors.black, fontFamily: Fonts.latoBold, fontsize: 20, }}>Monthely Subscription:</Rtext>
                                <View style={{ height: 1, borderColor: Colors.black, borderWidth: 1, justifyContent: 'center', marginTop: 4, width: 150 }} />
                            </View>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Rtext style={{ fontFamily: Fonts.latoBlack, paddingVertical: 7 }}>Category Name:<Rtext> SGST</Rtext> </Rtext>
                                <Rtext style={{ fontFamily: Fonts.latoBlack, paddingVertical: 4 }}>DESC: <Rtext> is simply dummy text of the printing</Rtext></Rtext>
                            </View>
                            <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Rtext style={{ fontFamily: Fonts.latoBlack, paddingVertical: 4 }} >Start Date:<Rtext>12-Aug-2022</Rtext></Rtext>
                                <Rtext style={{ fontFamily: Fonts.latoBlack, paddingVertical: 4 }}>End Date:<Rtext>12-sep-2022</Rtext></Rtext>
                            </View>



                        </View>
                    </>
                    }

                    {
                        SuscriptionData?.isPaid &&
                        <FlatList
                            ListHeaderComponent={() => (
                                <Rtext style={{ marginVertical: 20, color: Colors.black, fontFamily: Fonts.latoBold, fontsize: 20, }}>Document:</Rtext>
                            )}
                            ListFooterComponent={() => (
                                <View style={{ paddingVertical: 20, }}>
                                    <CusButtom BTNstyle={{ marginHorizontal: "10%" }} text={'Upload'}
                                    // onpress={() => setModalVisible(true)}
                                    />
                                </View>
                            )}
                            data={DATA}
                            // renderItem={renderItem} 
                            renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
                            keyExtractor={item => item.id}
                        />
                    }



                </View>



              
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}


const RenderItem = ({ item, index }) => {
    return (

        <View style={{}}>
            {<>
                < TouchableOpacity style={styles.flatlistMainView}>
                    <View style={styles.rowWiseChild}>


                        <Image source={require('../../assets/icons/image.png')} style={styles.flatListIconStyle} />
                        <View style={{ flexDirection: 'column', width: '60%' }}>
                            <Rtext >{item.name}</Rtext>
                            <Rtext>{item.desc}</Rtext>
                        </View>
                        <Image style={{ position: 'absolute', top: 10, right: 10 }} source={require('../../assets/icons/threedots.png')} />
                    </View>

                </TouchableOpacity>
            </>
            }
        </View>
    )
}

export default MySubscription



const styles = StyleSheet.create({
    flatlistMainView: {
        paddingVertical: 15,
        backgroundColor: Colors.white,
        marginBottom: 5,
        // marginHorizontal: 15,
        borderRadius: 10,
    },
    rowWiseChild: {
        flexDirection: 'row',
    },
    flatListIconStyle: {
        height: 64,
        width: 64,
        resizeMode: 'cover',
        borderWidth: 1,
        borderColor: Colors.mainblue,
        borderRadius: 4,
        marginHorizontal: 15,
    },
});