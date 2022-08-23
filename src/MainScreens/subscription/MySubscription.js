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



const MySubscription = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const Data = useSelector(state => state.subscription.subscription);
    console.log('Subscription data============',Data);
   // console.log('iddddddddd======',Data.purchaseMonth)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(subscription())

    },[])
    


  

    return (
        <SafeAreaView>
            <KeyboardAwareScrollView>
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={{ paddingHorizontal: 10, }}>
                        <Rtext style={{ color: Colors.black, fontFamily: Fonts.latoBold, fontsize: 20, }}>August:</Rtext>
                        <View style={{ height: 1, borderColor: Colors.black, borderWidth: 1, justifyContent: 'center', marginTop: 4, width: 50 }} />
                    </View>
                    <Rtext style={{ paddingHorizontal: 40, marginTop: 10 }}>No Subscription</Rtext>
                    <View style={{ paddingVertical: 20 }}>
                        <CusButtom  BTNstyle = {{ marginHorizontal :"10%"}} text={'Subscribe'} />
                    </View>
                    <View style={{}} >
                        <Rtext style={{ color: Colors.black, fontFamily: Fonts.latoBold, fontsize: 20, }}>Document:</Rtext>

                        <View style={{ height: 1, borderColor: Colors.black, borderWidth: 1, marginTop: 4, width: 70 }} />
                        <Rtext style={{ paddingHorizontal: 40, marginTop: 10 }}>Empty</Rtext>
                    </View>



                    <View style={{ paddingVertical: 20 ,   }}>
                        <CusButtom  BTNstyle = {{ marginHorizontal :"10%"}} text={'Upload'}
                        // onpress={() => setModalVisible(true)}
                        />
                    </View>


                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                    // keyExtractor={item => item.id}
                    />


                </View>
                {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal> */}
                <View style={{ width: '100%', paddingHorizontal : 10 }}>
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


                    <View>
                        <CusButtom text={'Product'} />
                    </View>

                </View>



            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}


const renderItem = ({ item }) => {
    return (
        <View style={{ }}>
            < TouchableOpacity style={styles.flatlistMainView}>
                <View style={styles.rowWiseChild}>


                    <Image source={require('../../assets/icons/image.png')} style={styles.flatListIconStyle} />
                    <View style={{ flexDirection: 'column',width:'60%'}}>
                        <Rtext >{item.name}</Rtext>
                        <Rtext>{item.desc}</Rtext>
                    </View>
                    <Image style = {{position :'absolute' , top : 10 , right : 10}} source={require('../../assets/icons/threedots.png')} />
                </View>
                
            </TouchableOpacity>
        </View>
    )
}

export default MySubscription



const styles = StyleSheet.create({
    // centeredView: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginTop: 22
    // },
    // modalView: {
    //     margin: 20,
    //     backgroundColor: "white",
    //     borderRadius: 20,
    //     padding: 35,
    //     alignItems: "center",
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 4,
    //     elevation: 5
    // },
    // button: {
    //     borderRadius: 20,
    //     padding: 10,
    //     elevation: 2
    // },
    // buttonOpen: {
    //     backgroundColor: "#F194FF",
    // },
    // buttonClose: {
    //     backgroundColor: "#2196F3",
    // },
    // textStyle: {
    //     color: "white",
    //     fontWeight: "bold",
    //     textAlign: "center"
    // },
    // modalText: {
    //     marginBottom: 15,
    //     textAlign: "center"
    // },
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