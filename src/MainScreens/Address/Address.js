import React from 'react'
import { View, Text, SafeAreaView, Dimensions, Image, StyleSheet } from 'react-native'
import { Colors } from '../../assets/common/common'
import { Rtext } from '../../CommonComponents/common/Rtext'
import { Ainput } from '../../CommonComponents/common/Ainput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CusButtom } from '../../CommonComponents/common/CusButtom'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useState } from 'react'
// import { setToastMsg } from "../Store/popup";
import { setToastMsg } from '../../Store/popup'
import { useDispatch } from 'react-redux'
import { address } from '../../Store/auth'

const { height, width } = Dimensions.get('window')
const Address = () => {

    const [checkbox, setCheckBox] = useState(false)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [address1,setAddress1]=useState('')
    const [address2,setAddress2]=useState('')
    const [city,setCity]=useState('')
    const [state,seState]=useState('')
    const[phno,setPhno]=useState('')

    const dispatch=useDispatch()


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lightSilver, }}>
            <KeyboardAwareScrollView >
                <View style={{ width: '100%', flex: 1, backgroundColor: Colors.primaryColor, paddingVertical: 10 }}>
                    <Rtext style={{ alignSelf: 'center', color: Colors.white }}>
                        Shipping Address
                    </Rtext>
                </View>
                <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                    <Ainput value={name} onChangeText={setName} placeholder={'Name'} />
                    <Ainput value={email} onChangeText={setEmail} placeholder={'Email'} 
                    keyboardType={'email-address'}
                    />
                    <Ainput value={address1} onChangeText={setAddress1} placeholder={'Address 1*'} />
                    <Ainput value={address2} onChangeText={setAddress2} placeholder={'Address 2*'} />
                    <Ainput value={city} onChangeText={setCity} placeholder={'City'} />
                    <Ainput value={state} onChangeText={seState} placeholder={'State'} />
                    <Ainput value={phno} onChangeText={setPhno}  placeholder={'Phone Number'} 
                    keyboardType={'numeric'}
                    />



                    <TouchableOpacity onPress={() => setCheckBox(prev => !prev)} style={styles.checkBoxView}>
                        <Image source={checkbox ? require('../../assets/icons/checkboxon.png') : require('../../assets/icons/checkboxoff.png')} style={{ height: 30, width: 30, resizeMode: 'contain', tintColor: Colors.primaryColor }} />
                        <Rtext style={{ marginLeft: 10 }}>Set As Default Address</Rtext>
                    </TouchableOpacity>
                    <CusButtom BTNstyle={{ backgroundColor: Colors.primaryColor }} text={'Save Address'} 
                    
                    onpress={()=>{
                        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                        if (name.length < 2) {
                            dispatch(setToastMsg("Please enter First name"))
                            return
                        }
                        else if (reg.test(email) === false) {
                            dispatch(setToastMsg("Please enter a valid Email address"));
                            return
                        }
                        // else if (Phone.length !== 10 )
                        else if (address1.length < 2 )
                        {
                            dispatch(setToastMsg("Please enter a valid Address"));
                            return
                        }
                        else if (address2.length < 2 )
                         {
                            dispatch(setToastMsg("Please enter a valid Address"));
                            return  
                         }
                         else if (city.length < 2 )
                         {
                            dispatch(setToastMsg("Please enter Correct city"));
                            return  
                         }
                         else if (state.length < 2 )
                         {
                            dispatch(setToastMsg("Please enter Correct State"));
                            return  
                         }
                         else if (phno.length !== 10 )
                         {
                            dispatch(setToastMsg("Please enter Correct ph no"));
                            return  
                         }
                         dispatch(address({

                            "name": name,
                            "email": email,
                            "add1": address1,
                            "add2": address2,
                            "city": city,
                            "state": state,
                            "phno": phno  

                         })).then(()=>{
                             dispatch(setToastMsg("Addrss Save Successfully"));
                             return
                         })
                    
                    
                    }}
                 />
                </View>


            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({


    checkBoxView: { flexDirection: 'row', paddingTop: 10, alignItems: 'center' },

})

export default Address;
