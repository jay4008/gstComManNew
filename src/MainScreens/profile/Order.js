import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { setData } from '../utility/auth';


const Order = () => {

   
    return (

        <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
            <View>
                <TouchableOpacity>
                    <View>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 50, width: 50, resizeMode: 'contain' }} />

                    </View>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                    <Image source={require('../../assets/images/less.png')} style={{ height: 100, width: 100, resizeMode: 'contain', marginTop: 20 }} />
                </View>
                <View>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>
                        Koushik Sham
                    </Text>
                    <Text style={{ textAlign: 'center', color: 'silver' }}>
                        koushik.sham@mail.com
                    </Text>
                    <TouchableOpacity>
                        <View style={{ width: "30%", backgroundColor: "orange", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12, justifyContent: 'center', alignItems: 'center', marginLeft: 115,shadowColor:'red',shadowOpacity:0.8,shadowRadius:10,shadowOffset:{height:10,width:10},elevation:17}}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>
                                Edit Profile
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', borderRadius: 10, backgroundColor: "silver", marginTop: 10, paddingVertical: 10, paddingHorizontal: 12, marginTop: 50,shadowColor:'orange',shadowOpacity:1,shadowRadius:5,elevation:10 }}>
                        <Image source={require('.../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />
                        <Text style={{ marginRight: 150 }}>
                            My Order
                        </Text>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />

                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', borderRadius: 10, backgroundColor: "silver", marginTop: 10, paddingVertical: 10, paddingHorizontal: 12, }}>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />
                        <Text style={{ marginRight: 150 }}>
                            Address
                        </Text>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />

                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', borderRadius: 10, backgroundColor: "silver", marginTop: 10, paddingVertical: 10, paddingHorizontal: 12, }}>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />
                        <Text style={{ marginRight: 100 }}>
                            Payment Method
                        </Text>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />

                    </View>

                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', borderRadius: 10, backgroundColor: "silver", marginTop: 10, paddingVertical: 10, paddingHorizontal: 12, }}>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />
                        <Text style={{ marginRight: 100 }}>
                            Purchase History
                        </Text>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />

                    </View>

                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', borderRadius: 10, backgroundColor: "silver", marginTop: 10, paddingVertical: 10, paddingHorizontal: 12, }}>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />
                        <Text style={{ marginRight: 150 }}>
                            Setting
                        </Text>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />

                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', borderRadius: 10, backgroundColor: "silver", marginTop: 10, paddingVertical: 10, paddingHorizontal: 12, }}>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />
                        <Text style={{ marginRight: 150 }}>
                            Share
                        </Text>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />

                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', borderRadius: 10, backgroundColor: "silver", marginTop: 10, paddingVertical: 10, paddingHorizontal: 12, }}>
                        <Image source={require('.../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />
                        <Text style={{ marginRight: 150 }}>
                            Log Out
                        </Text>
                        <Image source={require('../../assets/images/less.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />//
                    </View>

                </TouchableOpacity>
            </View>



        </SafeAreaView>
    )
}

export default Order;
