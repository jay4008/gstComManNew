import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert, Text
} from 'react-native';
import { Colors } from '../assets/common/common';
import { Rtext } from '../CommonComponents/common/Rtext';
import Modal from 'react-native-modal';
import { BlurView } from '@react-native-community/blur';
import { CusButtom } from '../CommonComponents/common/CusButtom';
import { request } from '../utility/common';
import { useDispatch, useSelector } from 'react-redux';
import {
  commentsApi,
  emptyAllData,
  HomeTodosApi,
  HomeTodosApi1,
  Api2,
  Koushik,
} from '../Store/home';
import { userLogoutSuccess } from '../Store/auth';
const { width, height } = Dimensions.get('window');
import { Ainput } from '../CommonComponents/common/Ainput';
import { TextInputPopUp } from './popup/TextInputPopUp';
// import { MessgePopUp } from "./popup/MessagePopUp";
import { SucessOrFailure } from './popup/SucessOrFailure';
import {
  inputPopupAction,
  messagePopUpActions,
  setSucessFailerMsg,
  setToastMsg,
} from '../Store/popup';
import DocSelection from './popup/DocModal';
import Loader from './popup/Loader';
import { product } from '../Store/auth';
import { useIsFocused } from '@react-navigation/native';
const Home = (props) => {
  
  const Data = useSelector(state => state.auth.productList);

  const isFocus=useIsFocused()

  const [messagePopUp, setMessagePopup] = useState(false);
  const dispatch = useDispatch();
  const [popUp, setPopUp] = useState(false);
  useEffect(() => {
    isFocus && 
    dispatch(product())

  }, []);

  // const ApicallOfTodos = async () => {
  //   try {
  //     let Reqdata = await request('get', '/todos');
  //     console.log('datadatadatadatadatadata', Reqdata.data);
  //   } catch (e) {
  //     console.log('datadatadatadatadatadata', e);
  //   }
  // };

  // useEffect(() => {
  // ApicallOfTodos();
  // dispatch(commentsApi());
  // dispatch(Koushik({

  // }));
  // dispatch(HomeTodosApi1({
  //   username:'koushik',
  //   email:'sham@gmail.com',
  //   password:'12345',
  //   ph:'9865430934',
  //   dob:'23-12-2021'
  // }));
  // dispatch(Api2());
  //   dispatch(product())

  // }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.flatlistMainView}
        onPress={() => {

          props.navigation.navigate('GstMenu', { item: item });

        }}>
        <View style={styles.rowWiseChild}>
          <Image source={require('../assets/icons/gst.png')} style={styles.flatListIconStyle} />
          <View>
            <Rtext>{item?.name}</Rtext>
            <Rtext
              style={{
                width: width - 140,
                fontSize: 12,
                color: 'silver',
                marginTop: 5,
              }}>
              {item?.desc}
            </Rtext>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>

      {/* <CusButtom text={'submit'}
        
        onpress={()=>
          
           dispatch(product())
        }/> */}



      <FlatList
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('DocList');
        }}
        style={{
          position: 'absolute',
          bottom: 50,
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
          source={require('../assets/icons/pdf.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  flatlistMainView: {
    paddingVertical: 15,
    backgroundColor: Colors.white,
    marginBottom: 5,
    borderRadius: 10,
  },
  rowWiseChild: {
    flexDirection: 'row',
  },
  flatListIconStyle: {
    height: 64,
    width: 64,
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
