import React, { useEffect } from "react";
import {
    View,SafeAreaView, FlatList,StyleSheet, TouchableOpacity,Image, Dimensions
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../../assets/common/common";
import { Rtext } from "../../CommonComponents/common/Rtext";
import { messagePopUpActions } from "../../Store/popup";



const {width , height } = Dimensions.get('window')

const GstMenu =()=>{

    const dispatch = useDispatch();
    const comments = useSelector((state) => state.home.comments);
        const Data=[
            
            {
            name:'Normal',
            description:`GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
            image:require('../../assets/icons/normal.png'),
            price:'100000',

        },
        {
            name:'Composition',
            description:`Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
            image:require('../../assets/icons/composition.png'),
        },
        {
            name:'Casual',
            description:'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
            image:require('../../assets/icons/casual.png'),
        },    
    
    ]
    useEffect(()=>{
        console.log("comments", comments)

    },[comments])

    const renderItem = ({item})=>{
        return(
            <TouchableOpacity style={styles.flatlistMainView} onPress={() => {
                dispatch(messagePopUpActions({
                    headerText : "jay shah",
                    desc : `pjkskjadgjhasghjdgasjhdgjahsgdhjgasd.
                    You may also install the standalone version of React Developer Tools to inspect the React component hierarchy, their props, and state.
                    Status: Debugger session` ,
                    butnTxt : "masbdkjashjkdh ",
                }))}}>
                <View style={styles.rowWiseChild}>
                    <Image source={item.image} style={styles.flatListIconStyle} />
                    <View>
                    <Rtext>{item?.name}</Rtext>
               <Rtext style = {{width : width - 140 , fontSize : 12 , color : 'silver' , marginTop : 5}}>{item?.description}</Rtext>
               </View>
                </View>
           
            </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView style={{flex:1 , paddingHorizontal : 15}}>
            <FlatList  
            keyExtractor = {(item , index ) => index.toString()}
            showsVerticalScrollIndicator = {false}
            data={Data}
            renderItem = {renderItem}
            
            />
        </SafeAreaView>
    )
}
export default GstMenu;

const styles=StyleSheet.create({

    flatlistMainView:{
        paddingVertical:15,
        backgroundColor:Colors.white, 
        marginBottom : 5,
        borderRadius : 10
    },
    rowWiseChild:{
        flexDirection:'row'
    },
    flatListIconStyle:{
        height:64,
        width:64,
        resizeMode:'contain',
        marginHorizontal : 15
    }
})