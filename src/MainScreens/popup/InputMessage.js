import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
// import { useState } from 'react';
import { Colors } from '../../assets/common/common';
import { Rtext } from '../../CommonComponents/common/Rtext';
import Modal from 'react-native-modal';
import { BlurView } from '@react-native-community/blur';
import { CusButtom } from '../../CommonComponents/common/CusButtom';
import { Ainput } from '../../CommonComponents/common/Ainput';
import { useDispatch, useSelector } from 'react-redux';
import { postMsg } from '../../Store/message';
import moment from 'moment';
import { setToastMsg } from '../../Store/popup';
import { getUserDatabyid } from '../../Store/auth';
const { width } = Dimensions.get('window');
const InputMsg = ({ setShowModal, showModal, userId }) => {
  const userTokenInfo = useSelector(state => state.auth.userTokenInfo);

  const higherauth = useSelector(state => state.auth.getUserDatabyid);

console.log('higherauthhigherauthhigherauth');
  const auth = useSelector(state => state.auth);
  const [reply , setReply] = useState([]);
  console.log('============usertoken========', userTokenInfo);
  console.log('============auth========', auth);
  const dispatch = useDispatch()
  const [messge, stMessage] = useState("")

useEffect(()=>{
  dispatch(getUserDatabyid({
    id:userTokenInfo.userId
  }))
},[])


useEffect(() =>{
console.log("higherauth",higherauth);
},[higherauth])




  return (
    <Modal isVisible={showModal} backdropColor={Colors.tranparentBlack}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <View
          style={{
            paddingVertical: 30,
            backgroundColor: Colors.lightSilver,
            width: '100%',
            backgroundColor: Colors.white,
            paddingHorizontal: 20,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <TouchableOpacity onPress={() => setShowModal(false)} style={{ position: 'absolute', top: 10, right: 10 }}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/cancel.png')}
            />
          </TouchableOpacity>
          <Rtext
            style={{
              marginTop: 10,
              color: Colors.mainblue,
              fontSize: 18,
              alignSelf: 'center',
              borderBottomWidth: 1,
              borderBottomColor: Colors.mainblue,
              marginBottom: 10,
            }}>
            {'Reach out to your Associate'}
          </Rtext>
          <Ainput
            multiline={true}
            style={{ height: 100, textAlignVertical: 'top' }}
            placeholder={'Messages'}
            value={messge}
            onChangeText={stMessage}
          />
          <View
            style={{
              borderRadius: 13,
              marginTop: 15,
              backgroundColor: Colors.mainblue,
            }}>
            <CusButtom
              onpress={() => {
                if (messge === '') {
                dispatch(setToastMsg('Please Enter the Message'))
                return
                }

                dispatch(postMsg(
                  {

                    message: messge,
                    userName: userTokenInfo.username,
                    userid: userTokenInfo.userId,
                    assid: higherauth.showHigherAuth
                    ,
                    tlid: null,
                    date: moment().format('DD/MM/YYYY'),
                    userSeen: true,
                    assSeen: false,
                    tlSeen: false,
                    imgulr: null,
                    profilePic: null,
                    // reply :[{
                     
                    //   message : "ok please chcek ",
                    //   userName :"jayshah",
                    //   userid:"675131652176",
                    //   assid:"kdshfjhdsf",
                    //   tlid: "sdhfkjdshfds",
                    //   date: moment().format("DD/MM/YYYY"),
                    //   userSeen: true,
                    //   assSeen: false,
                    //   tlSeen:false,
                    //   imgulr:null,
                    //   profilePic:null,
                    //   userType:"user",
                    //   edit:false
                    //   }],
                  },


                )).then(()=>{
                  setShowModal(false)
                })
              }}
              BTNstyle={{
                width: width - 80,
                marginTop: 2,
                backgroundColor: Colors.mainblue,
                marginBottom: 2,
                marginHorizontal: 2,
              }}
              text={'Send Msg to Your Associate'}></CusButtom>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InputMsg;
const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: Colors.mainblue,
  },
});
