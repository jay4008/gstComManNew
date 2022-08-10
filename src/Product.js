import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert, SafeAreaView, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux';
import { product } from './Store/auth';
import { setToastMsg } from './Store/popup';
import { Rtext } from './CommonComponents/common/Rtext';
import { Colors, Fonts } from './assets/common/common';

const Product = () => {


    return (

        <View style={{ flex: 1, padding: 10, borderRadius: 15, borderWidth: 2, }}>
            <View style={{ borderRadius: 15, borderWidth: 1, width: "98%", padding: 5 }}>
                <View style={{ flexDirection: 'row',}}>
                    <Image style={{ width: 45, height: 45, }} source={require('../src/assets/icons/prof.png')} />
                    <View style={{ flexDirection: "column",paddingHorizontal:10}}>
                        <Rtext>Koushik Sham</Rtext>
                        <Rtext>Message:</Rtext>
                        <View style={{ width: "95%" , paddingVertical:5}}>
                            <Rtext style={{ color: Colors.primaryColor }}>Lorem Ipsum has been the industry's standard dummy text ever </Rtext>
                        </View>
                        <View style={{height:1,borderColor:Colors.tranparentBlack,borderWidth:.5,marginBottom:5}}></View>
                        <View style={{ flexDirection: 'row',justifyContent:"space-between",alignItems:"center" }}>
                    
                    <TouchableOpacity >
                    <Image source={require('../src/assets/icons/like.png')} style={{width:20,height:20,resizemode:'container',padding:10 , tintColor:Colors.primaryColor}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity >
                    <Rtext style={{fontFamily:Fonts.latoBold,color:Colors.primaryColor}}>Comment</Rtext>
                    </TouchableOpacity>
                    </View>
                    </View>


                </View>

            </View>

        </View>
    )
}

export default Product;


// <View style={{ paddingVertical: 10, width: '100%',flexDirection:"column" }}>
//                     <Rtext>Koushik Sham</Rtext>
//                     <Rtext>Message:</Rtext>
//                     <View style={{width:"80%"}}>
//                     <Rtext style={{ color: Colors.primaryColor }}>Lorem Ipsum has been the industry's standard dummy text ever </Rtext>
//                     </View>
//                     <View style={{ flexDirection: "row-reverse" }}>
//                         <Rtext>Comment</Rtext>
//                     </View>
//                 </View>













{/* <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <TextInput value={name} onChangeText={setName} placeholder='Name'></TextInput>
            <TextInput value={desc} onChangeText={setDesc} placeholder='desc'></TextInput>
            <TextInput value={img} onChangeText={setImg} placeholder='imag'></TextInput>
            <TouchableOpacity>
            <Button title={'Submit'}
            
            onPress={()=>{
                dispatch(product({
                    name:name,
                    decs:desc,
                    img:img
                })).then(() => {
                   Alert.alert('Success')
                }).catch(() => {
                    dispatch(setToastMsg("Something went wrong!"));
                })
            
            }}
            
            /> */}
            // const [name,setName]=useState('');
            // const [desc,setDesc]=useState('');
            // const [img,setImg]=useState('');
            // const dispatch = useDispatch()



        //     </TouchableOpacity>
        // </View>