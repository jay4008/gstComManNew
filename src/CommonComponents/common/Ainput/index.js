import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import { Colors, Fonts } from '../../../assets/common/common';
import { Rtext } from '../Rtext';
// import Ionicons from 'react-native-vector-icons/Ionicons';
const winHeight = Dimensions.get('window').height
const Ainput = ({
  value,
  onChangeText = () => { },
  multiline = false,
  onBlur = () => { },
  containerStyle,
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
  image = false,
  source , keyboardType = 'default'
}) => {
  const [lcSecureTextEntry, setLcSecureTextEntry] = useState(secureTextEntry);
  return (
    <View style={{ ...styles.containerStyle, ...containerStyle }}>


      {image && (
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => {
            setLcSecureTextEntry(!lcSecureTextEntry);
          }}>

          <Image
            style={{ height: 20, width: 20, resizeMode: 'stretch' }}
            source={source}
          />


        </TouchableOpacity>
      )}
      <TextInput

        onFocus={onFocus}
        value={value}
        onChangeText={onChangeText}
        style={editable ? (image ? { ...styles.inputStyle, paddingLeft: 35, ...style } : { ...styles.inputStyle, ...style }) : styles.inputEditableFalseStyle}
        editable={editable}
        // style={[styles.inputStyle,style, {borderColor:border, paddingRight: view ? 20 : 15}] }
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={Platform.OS === 'ios' ? Colors.silver : Colors.silver}
        onBlur={onBlur}
        multiline={multiline}
        numberOfLines={numberOfLines}
        keyboardType = { keyboardType  }
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
    shadowOffset: { width: 4, height: 4 },
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
    fontFamily: Fonts.latoRegular,
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
    left: 15,
    top: 12,
  },
});

export { Ainput };
