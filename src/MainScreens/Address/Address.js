import React from 'react'
import { View, Text, SafeAreaView, Dimensions, Image, StyleSheet } from 'react-native'
import { Colors } from '../../assets/common/common'
import { Rtext } from '../../CommonComponents/common/Rtext'
import { Ainput } from '../../CommonComponents/common/Ainput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CusButtom } from '../../CommonComponents/common/CusButtom'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useState } from 'react'


const { height, width } = Dimensions.get('window')
const Address = () => {

    const [checkbox, setCheckBox] = useState(false)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lightSilver, }}>
            <KeyboardAwareScrollView >
                <View style={{ width: '100%', flex: 1, backgroundColor: Colors.primaryColor, paddingVertical: 10 }}>
                    <Rtext style={{ alignSelf: 'center', color: Colors.white }}>
                        Shipping Address
                    </Rtext>
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                    <Ainput placeholder={'Name'} />
                    <Ainput placeholder={'Email'} />
                    <Ainput placeholder={'Address 1*'} />
                    <Ainput placeholder={'Address 2*'} />
                    <Ainput placeholder={'City'} />
                    <Ainput placeholder={'State'} />
                    <Ainput placeholder={'Phone Number'} />
                    <TouchableOpacity onPress={() => setCheckBox(prev => !prev)} style={styles.checkBoxView}>
                        <Image source={checkbox ? require('../../assets/icons/checkboxon.png') : require('../../assets/icons/checkboxoff.png')} style={{ height: 30, width: 30, resizeMode: 'contain', tintColor: Colors.primaryColor }} />
                        <Rtext style={{ marginLeft: 10 }}>Set As Default Address</Rtext>
                    </TouchableOpacity>
                    <CusButtom BTNstyle={{ backgroundColor: Colors.primaryColor }} text={'Save Address'} />
                </View>


            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({


    checkBoxView: { flexDirection: 'row', paddingTop: 10, alignItems: 'center' },

})

export default Address;
