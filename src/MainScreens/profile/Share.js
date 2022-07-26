import React from "react";
import { Text, View } from "react-native";
import { useEffect } from "react";
import { request } from "../../utility/common";


const Share=()=>{
    
    const ApicallOfTodos = async () => {
        try {
            let Reqdata = await request("get", '/api/products');
            console.log("SHOUVIK", Reqdata.data)
        } catch (e) {
            console.log("errorerrorerrorerrorerrorerrorerror", e)
        }

    }

    useEffect(() => {
        ApicallOfTodos();
        // dispatch(commentsApi())
        // dispatch(HomeTodosApi())
        
    }, [])


    return(
        <View style={{flex:1}}>
        <Text >My name bjcbsdbjhcbhbchj</Text>
        
    </View>
    )
 
}
export default Share;