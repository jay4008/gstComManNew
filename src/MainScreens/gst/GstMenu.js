import React, { useEffect, useRef, useState } from "react";
import {
  View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors, Fonts } from "../../assets/common/common";
import { Rtext } from "../../CommonComponents/common/Rtext";
import { messagePopUpActions } from "../../Store/popup";
import Subscription from "../popup/Subscription";
import { CusButtom } from "../../CommonComponents/common/CusButtom";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ScrollView } from "react-native-gesture-handler";

const DATA = [
  {
    id: "24 * 7 Support by Our Associate",
    title: " Details Information About Deduction",
    image: require('../../assets/image/product2.png')
  },
  {
    id: "24 * 7 Support by Our Associate",
    title: "Details Information About Deduction. ",
    image: require('../../assets/image/product1.png')
  },
  {
    id: "24 * 7 Support by Our Associate",
    title: "Details Information About Deduction.",
    image: require('../../assets/image/product3.png')
  },

];


const { width, height } = Dimensions.get('window')

const GstMenu = (props) => {
  const ref = useRef()
  const [selectedData, setSelecetedData] = useState({})
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.home.comments);
  const [activeSlide, setactiveSlide] = useState(0)
  const Catogery = props.route.params.item.categories;
  console.log('catogry=====',Catogery);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.flatlistMainView} onPress={() => {
        // dispatch(messagePopUpActions({
        //     headerText : "jay shah",
        //     desc : `pjkskjadgjhasghjdgasjhdgjahsgdhjgasd.
        //     You may also install the standalone version of React Developer Tools to inspect the React component hierarchy, their props, and state.
        //     Status: Debugger session` ,
        //     butnTxt : "masbdkjashjkdh ",
        // }))


        // props.navigation.navigate("ProductDetailsGst", { item: item });
        // ProductDetailsGst
        // setShowModal(true);
        // setSelecetedData(item);
      }

      }>
        <View style={styles.rowWiseChild}>
          <Image source={require('../../assets/icons/gst.png')} style={styles.flatListIconStyle} />
          <View>
            <Rtext style={{ fontFamily: Fonts.latoBold, fontSize: 25, color: Colors.white }}>{item?.name}</Rtext>
            <Rtext style={{ width: width - 140, fontSize: 16, color: Colors.white, marginTop: 5, }}>{item?.desc?.substr(0, 119)}</Rtext>
            <Rtext style={{ width: width - 140, fontSize: 16, color: Colors.white, marginTop: 5 }}> To make a type specimen book. It has survived  </Rtext>
          </View>
        </View>
      
      </TouchableOpacity>
    )
  }
  const pagination = () => {
    return (
      <Pagination

        // dotsLength={[...Data, { help: true }].length}
        dotsLength={[DATA].length}
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
        inactiveDotOpacity={0.5}
        inactiveDotScale={0.6}
      />
    );
  }
  const _renderItem = ({ item, index }) => {
    console.log("itemitemitemitemitem", item);
    return (
      <View>
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
          <Image style={{ height: 100, width: 240, borderRadius: 20, resizeMode: 'contain' }} source={item.image} />
          {/* <Rtext > {item?.help ? "Frequently Asked Question" : item?.name}</Rtext> */}
          <Rtext style={{fontSize: 15, paddingHorizontal: 10, marginTop: 10,  color: Colors.mainblue }}>{item.id}</Rtext>
          <Rtext style={{ fontSize: 15, paddingHorizontal: 10, marginTop: 10, color: Colors.mainblue }}>{item.title}</Rtext>

          {/* <CusButtom 
            text={'choose plan'}
            onpress={() => {
              props.navigation.navigate('ProductDetailsGst', { item: item });
            }} BTNstyle={{ marginHorizontal: 20}}  /> */}

        </View>
        
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <ScrollView>

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={Catogery}
          renderItem={renderItem}

        />

        <View style={{ height: 300, marginTop: 10 }}>
          <Carousel
            ref={ref}
            //data={[...Data, { help: true }]}
            data={DATA}
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
        {/* <Rtext style={{fontFamily:Fonts.latoBold,fontSize:100}}>Live it UP!</Rtext> */}
        <CusButtom text={'Proceed'} BTNstyle={{marginTop:50,width:'70%',alignSelf:'center'}}
        onpress={()=>{
          props.navigation.navigate("ProductDetailsGst",{ item: Catogery});
        }}
        
        
        
        />
      </ScrollView>


      
    </SafeAreaView>
  )
}
export default GstMenu;

const styles = StyleSheet.create({

  flatlistMainView: {
    paddingVertical: 30,
    backgroundColor: Colors.mainblue,
    marginBottom: 5,
    height: 150,
    //borderRadius: 10
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 30


  },
  rowWiseChild: {
    flexDirection: 'row',
    width: '70%'
  },
  flatListIconStyle: {
    height: 64,
    width: 64,
    resizeMode: 'contain',
    marginHorizontal: 15,
  }
})