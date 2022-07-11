import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Fonts } from '../../../assets/common/common';
// import Ionicons from 'react-native-vector-icons/Ionicons';
const winHeight = Dimensions.get('window').height
const Ainput = ({
  value,
  onChangeText = () => {},
  multiline = false,
  onBlur = () => {},
  containerStyle ,
  placeholder = '',
  onPressDate,
  numberOfLines = 1,
  secureTextEntry = false,
  editable = true,
  border = '#76A8C8',
  style = {},
  view = false,
  onFocus,
  calender,
}) => {
  const [lcSecureTextEntry, setLcSecureTextEntry] = useState(secureTextEntry);
  return (
    <View style={{...styles.containerStyle , ...containerStyle}}>
      <TextInput

      onFocus = {onFocus}
        value={value}
        onChangeText={onChangeText}
        style={editable ? {...styles.inputStyle ,...style } : styles.inputEditableFalseStyle}
        editable={editable}
        // style={[styles.inputStyle,style, {borderColor:border, paddingRight: view ? 20 : 15}] }
        autoCorrect={false}
        placeholder={placeholder}
        onBlur={onBlur}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={lcSecureTextEntry}
      />
      {view ? (
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => {
            setLcSecureTextEntry(!lcSecureTextEntry);
          }}>
          {/* {lcSecureTextEntry ? (
            // <Ionicons name="ios-eye" color="gray" size={26}></Ionicons>
            <Image
              style={{height: 20, width: 20, resizeMode: 'stretch'}}
              source={require('../../../assets/icons/invisible.png')}
            />
          ) : (
            <Image
              style={{height: 20, width: 20, resizeMode: 'stretch'}}
              source={require('../../../assets/icons/visibility.png')}
            />
          )} */}
        </TouchableOpacity>
      ) : null}

      {/* {calender ? (
        <TouchableOpacity style={styles.searchIcon} onPress={onPressDate}>
          <Image
            style={{height: 25, width: 25, resizeMode: 'stretch'}}
            source={require('../../../assets/icons/date.png')}></Image>
        </TouchableOpacity>
      ) : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    // width: 70,
    marginTop: 15,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.3,
    elevation: 5,
    shadowRadius: 15,
    shadowOffset: {width: 4, height: 4},
  },
  inputStyle: {
    padding: 10,
    shadowColor: '#000',

    paddingLeft: 15,
    paddingRight: 15,

    fontSize: 15,
    lineHeight: 20,
    color: 'black',
    borderColor: '#C4C4C4',
    borderWidth: 0.5,
fontFamily : Fonts.latoRegular,
    height: 45,
    borderRadius: 10,
  },

  inputEditableFalseStyle: {
    padding: 10,
    shadowColor: '#000',

    paddingLeft: 15,
    paddingRight: 15,

    fontSize: 15,
    lineHeight: 20,
    color: '#224585',
    borderColor: '#224585',
    borderWidth: 0.5,

    height: 45,
    borderRadius: 10,
  },
  searchIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
});

export {Ainput};
