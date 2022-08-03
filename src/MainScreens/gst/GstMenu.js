import React, { useEffect, useState } from "react";
import {
    View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../../assets/common/common";
import { Rtext } from "../../CommonComponents/common/Rtext";
import { messagePopUpActions } from "../../Store/popup";
import Subscription from "../popup/Subscription";
import { CusButtom } from "../../CommonComponents/common/CusButtom";




const { width, height } = Dimensions.get('window')

const GstMenu = (props) => {

    const [selectedData, setSelecetedData] = useState({})
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.home.comments);
    
    const Catogery = props.route.params.item.categories;
   

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


                props.navigation.navigate("ProductDetailsGst" , {item: item});
                // ProductDetailsGst
                // setShowModal(true);
                // setSelecetedData(item);
            }

            }>
                <View style={styles.rowWiseChild}>
                    <Image source={require('../../assets/icons/gst.png')}style={styles.flatListIconStyle} />
                    <View>
                        <Rtext>{item?.name}</Rtext>
                        <Rtext style={{ width: width - 140, fontSize: 12, color: 'silver', marginTop: 5 }}>{item?.desc?.substr(0,119)}</Rtext>
                        <Rtext>{item?.amount}</Rtext>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                data={Catogery}
                renderItem={renderItem}

            />
        </SafeAreaView>
    )
}
export default GstMenu;

const styles = StyleSheet.create({

    flatlistMainView: {
        paddingVertical: 15,
        backgroundColor: Colors.white,
        marginBottom: 5,
        borderRadius: 10
    },
    rowWiseChild: {
        flexDirection: 'row'
    },
    flatListIconStyle: {
        height: 64,
        width: 64,
        resizeMode: 'contain',
        marginHorizontal: 15
    }
})