import React from "react";
import {
    View,
    ImageBackground,
    Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AuthFrameStyle from "../Styles/AuthFrame";
import * as Animatable from 'react-native-animatable';
const AuthFrame = ({ children, FrameStyle = {} }) => {

    return (
        <ImageBackground imageStyle={AuthFrameStyle.BackGroundImage} source={{ uri: "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1575&q=80" }} style={{ flex: 1, backgroundColor: '#cee8f5', alignContent: 'center', justifyContent: 'center', ...FrameStyle }}>

            <View style={AuthFrameStyle.ContainViewStyle}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={{ uri: "http://www.atlcgroup.com/images/logo.png" }} style={{ height: 100, width: 180, resizeMode: 'contain', alignSelf: 'center', marginBottom: 50 }} />
                    <Animatable.View
                        iterationCount={1}
                        animation={'fadeInRightBig'}
                        duration={1000}>
                        {
                            children
                        }

                    </Animatable.View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

export default AuthFrame;
