import React, { useState } from "react";
import {
    View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions
} from "react-native";
import { Colors } from "../../assets/common/common";
import { Rtext } from "../../CommonComponents/common/Rtext";



const { width, height } = Dimensions.get('window')

const Help = () => {
    const Data = [

        {
            name: 'GST',
            description: `GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
            image: require('../../assets/icons/normal.png'),
        },
        {
            name: 'Composition',
            description: `Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Casual',
            description: 'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
            image: require('../../assets/icons/casual.png'),
        },

        {
            name: 'GST,',
            description: `GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
            image: require('../../assets/icons/normal.png'),
        },
        {
            name: 'Composition',
            description: `Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Casual',
            description: 'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
            image: require('../../assets/icons/casual.png'),
        },
        {
            name: 'GST',
            description: `GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
            image: require('../../assets/icons/normal.png'),
        },
        {
            name: 'Composition',
            description: `Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Casual',
            description: 'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
            image: require('../../assets/icons/casual.png'),
        },
        {
            name: 'GST',
            description: `GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
            image: require('../../assets/icons/normal.png'),
        },
        {
            name: 'Composition',
            description: `Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Casual',
            description: 'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
            image: require('../../assets/icons/casual.png'),
        },

        {
            name: 'GST,',
            description: `GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
            image: require('../../assets/icons/normal.png'),
        },
        {
            name: 'Composition',
            description: `Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Casual',
            description: 'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
            image: require('../../assets/icons/casual.png'),
        },
        {
            name: 'GST',
            description: `GST, or Goods and Services Tax, is an indirect tax imposed on the supply of goods and services`,
            image: require('../../assets/icons/normal.png'),
        },
        {
            name: 'Composition',
            description: `Monthly Compliance Certificate means a certificate signed by a responsible officer of Parent, in substantially the form attached hereto as Exhibit N and reasonably satisfactory to the Holder or Agent, as applicable.`,
            image: require('../../assets/icons/composition.png'),
        },
        {
            name: 'Casual',
            description: 'Quarterly Compliance Certificate means a certificate delivered by the Borrower to the Agent in the form of Exhibit "H".',
            image: require('../../assets/icons/casual.png'),
        },
    ]


    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
            <FlatList
          keyExtractor = {(item , index ) => index.toString()}
          showsVerticalScrollIndicator = {false}
                data={Data}
                renderItem={({ item, index }) => <RenderItem item={item} index={index} />}

            />
        </SafeAreaView>
    )
}
export default Help;



const RenderItem = ({ item, index }) => {

    const [enable, setEnable] = useState(false)
    return (
        <View>
            <TouchableOpacity style={styles.flatlistMainView} onPress={() => {
                setEnable(!enable);
                // setEnable(prev => !prev) ;

            }}>
                <View style={{...styles.rowWiseChild  , justifyContent :'space-between'}}>
                <View style={styles.rowWiseChild}>
                    <Image source={item.image} style={styles.flatListIconStyle} />
                    <View>
                        <Rtext>{item?.name}</Rtext>

                    </View>
               
                </View>
                <Image style = {{ height : 24 , width : 24 , resizeMode :'contain'}}  source = { enable ? require('../../assets/icons/uparr.png'): require('../../assets/icons/downarr.png')} />
                </View>
            

            </TouchableOpacity>
            {
                enable && (<Rtext style={{ width: width - 30, fontSize: 12, color: 'silver', marginBottom: 15 }}>{item?.description}</Rtext>)
            }

        </View>
    )
}
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
        height: 24,
        width: 24,
        resizeMode: 'contain',
        marginHorizontal: 15
    }
})