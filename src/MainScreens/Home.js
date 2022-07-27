import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {Colors} from '../assets/common/common';
import {Rtext} from '../CommonComponents/common/Rtext';
import Modal from 'react-native-modal';
import {BlurView} from '@react-native-community/blur';
import {CusButtom} from '../CommonComponents/common/CusButtom';
import {request} from '../utility/common';
import {useDispatch, useSelector} from 'react-redux';
import {
  commentsApi,
  emptyAllData,
  HomeTodosApi,
  HomeTodosApi1,
  Api2,
  Koushik,
} from '../Store/home';
import {userLogoutSuccess} from '../Store/auth';
const {width, height} = Dimensions.get('window');
import {Ainput} from '../CommonComponents/common/Ainput';
import {TextInputPopUp} from './popup/TextInputPopUp';
// import { MessgePopUp } from "./popup/MessagePopUp";
import {SucessOrFailure} from './popup/SucessOrFailure';
import {
  inputPopupAction,
  messagePopUpActions,
  setSucessFailerMsg,
  setToastMsg,
} from '../Store/popup';
import DocSelection from './popup/DocModal';
import Loader from './popup/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = props => {
  const [token, setToken] = useState('');
  const todos = useSelector(state => state.home.todos);
  const newData = useSelector(state => state.home.newData);
  const comments = useSelector(state => state.home.comments);
  const techno = useSelector(state => state.home.techno);
  const [messagePopUp, setMessagePopup] = useState(false);
  const dispatch = useDispatch();
  const [popUp, setPopUp] = useState(false);
  const ReturnImage = (data = "") => {
    console.log('data', data);

    let dateToSend;
    switch (data) {
      case 'GST':
        dateToSend = require('../assets/icons/gst.png');
        break;

      case 'Monthely compliance':
        dateToSend = require('../assets/icons/month.png');
        break;

      case  'Quaterly compliance':
        dateToSend = require('../assets/icons/quater.png');
        break;
      case 'Annual compliance':
        dateToSend = require('../assets/icons/annual.png');
        break;

      default:
        dateToSend = require('../assets/icons/help.png');
        break;
    }

    return dateToSend;
  };

  const homeData = [
    {
      name: 'GST',
      description: `GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
      // image: require('../assets/icons/gst.png'),
      navigation: true,
      pageName: 'GstMenu',
    },
    {
      name: 'Monthely compliance',
      description: `Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
      // image: require('../assets/icons/month.png'),
    },
    {
      name: 'Quaterly compliance',
      description:
        'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
      // image: require('../assets/icons/quater.png'),
    },
    {
      name: 'Annual compliance',
      description:
        'Evaluation of advance tax liability and payment of advance tax periodically. Filing of Income Tax Returns (Tax will be obligatory at a flat rate of 30% plus Education Cess) Filing of Tax Audit Report.',
      // image: require('../assets/icons/annual.png'),
    },
    {
      name: 'Help',
      description:
        'Evaluation of advance tax liability and payment of advance tax periodically. Filing of Income Tax Returns (Tax will be obligatory at a flat rate of 30% plus Education Cess) Filing of Tax Audit Report.',
      // image: require('../assets/icons/help.png'),
      navigation: true,
      pageName: 'Help',
    },
  ];
  useEffect(() => {
    console.log('newData', newData);
  }, [newData]);

  useEffect(() => {
    console.log('comments', comments);
  }, [comments]);

  useEffect(() => {
    console.log('techno', techno);
  }, [techno]);

  useEffect(() => {
    console.log('todos', todos);
  }, [todos]);

  const ApicallOfTodos = async () => {
    try {
      let Reqdata = await request('get', '/todos');
      console.log('datadatadatadatadatadata', Reqdata.data);
    } catch (e) {
      console.log('datadatadatadatadatadata', e);
    }
  };

  useEffect(async () => {
    // ApicallOfTodos();
    // Alert.alert(ReturnImage("jay"));
    const newtoken = await AsyncStorage.getItem('token');
    setToken(newtoken);
    dispatch(commentsApi());
    dispatch(Koushik({}));
    dispatch(
      HomeTodosApi1({
        username: 'koushik',
        email: 'sham@gmail.com',
        password: '12345',
        ph: '9865430934',
        dob: '23-12-2021',
      }),
    );
    dispatch(Api2());
    console.log('token', token);
    // Alert.alert(`${token}`)
  }, []);

  const renderItem = ({item, index}) => {
    console.log('====================================');
    console.log(ReturnImage(index));
    console.log('====================================');
    return (
      <TouchableOpacity
        style={styles.flatlistMainView}
        onPress={() => {
          if (item?.navigation) {
            props.navigation.navigate(item?.pageName);
          }
        }}>
        <View style={styles.rowWiseChild}>
          <Image source={ReturnImage(item?.name)} style={styles.flatListIconStyle} />
          <View>
            <Rtext>{item?.name}</Rtext>
            <Rtext
              style={{
                width: width - 140,
                fontSize: 12,
                color: 'silver',
                marginTop: 5,
              }}>
              {item?.description}
            </Rtext>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 15}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={homeData}
        renderItem={renderItem}
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
