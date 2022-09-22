import React, { useEffect, useRef, useState } from 'react';
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
import { Colors, Fonts } from '../assets/common/common';
import { Rtext } from '../CommonComponents/common/Rtext';
import Modal from 'react-native-modal';
import { BlurView } from '@react-native-community/blur';
import { CusButtom } from '../CommonComponents/common/CusButtom';
import { request } from '../utility/common';
import { useDispatch, useSelector } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
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
import { ScrollView } from 'react-native-gesture-handler';




const Home = (props) => {

  const Data = useSelector(state => state.auth.productList);
  const ref = useRef()
  const isFocus = useIsFocused()
  const [activeSlide, setactiveSlide] = useState(0)
  const [messagePopUp, setMessagePopup] = useState(false);
  const dispatch = useDispatch();
  const [popUp, setPopUp] = useState(false);
  useEffect(() => {
    isFocus &&
      dispatch(product())

  }, []);


  const pagination = () => {
    return (
      <Pagination

        dotsLength={[...Data, { help: true }].length}
        activeDotIndex={activeSlide}

        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: Colors.mainblue
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  const renderItem = ({ item }) => {
    return (
      <View>
        {
          item?.help ? <TouchableOpacity
            style={styles.flatlistMainView}
            onPress={() => {

              props.navigation.navigate('Help');

            }}>
            <View style={styles.rowWiseChild}>
              <Image source={require('../assets/icons/help.png')} style={styles.flatListIconStyle} />
              <View>
                <Rtext>{"Help"}</Rtext>
                <Rtext
                  style={{
                    width: width - 140,
                    fontSize: 12,
                    color: 'silver',
                    marginTop: 5,
                  }}>
                  {"Frequently Asked Question"}
                </Rtext>
              </View>
            </View>
          </TouchableOpacity> : <TouchableOpacity
            style={styles.flatlistMainView}
            onPress={() => {

              props.navigation.navigate('GstMenu', { item: item });

            }}>
            <View style={styles.rowWiseChild}>
              <Image source={require('../assets/icons/product.png')} style={styles.flatListIconStyle} />
              <View>
                <Rtext
                  style={{
                    width: width - 150,
                  }}
                >
                  {item?.name} </Rtext>
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
        }
      </View>

    );
  };


  const _renderItem = ({ item, index }) => {
    console.log("itemitemitemitemitem", item);
    return (
      <View style={{
        paddingHorizontal: 10, paddingVertical: 40, alignSelf: 'center', width: width - 100,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.3,
        elevation: 5,
        shadowRadius: 15,
        backgroundColor: Colors.white,
        shadowOffset: { width: 4, height: 4 },
      }} >



        <Image style={{ height: 200, width: 300, resizeMode: 'contain' }} source={require('../assets/image/product1.png')} />
        <Rtext style={{fontFamily:Fonts.latoBold,fontSize:22,color:Colors.tranparentBlack,alignSelf:'center'}}> {item?.help ? "Frequently Asked Question" : item?.name}</Rtext>
        <CusButtom onpress={() => {
          item?.help ? props.navigation.navigate('Help') : props.navigation.navigate('GstMenu', { item: item });
        }} BTNstyle={{ marginHorizontal: 20, }} text={item?.help ? "Help" : "Purchase"} />

      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={{ height: 450, marginTop: 10 }}>
        <Carousel
          ref={ref}
          data={[...Data, { help: true }]}
          renderItem={_renderItem}
          sliderWidth={width}
          itemWidth={width * 0.75}
          layout={'default'}
          loop={true}
          autoPlay={true}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setactiveSlide(index)}
        />
        <View>


          {
            pagination()
          }
        </View>
      </View>
      {/* 
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[...Data , {help : true}]}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      /> */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('DocList');
        }}
        style={{
          position: 'absolute',
          bottom: 0,
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
      {/* <Rtext style={{fontFamily:Fonts.latoBold,fontSize:60}}>TechnoPLat Solution...!!!</Rtext> */}
      </ScrollView>
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
    tintColor: Colors.primaryColor
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
