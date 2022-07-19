/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  Linking,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AuthFrame from './src/AuthScreens/AuthFrame';
import { CusButtom } from './src/CommonComponents/common/CusButtom';
import AuthStack from './src/Navigations/AuthStack';
import MyStack from './src/Navigations/MainStack';
import { Colors, Fonts } from './src/assets/common/common';
import { useNetInfo } from '@react-native-community/netinfo';
import { Rtext } from './src/CommonComponents/common/Rtext';
import Modal from 'react-native-modal';
import { Provider, useSelector } from 'react-redux';
import store from './src/Store';
import Subscription from './src/MainScreens/popup/Subscription';
import { MenuProvider } from 'react-native-popup-menu';
// popup/MessagePopUp

import MessagePopUp from './src/MainScreens/popup/MessagePopUp';
import TextInputPopUp from './src/MainScreens/popup/TextInputPopUp';
import CustomToast from './src/MainScreens/popup/CustomToast';
import SucessOrFailure from './src/MainScreens/popup/SucessOrFailure';
import Loader from './src/MainScreens/popup/Loader';
const { width } = Dimensions.get('window');
// import RootDrawerNav from './src/Navigations/RootDrawerNav';
const App = () => {
  const [Splash, setSplash] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSplash(false);
  //   }, 3000);
  // }, []);
  // if (Splash) {
  //   return (
  //     <AuthFrame>
  //       <Rtext
  //         style={{
  //           fontSize: 30,
  //           color: '#fff',
  //           textAlign: 'center',
  //           fontFamily: Fonts.latoBlack,
  //         }}>
  //         GST COMMAN
  //       </Rtext>
  //     </AuthFrame>
  //   );
  // }
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <MenuProvider>
            <StackNav />
          </MenuProvider>
        </Provider>

        {/* <RootDrawerNav/> */}
      </NavigationContainer>
    </>
  );
};

const StackNav = () => {
  const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);
  const messagePop = useSelector(state => state.popup.messagePop);
  const textInput = useSelector(state => state.popup.textInput);
  const successFailure = useSelector(state => state.popup.successFailure);
  const loader = useSelector(state => state.popup.loader);
  const successFailureType = useSelector(
    state => state.popup.successFailureType,
  );
  const NetInfo = useNetInfo();

  useEffect(() => {
    console.log('state');
  }, [NetInfo.isConnected]);
  return (
    <View style={{ flex: 1 }}>
      {isUserLoggedIn ? <MyStack /> : <AuthStack />}
      {messagePop && <MessagePopUp />}
      {textInput && <TextInputPopUp />}

      {successFailure && <SucessOrFailure isflag={successFailureType} />}

      {!NetInfo?.isConnected && (
        <Modal
          isVisible={!NetInfo?.isConnected}
          backdropColor={Colors.tranparentBlack}>
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
                width: '100%',
                backgroundColor: Colors.white,
                paddingHorizontal: 20,
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Rtext
                style={{
                  color: Colors.red,
                  fontSize: 18,
                  textAlign: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.red,
                  marginBottom: 10,
                }}>
                {' '}
                No Internet Connection
              </Rtext>

              <Rtext style={{ textAlign: 'center' }}>
                {' '}
                {`Please enable your internet connect to accessing the features of GSTCOMMAN.`}
              </Rtext>
              <TouchableOpacity
                onPress={() => Linking.openSettings()}
                style={{
                  marginTop: 20,
                  alignItems: 'center',
                  backgroundColor: Colors.primaryColor,
                  paddingVertical: 7,
                  paddingHorizontal: 8,
                  borderRadius: 10,
                }}>
                <Rtext
                  style={{
                    color: Colors.white,
                    width: width - 100,
                    textAlign: 'center',
                  }}>
                  Go to the app Setting{' '}
                </Rtext>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      {
        loader &&     <Loader />
      }
   
      <CustomToast />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
