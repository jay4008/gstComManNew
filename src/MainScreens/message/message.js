// import React from 'react'
// import { View, Text } from 'react-native'

// const message = () => {
//     return (
//         <View>
//             <Text>koushik</Text>
//         </View>
//     )
// }

// export default message

import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert, SafeAreaView, Image ,StyleSheet, Dimensions,FlatList} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { Rtext } from './CommonComponents/common/Rtext';
import { Rtext } from '../../CommonComponents/common/Rtext';
import { Colors } from '../../assets/common/common';
import { Fonts } from '../../assets/common/common';
import { Ainput } from '../../CommonComponents/common/Ainput';



const {height, width} = Dimensions.get('window');

const DATA = [
    {
        name: 'Koushik',
        mess: 'hlw Koushik',
        time: '2:45pm',
        img: require('../../assets/icons/profile.png')
    },
    {
        name: 'souvik',
        mess: 'hlw ',
        time: '3.15pm',
        img: require('../../assets/icons/camera.png')
    },
    {
        name: 'Ranjan',
        mess: 'how are you?',
        time: 'Yestarday',
        img: require('../../assets/icons/clock.png')
    },
    {
        name: 'jay',
        mess: 'Whare r u from?',
        time: '3.15pm',
        img: require('../../assets/icons/delete.png')
    },
    {
        name: 'Koushik',
        mess: 'hlw Koushik',
        time: '2:45pm',
        img: require('../../assets/icons/fail.png')
    },
    {
        name: 'souvik',
        mess: 'hlw ',
        time: '3.15pm',
        img: require('../../assets/icons/filter.png')
    },
    {
        name: 'Ranjan',
        mess: 'how are you?',
        time: 'Yestarday',
        img: require('../../assets/icons/grater.png')
    },
    {
        name: 'jay',
        mess: 'Whare r u from?',
        time: 'Yestarday',
        img: require('../../assets/icons/less.png')
    },
    {
        name: 'Koushik',
        mess: 'hlw Koushik',
        time: '3.15pm',
        img: require('../../assets/icons/gst.png')
    },
    {
        name: 'souvik',
        mess: 'hlw ',
        time: '2:45pm',
        img: require('../../assets/icons/help.png')
    },
    {
        name: 'Ranjan',
        mess: 'how are you?',
        time: '2:45pm',
        img: require('../../assets/icons/fail.png')
    },
    {
        name: 'jay',
        mess: 'Whare r u from?',
        time: 'Yestarday',
        img: require('../../assets/icons/image.png')
    },
    {
        name: 'Koushik',
        mess: 'hlw Koushik',
        time: '3.15pm',
        img: require('../../assets/icons/profile.png')
    },
    {
        name: 'souvik',
        mess: 'hlw ',
        time: '2:45pm',
        img: require('../../assets/icons/grater.png')
    },
    {
        name: 'Ranjan',
        mess: 'how are you?',
        time: 'Yestarday',
        img: require('../../assets/icons/phone.png')
    },

    {
        name: 'jay',
        mess: 'Whare r u from?',
        time: '3.15pm',
        img: require('../../assets/icons/tick.png')
    },
];

const message = (props) => {


    return (

        <View style={{ flex: 1, padding: 10, borderRadius: 15, borderWidth: 2, }}>

            <View style={{ borderRadius: 15, borderWidth: 1, width: "98%", padding: 5 }}>
                <View style={{ flexDirection: 'row', }}>
                    <Image style={{ width: 45, height: 45, }} source={require('../../assets/icons/profile.png')} />
                    <View style={{ flexDirection: "column", paddingHorizontal: 10 }}>
                        <Rtext>Koushik Sham</Rtext>
                        <Rtext>Message:</Rtext>
                        <View style={{ width: "95%", paddingVertical: 5 }}>
                            <Rtext style={{ color: Colors.primaryColor }}>Lorem Ipsum has been the industry's standard dummy text ever </Rtext>
                        </View>
                        <View style={{ height: 1, borderColor: Colors.tranparentBlack, borderWidth: .5, marginBottom: 5 }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>

                            <TouchableOpacity >
                                <Image source={require('../../assets/icons/like.png')} style={{ width: 25, height: 25, resizemode: 'container', padding: 10, tintColor: Colors.primaryColor }}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity >
                                <Rtext style={{ fontFamily: Fonts.latoBold, color: Colors.primaryColor }}>Comment</Rtext>
                            </TouchableOpacity>
                        </View>

                    </View>


                </View>

            </View>
            <View>
                <FlatList
                    style={styles.flatlistMainView}
                    showsVerticalScrollIndicator={false}
                    data={DATA}
                    renderItem={renderItem}
                />
            </View>


            <View style={{ position: 'absolute', bottom: 5, flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', padding: 10 }}>

                <TextInput multiline={true} placeholdar={'Message...'} style={{ width: '70%', borderWidth: 1, borderColor: Colors.mainblue, borderRadius: 10 }}></TextInput>
                <TouchableOpacity>
                    <Image style={{ width: 50, height: 50, borderRadius: 100, borderWidth: 2, borderColor: Colors.mainblue, tintColor: Colors.mainblue }} source={require('../../assets/icons/send.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default message;


const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
        //   haldleNotification(item);
        props.navigation.navigate('message')
        }}
        style={styles.click}>
        <View style={{flexDirection: 'row'}}>
          {/* <Image
            style={styles.Img}
            source={item.img}
          /> */}
          <View>
            <View style={styles.card}>
              {/* <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/profile.png')} />   */}
              <Rtext style={styles.name}>{item.name}</Rtext>
              <Rtext style={{color:Colors.silver}}>{item.time}</Rtext>
            </View>
            <View>
              <Rtext style={{marginTop: 7, color: Colors.silver}}>
                {item.mess}
              </Rtext>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };


const styles = StyleSheet.create({
    flatlistMainView: {
      backgroundColor: 'white',
      height:height-290
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
     // padding: 10,
      //alignItems: "center"
    },
  });