import React, { useEffect } from 'react';
import { useState } from 'react';

import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../assets/common/common';
import { Fonts } from '../../assets/common/common';
import { Rtext } from '../../CommonComponents/common/Rtext';
import { messagePopUpActions } from '../../Store/popup';
import InputMsg from '../popup/InputMessage';
import MessgePopUp from '../popup/MessagePopUp';
import jwt_decode from 'jwt-decode';
import { useIsFocused } from '@react-navigation/native';
import { getMsg } from '../../Store/message';
import moment from 'moment';
import Loader from '../popup/Loader';
// import {Rtext} from '../../CommonComponents/common/Rtext';
// import {getSuperAdmin} from '../../Store/auth';
// import PushNotification from 'react-native-push-notification';
// import CommonHeader from '../../CommonComponents/common/CommonHeader/Header';
const { height, width } = Dimensions.get('window');
const Chat = props => {
  const userTokenInfo = useSelector(state => state.auth.userTokenInfo)
  const messagesAll = useSelector(state => state.message.messagesAll)
  const dispatch = useDispatch()
  // const dispatch=useDispatch();
  const [showModal, setShowModal] = useState(false);
  const isFocus = useIsFocused()
  const [loader , setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    dispatch(getMsg({
      userid: userTokenInfo.userId
    })).then((res) =>{
      console.log("resresresresresresresresresres",res);
      setLoader(false)
    }).catch((error) =>{
      setLoader(false)
      console.log("error",error);
    })
  }, [isFocus, showModal])


  console.log('====================================');
  console.log(messagesAll);
  console.log('====================================userTokenInfo', userTokenInfo.userId);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          //   haldleNotification(item);
          props.navigation.navigate('message', {item:item})
        }}
        style={styles.click}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.Img}
            source={require('../../assets/icons/feedback.png')}
          />
          <View>
            <View style={styles.card}>
              {/* <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/profile.png')} />   */}
              <Rtext style={styles.name}>{item.userName}</Rtext>
              <Rtext style={{ color: Colors.silver, marginRight: 40, fontSize: 12 }}>{moment(item.updatedAt).format('l')}</Rtext>
            </View>
            <View>
              <Rtext style={{ width : width- 100, marginTop: 7, color: Colors.silver }}>
                {item.message}
              </Rtext>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {/* <CommonHeader Title='Posts' /> */}
      <FlatList
        style={styles.flatlistMainView}
        showsVerticalScrollIndicator={false}
        data={[...messagesAll].reverse()}
        renderItem={renderItem}
      />
      <TouchableOpacity
        onPress={() => {
          console.log('====================================');
          // var userData = jwt_decode(data.replace('Bearer ', ''));
          console.log("data", userTokenInfo.userId,);
          console.log('====================================');
          //props.navigation.navigate('DocList');
          //dispatch(MessgePopUp())

          setShowModal(true)
        }}
        style={{
          position: 'absolute',
          bottom: 80,
          right: 40,
          backgroundColor: Colors.mainblue,
          paddingVertical: 7,
          paddingHorizontal: 8,
          borderRadius: 10,

        }}>

        <Image
          style={{
            height: 40,
            width: 40,
            resizeMode: 'contain',
            tintColor: Colors.white,
          }}
          source={require('../../assets/icons/message.png')}
        />
      </TouchableOpacity>
      <View>
        {
          showModal && <InputMsg userId={userTokenInfo.userId} showModal={showModal} setShowModal={setShowModal} />
        }


      </View>
      {
        loader &&  <Loader/>
      }
    
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  flatlistMainView: {
    backgroundColor: 'white',
  },
  click: {
    marginHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.white,
    marginTop: 10,
    borderRadius: 10,
  },
  Img: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    borderRadius: 50,
    marginHorizontal: 10,
    tintColor: Colors.primaryColor,
    //backgroundColor: Colors.lightSilver,
    // tintColor: Colors.primaryColor
    alignSelf: 'center',
  },
  name: {
    width: width - 140,
    fontFamily: Fonts.latoBlack,
  },
  description: {
    width: width - 140,
    paddingLeft: 10,
    fontFamily: Fonts.latoRegular,
    fontSize: 14,
    paddingVertical: 5,
    color: Colors.silver,
  },
  Date: {
    width: width - 120,
    paddingLeft: 10,
    fontFamily: Fonts.latoRegular,
    fontSize: 14,
    paddingVertical: 5,
    color: Colors.tranparentBlack,
  },
  card: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    marginRight: 15,
    // padding: 10,
    //alignItems: "center"
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: Colors.white,
  },
});