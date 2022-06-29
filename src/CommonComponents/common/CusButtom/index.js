import React from 'react';
import {ActivityIndicator, Image , TouchableOpacity} from 'react-native';
import {Rtext} from '../Rtext';
import { Fonts } from '../../../assets/common/common';
const CusButtom = ({children,
  text,
  onpress,
  BTNstyle,
  textStyle,
  image,
  ImgStyle,
  source,
  loader,
  ActivityIndicatorColor = '#fff',
}) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      style={{
        flexDirection: 'row',
        backgroundColor: '#4785ff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 12,
        marginTop : 15,
        borderColor :"#fff",
        borderWidth : 1,
        ...BTNstyle,
      }}>
      {image && <Image style={{...ImgStyle}} source={source}></Image>}

      {loader ? (
        <ActivityIndicator color={ActivityIndicatorColor}></ActivityIndicator>
      ) : (
        <Rtext style={{color: '#fff', ...styles.textStyle, ...textStyle}}>
          {text}
        </Rtext>
      )}

      {children}
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    padding: 8,
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0, .6)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 14,
    fontFamily : Fonts.latoRegular,
    letterSpacing: 0.3,
  },
};

export {CusButtom};
