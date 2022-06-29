import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
const Stack = createNativeStackNavigator();
import {
  StyleSheet,

} from 'react-native';
import { enableScreens } from 'react-native-screens';
import Home from '../MainScreens/Home';
import MyBottomTabs from './MyBottomTabs';
import GstMenu from '../MainScreens/gst/GstMenu';
import Help from '../MainScreens/Help/Help';
enableScreens();
function MyStack(props) {

  const headerOptionForStackPage = {
    headerStyle: {
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    headerTintColor: '#000',
    headerTopInsetEnabled: false,
  };

const HeaderShown = () =>{
    return(
        <View>
           <Image style = {styles.headerlog}  source = {{uri : "http://www.atlcgroup.com/images/logo.png"}}></Image>
        </View>
    )
}
const HeaderRightShown = () =>{
    return(
        <TouchableOpacity >
           <Image style = {styles.HeaderIcon}  source = {require('../assets/icons8-notification-100.png')}></Image>
        </TouchableOpacity>
    )
}

const HeaderLeftShown = () =>{
    return(
        <TouchableOpacity onPress = {()=> props.navigation.openDrawer()}>

           <Image style = {styles.HeaderIcon}  source = {require('../assets/icons8-menu-128.png')}></Image>
        </TouchableOpacity>
    )
}

  return (
    <Stack.Navigator screenOptions={headerOptionForStackPage}>
      <Stack.Screen
        name="Home"
        component={MyBottomTabs}
        options={{
          headerTintColor: '#224585',
          headerTitleStyle: {color: '#000', fontSize: 14},
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft:() => <HeaderLeftShown/>,
         headerCenter:() => <HeaderShown/>,
         headerRight :() =>  <HeaderRightShown/>,
        }}
      />
        <Stack.Screen
        name="GstMenu"
        component={GstMenu}
        options={{
          headerTintColor: '#224585',
          headerTitleStyle: {color: '#000', fontSize: 14},
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft:() => <HeaderLeftShown/>,
         headerCenter:() => <HeaderShown/>,
         headerRight :() =>  <HeaderRightShown/>,
        }}
      />
              <Stack.Screen
        name="Help"
        component={Help}
        options={{
          headerTintColor: '#224585',
          headerTitleStyle: {color: '#000', fontSize: 14},
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft:() => <HeaderLeftShown/>,
         headerCenter:() => <HeaderShown/>,
         headerRight :() =>  <HeaderRightShown/>,
        }}
      />
      
    </Stack.Navigator>
  );
}
export default MyStack;

const styles = StyleSheet.create({
    headerlog:{

        height : 35,
        width :35,
        resizeMode :'stretch'
    },
    HeaderIcon:{
        tintColor :"#9370DB",
        height : 25,
        width :25,
        resizeMode :'stretch'
    }
})