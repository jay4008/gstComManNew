import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Pressable, Modal, FlatList, Image, Dimensions } from 'react-native'
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
import DocSelection from '../popup/DocModal';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
const { width, height } = Dimensions.get('window');


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
    const [docPicker, setDocPicker] = useState(false);
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
        if (isfocus) {
            dispatch(subscription({
                user: userId
            }))
        }


    }, [isfocus])

    const openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setDocPicker(false);
            console.log(image);
        });
    };

    const openGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setDocPicker(false);
            console.log(image);
        });
    };


    const uploadDoc = async () => {


        try {
            const results = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.allFiles],
            });
            setDocPicker(false);
        } catch (err) {

            console.log("err", err);
        }
    };






    return (
        <SafeAreaView style={{backgroundColor:Colors.white}}>
            <KeyboardAwareScrollView>


                {!SuscriptionData?.isPaid && <>
                    <View style={{ width: '100%', backgroundColor: Colors.primaryColor, paddingHorizontal: 10, paddingTop: 30, paddingBottom: 60, borderBottomRightRadius: 40, borderBottomLeftRadius: 40 }}>
                        <View style={{ paddingHorizontal: 10, }}>
                            <Rtext style={{ color: Colors.white, fontFamily: Fonts.latoBlackItalic, fontSize: 26, }}>Monthely Subscription</Rtext>
                            <View style={{ height: 1, borderColor: Colors.white, borderWidth: 0.5, justifyContent: 'center', marginTop: 4, width: 258 }} />
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Rtext style={{ fontFamily: Fonts.latoBlack, paddingVertical: 7, color: Colors.white, }}><Rtext style={{ color: Colors.white }}> SGST</Rtext> </Rtext>
                            <Rtext style={{ fontFamily: Fonts.latoBlack, paddingVertical: 4, color: Colors.white }}> <Rtext style={{ color: Colors.white }}>is simply dummy text of the printing</Rtext></Rtext>
                        </View>
                        <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            {/* <Rtext style={{ fontFamily: Fonts.latoBlack, paddingVertical: 4  ,color: Colors.white}} ><Rtext style={{fontSize:15 ,color: Colors.white}}>12-Aug-22</Rtext></Rtext>
                                <Rtext style={{ fontFamily: Fonts.latoBlack, paddingVertical: 4 ,color: Colors.white}}><Rtext style = {{color: Colors.white}}>12-sep-
                                    </Rtext></Rtext> */}

                            <Rtext style={{ color: Colors.white }} >
                                {"Suscribed the gst-Comman for  Augest 2022"}
                            </Rtext>
                        </View>
                    </View>
                </>
                }
                <View style={{ paddingHorizontal: 10 }}>


                    {
                        SuscriptionData?.isPaid &&

                        <>

                            <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                                <Rtext style={{ color: Colors.black, fontFamily: Fonts.latoBold, fontsize: 20, }}>{"Subscription for Month  " + moment().format('MMMM')}</Rtext>
                                <View style={{ height: 1, borderColor: Colors.black, borderWidth: 1, justifyContent: 'center', marginTop: 4, width: 220 }} />
                            </View>
                            <View style={{ paddingVertical: 60, backgroundColor: Colors.white, borderRadius: 20, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ tintColor: Colors.mainblue, height: 60, width: 60, resizeMode: 'contain' }} source={require('../../assets/icons/suscription.png')} />
                                <Rtext style={{ fontFamily: Fonts.latoBold, paddingHorizontal: 40, marginTop: 10 }}> {"You dont have any active Plan"}</Rtext>
                            </View>
                            <View style={{}} >
                            </View>

                            <View style={{ width: "70%", alignSelf: 'center' }}>
                                <CusButtom onpress={() => props.navigation.navigate('Home')} textStyle={{ fontFamily: Fonts.latoBlack }} source={require('../../assets/icons/cal.png')} image={true} ImgStyle={{ height: 30, width: 30, tintColor: Colors.white, resizeMode: "contain", marginRight: 10 }} text={'Suscribe now'} />
                            </View>
                        </>
                    }




                    {
                        !SuscriptionData?.isPaid &&
                        <FlatList
                            ListHeaderComponent={() => (
                                <Rtext style={{ marginVertical: 20, color: Colors.black, fontFamily: Fonts.latoBold, fontsize: 20, }}>Document:</Rtext>
                            )}
                            ListFooterComponent={() => (
                                <View style={{ paddingVertical: 20, }}>
                                    <CusButtom BTNstyle={{ marginHorizontal: "10%" }} text={'Upload Document'}
                                        // onpress={() => setModalVisible(true)}
                                        onpress={() => {
                                            setDocPicker(true);
                                        }}
                                    />
                                </View>
                            )}
                            data={DATA}
                            // renderItem={renderItem} 
                            renderItem={({ item, index }) => <RenderItem item={item} index={index} props={props} />}
                            keyExtractor={item => item.id}
                        />
                    }



                </View>

                {docPicker && (
                    <DocSelection
                        onPressDoc={() => uploadDoc()}
                        onPressCamera={() => openCamera()}
                        onPressGallery={() => openGallery()}
                        setIsVisible={setDocPicker}
                        isVisible={true}
                    />
                )}


            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const CustomMenu = ({ }) => {
    const dispatch = useDispatch()
    return (
        <View style={{ position: 'absolute', top: 10, right: 0 }}>
            <Menu>
                <MenuTrigger>
                    <Image
                        source={require('../../assets/icons/dot.png')}
                        style={{
                            height: 30,
                            width: 30,
                            resizeMode: 'contain',
                            tintColor: Colors.primaryColor,
                        }}></Image>
                </MenuTrigger>
                <MenuOptions>
                    {/* <MenuOption onSelect={() => alert(`Save`)}>
              <Text style={styles.menuOptionTxt}>Export to pdf</Text>
            </MenuOption> */}
                    <MenuOption onSelect={() => dispatch(deleteCollection(index))}>
                        <Text style={styles.menuOptionTxt}>Delete Collection</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </View>
    );
};


const RenderItem = ({ item, index, props }) => {
    return (

        <View style={{backgroundColor:Colors.white}}>

            {/* < TouchableOpacity style={styles.flatlistMainView}
                onPress={() => props.navigation.navigate('DocList')}>
                
                    <View style={styles.rowWiseChild}>
                    <CustomMenu index = {index} />

                        <Image source={require('../../assets/icons/image.png')} style={styles.flatListIconStyle} />
                        <View style={{ flexDirection: 'column', width: '60%' }}>
                            <Rtext >{item.name}</Rtext>
                            <Rtext>{item.desc}</Rtext>
                        </View>
    
                    </View>
                </TouchableOpacity> */}


            <View
                style={styles.flatlistMainView}
            >

                <CustomMenu />
                <View style={styles.rowWiseChild}>
                    <Image
                        source={

                            require('../../assets/icons/image.png')

                        }
                        style={styles.flatListIconStyle}
                    />
                    <View>
                        <Rtext>{item?.name}</Rtext>
                        <Rtext
                            style={{
                                width: width - 140,
                                fontSize: 12,
                                color: 'silver',
                                marginTop: 5,
                            }}>
                            {item?.desc}
                        </Rtext>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default MySubscription



const styles = StyleSheet.create({
    flatlistMainView: {
        paddingVertical: 15,
        backgroundColor: Colors.white,
        marginBottom: 5,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth : 1,
        borderColor : Colors.silver
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
    menuOptionTxt: {
        color: Colors.black,
        fontFamily: Fonts.latoRegular,
        fontSize: 14,
        paddingVertical: 15,
        marginLeft: 10,
    },
});