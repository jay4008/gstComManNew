import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Fonts } from '../../assets/common/common'
import { CusButtom } from '../../CommonComponents/common/CusButtom'
import { Rtext } from '../../CommonComponents/common/Rtext'

const DATA = [
    {

        title: " More",
        image: require('../../assets/icons/pdf.png')
    },
    {

        title: "More ",
        image: require('../../assets/icons/image.png')
    },
    {

        title: "More",
        image: require('../../assets/icons/doc.png')
    },

];
const renderItem = ({ item, index }) => {

    return (
        <View style={{}}>
            <View style={{ justifyContent: 'space-evenly' }}>
                <TouchableOpacity
                    style={{}}
                    onPress={() => {

                    }}
                >
                    <Image style={{ height: 130, width: 130, borderRadius: 20, resizeMode: 'contain', tintColor: Colors.mainblue }} source={item.image} />
                    <Rtext style={{ alignSelf: 'center', fontFamily: Fonts.latoBold, }}>More +</Rtext>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const Document1 = () => {
    const [value, setValue] = useState(-1)
    return (
        <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 10 }}>
            <Rtext style={{ width: '100%', fontSize: 12, marginBottom: 20 }}>Lorem Ipsum has been the industry's took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of </Rtext>
            {/* <View style={{ width: '100%', height: 2, backgroundColor:'blue', marginTop: 20 }}></View> */}
            {/* <FlatList
                style={{ height: 150, flexGrow: 0, }}
                horizontal
                //data={DATA}
                
                renderItem={renderItem}
                //showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} */}
            {/* /> */}
            {/* <View style={{ width: '100%', height: 2, backgroundColor:'blue'}}/> */}
            <ScrollView horizontal={true} style={{ flexGrow: 0 }} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <TouchableOpacity
                        onPress={() => {
                            setValue(1)
                        }}
                    >
                        <Image style={{ height: 130, width: 130, resizeMode: 'contain' }} source={require('../../assets/icons/pdf.png')} />
                    
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={() => {
                        setValue(2)
                    }}>
                        <Image style={{ height: 130, width: 130, resizeMode: 'contain' }} source={require('../../assets/icons/doc.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={() => {
                        setValue(3)
                    }}>
                        <Image style={{ height: 130, width: 130, resizeMode: 'contain' }} source={require('../../assets/icons/image.png')} />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={{ width: '100%',height:350,marginTop:40 }}>
                {
                    value === 1 &&
                    <View style={{alignItems:'center',borderRadius:10,borderWidth:1}}>
                       <Image style={{ height: 130, width: 130, resizeMode: 'contain',marginTop:20 }} source={require('../../assets/icons/pdf1.png')} />
                       <CusButtom BTNstyle={{width:'80%',alignSelf:'center',marginTop:50,marginBottom:30}} text={'Download'}/>
                    </View>
                }
                  {
                    value === 2 &&
                    <View style={{alignItems:'center',borderRadius:10,borderWidth:1}}>
                        <Image style={{ height: 130, width: 130, resizeMode: 'contain',marginTop:20 }} source={require('../../assets/icons/doc1.png')} />
                       <CusButtom BTNstyle={{width:'80%',alignSelf:'center',marginTop:50,marginBottom:30}} text={'Download'}/>
                    </View>
                }
                  {
                    value === 3 &&
                    <View style={{alignItems:'center',borderRadius:10,borderWidth:1,borderColor:Colors.mainblue}}>
                        <Image style={{ height: 130, width: 130, resizeMode: 'contain',marginTop:20 }} source={require('../../assets/icons/image1.png')} />
                       <CusButtom BTNstyle={{width:'80%',alignSelf:'center',marginTop:50,marginBottom:30}} text={'Download'}/>
                    </View>
                }

            </View>

        </View>

    )
}

export default Document1

