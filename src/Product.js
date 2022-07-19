import React, { useState } from 'react'
import { View, Text,TextInput, Button, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux';
import { product } from './Store/auth';
import { setToastMsg } from './Store/popup';

const Product = () => {
    const [name,setName]=useState('');
    const [desc,setDesc]=useState('');
    const [img,setImg]=useState('');
    const dispatch = useDispatch()
    
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
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
            
            />
                
                
                
                
            </TouchableOpacity>
        </View>
    )
}

export default Product;
