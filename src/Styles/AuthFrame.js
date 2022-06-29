import {
    Dimensions,
    StyleSheet
} from "react-native";

const AuthFrameStyle  = StyleSheet.create({
    BackGroundImage :{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, resizeMode: 'cover' },
    ContainViewStyle :{ width: '100%', padding: 20 },
 
})
export default AuthFrameStyle;