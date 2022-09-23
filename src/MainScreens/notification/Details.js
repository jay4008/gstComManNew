import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Colors, Fonts } from '../../assets/common/common'
import { CusButtom } from '../../CommonComponents/common/CusButtom'
import { Rtext } from '../../CommonComponents/common/Rtext'
const { width, height } = Dimensions.get('window');
const Details = (props) => {
    return (
        <View Style={{flex:1,paddingHorizontal: 15}}>
             <RowWiseText
              text1={'Message :'}
              text2={'Lorem Ipsum has been the industrys standard dummy '}
              fontSize={13}
              fontFamily={Fonts.latoRegular}
            />
             <RowWiseText
              text1={'Description :'}
              text2={'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic '}
              fontSize={13}
              fontFamily={Fonts.latoRegular}
            />
            
           <CusButtom 
           BTNstyle={{width:'80%',alignSelf:'center'}}
           text={'Navigation'}
           onpress={()=>{
               
           }}
           
           />
        </View>
    )
}

const RowWiseText = ({
    text1 = '',
    text2 = '',
    fontFamily = Fonts.latoBold,
    fontSize = 14,
    price = false
  }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Rtext
          style={{ ...styles.name, fontSize: fontSize, fontFamily: fontFamily , width : price ? 250 : 150 }}
        >
          {text1}
        </Rtext>
        <Rtext style={{ ...styles.description, fontSize: fontSize - 1 }}>
          {text2}
        </Rtext>
      </View>
    );
  };
  const styles = StyleSheet.create({
    name: {
      width: 150,
      paddingHorizontal: 10,
      fontFamily: Fonts.latoBold,
      fontSize: 14,
    },
    description: {
      width: width - 170,
      paddingLeft: 10,
      fontFamily: Fonts.latoRegular,
      fontSize: 14,
      paddingVertical: 10,
      color: Colors.tranparentBlack,
      fontSize: 13,
    },
    text3: {
      alignSelf: 'center',
      color: Colors.primaryColor,
      fontFamily: Fonts.latoBold,
      fontSize: 14,
      marginBottom: 7,
    },
    Docview: {
      width: '100%',
      backgroundColor: Colors.white,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginVertical: 10,
    },
    img: {
      height: 60,
      width: 60,
      resizeMode: 'contain',
      tintColor: Colors.primaryColor,
    },
  });

export default Details

