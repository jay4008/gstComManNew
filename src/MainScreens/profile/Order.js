import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { Colors } from '../../assets/common/common';
import { Rtext } from '../../CommonComponents/common/Rtext';
import {setData} from '../utility/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Order = () => {
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 15}}>
        <KeyboardAwareScrollView style = {{flex : 1}}> 
      <View>
        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
          <Image source={require('../../assets/icons/less.png')} style={{ height: 100, width: 100, resizeMode: 'contain', marginTop: 20  }} />
        </View>
        <View>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>
            Koushik Sham
          </Text>
          <Text style={{textAlign: 'center', color: 'silver'}}>
            koushik.sham@mail.com
          </Text>
          <TouchableOpacity>
            <View
              style={{
                width: '40%',
                backgroundColor: 'orange',
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf:"center",
                shadowColor: 'red',
                shadowOpacity: 0.8,
                shadowRadius: 10,
                shadowOffset: {height: 10, width: 10},
                elevation: 17,
                marginBottom : 40,
              }}>
              <Rtext style={{textAlign: 'center', color: 'white'}}>
                Edit Profile
              </Rtext>
            </View>
          </TouchableOpacity>
        </View>

      

     
        <CommonButton text = {'Edit Profile'} /> 
        <CommonButton text = {'My Order'} /> 
        <CommonButton text = {'Address'} /> 
        <CommonButton text = {'Payment Method'} /> 
        <CommonButton text = {'Purchase History'} /> 
        <CommonButton text = {'Setting'} /> 
<CommonButton text = {'Share'} />   
<CommonButton text = {'Log Out'} />
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Order;



const CommonButton  = ({ onPress , text= ""}) =>{
    return(
        
        <TouchableOpacity onPress = {onPress} >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              borderRadius: 10,
              backgroundColor: 'silver',
              marginTop: 10,
              paddingVertical: 10,
              paddingHorizontal: 12,
            }}>
            <Image source={require('../../assets/icons/clock.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />
            <Text style={{width: 200 }}>{text}</Text>
            <Image source={require('../../assets/icons/grater.png')} style={{ height: 20, width: 20, resizemode: 'contain' }} />
          </View>
        </TouchableOpacity>
    )
}
