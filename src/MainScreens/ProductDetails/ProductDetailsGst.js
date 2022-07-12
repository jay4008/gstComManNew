import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Colors, Fonts} from '../../assets/common/common';
import {CusButtom} from '../../CommonComponents/common/CusButtom';
import {Rtext} from '../../CommonComponents/common/Rtext';
import Subscription from '../popup/Subscription';

const ProductDetailsGst = (props) => {

  const [showModal, setShowModal] = useState(false);
  console.log("props", props.route.params );
  return (
    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
        elevation: 3,
        backgroundColor: '#D3D3D3',
      }}
      imageStyle={{
        height: '100%',
        width: '100%',
        backgroundColor: Colors.primaryColor,
      }}>
        <KeyboardAwareScrollView>
      <View style={{paddingHorizontal: 20, marginVertical: 20 }}>
        <Rtext
          style={{
            color: Colors.white,
            fontSize: 18,
            fontFamily: Fonts.latoBold,
          }}>
         { props.route.params.item.name}
        </Rtext>
        <Rtext
          style={{
            fontSize: 12,
            marginVertical: 10,
            color: Colors.white,
          }}>{props.route.params.item.description}</Rtext>
      </View>

      <View
        style={{
          paddingVertical: 15,
          borderRadius: 10,
          backgroundColor: Colors.white,
          marginHorizontal: 15,
           marginBottom :200
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Rtext style={{paddingHorizontal: 10}}>{props.route.params.item.name}</Rtext>
          <Rtext style={{color: 'red', marginHorizontal: 10}}>
           {moment().format('DD MMM YYYY')}
          </Rtext>
        </View>
        <View style={styles.mainview3}>
          <Image
            source={props.route.params.item.image}
            style={{height: 50, width: 50}}
          />
          <View style={{flexDirection: 'column', paddingRight: 50}}>
            <Rtext>Koushik Sham</Rtext>
            <Rtext style={{paddingTop: 10}}>sham@gmail.com</Rtext>
          </View>
          <Rtext style={{paddingTop: 30}}>Total:1000</Rtext>
        </View>
        <CommonButton text1={'Quantity'} text2={'5'} arrHide={true} />
        <CommonButton text1={'jay shsh'} text2={'dsfsd'} />
        <CommonButton text1={'jay shsh'} text2={'dsfsd'} />
        <CommonButton text1={'jay shsh'} text2={'dsfsd'} />
      </View>

    
      </KeyboardAwareScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
          flexDirection: 'row',
        }}>
        <CusButtom
          BTNstyle={{
            width: '50%',
            borderRadius: 0,
            backgroundColor: Colors.primaryColor,
          }}
          text={'Cancel'}
        />
        <CusButtom
        onpress = {() => setShowModal(true)}
          BTNstyle={{
            width: '50%',
            borderRadius: 0,
            backgroundColor: Colors.white,
          }}
          textStyle={{color: Colors.black}}
          text={'Add to cart'}
        />
      </View>

      <View>
                {
                    showModal && <Subscription setShowModal={setShowModal} selectedData={selectedData} />
                }
            </View>
    </ImageBackground>
  );
};

export default ProductDetailsGst;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginTop: 10,
  },
  mainview3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  mainview2: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 20,
    height: 100,
  },
});

const CommonButton = ({onPress, text1 = '', text2 = '', arrHide = false}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          borderRadius: 10,
          paddingVertical: 8,
          paddingHorizontal: 12,
        }}>
        <Rtext style={{}}>{text1}</Rtext>
        <View style={{flexDirection: 'row'}}>
          <Rtext style={{}}>{text2}</Rtext>

          {!arrHide && (
            <Image
              source={require('../../assets/icons/grater.png')}
              style={{height: 20, width: 20, resizemode: 'contain'}}
            />
          )}
        </View>
      </View>
      <View style={{height: 0.5, backgroundColor: Colors.silver}} />
    </TouchableOpacity>
  );
};
