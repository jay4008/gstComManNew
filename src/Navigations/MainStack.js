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
import UpdateProfile from '../MainScreens/profile/UpdateProfile';
import Help from '../MainScreens/Help/Help';
import Notifications from '../MainScreens/notification/Notification';
import ProductDetailsGst from '../MainScreens/ProductDetails/ProductDetailsGst';
import { Colors } from '../assets/common/common';
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
const HeaderRightShown = ({navigation}) =>{
    return(
        <TouchableOpacity onPress = {() => navigation.navigate('Notification')} >
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
        options={ ({navigation}) =>(

          {
            headerTintColor: '#224585',
            headerTitleStyle: {color: '#000', fontSize: 14},
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerLeft:() => <HeaderLeftShown/>,
           headerCenter:() => <HeaderShown/>,
           headerRight :() =>  <HeaderRightShown navigation = {navigation}/>,
          }
        )}
      />
        <Stack.Screen
        name="GstMenu"
        component={GstMenu}
        options={ ({navigation}) =>(
          {
            headerTintColor: '#224585',
            headerTitleStyle: {color: '#000', fontSize: 14},
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerLeft:() => <HeaderLeftShown/>,
           headerCenter:() => <HeaderShown/>,
           headerRight :() =>  <HeaderRightShown navigation = {navigation}/>,
          }
        )}
      />
        <Stack.Screen
        name="Help"
        component={Help}
        options={ ({navigation}) =>(

          {
            headerTintColor: '#224585',
            headerTitleStyle: {color: '#000', fontSize: 14},
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerLeft:() => <HeaderLeftShown/>,
           headerCenter:() => <HeaderShown/>,
           headerRight :() =>  <HeaderRightShown navigation = {navigation}/>,
          }

        )}
      />

<Stack.Screen
        name="Notification"
        component={Notifications}
        options={ ({navigation }) =>(
          { 
            headerTintColor: '#224585',
            headerTitleStyle: {color: '#000', fontSize: 14},
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerLeft:() => <HeaderLeftShown/>,
           headerCenter:() => <HeaderShown />,
          }

        )}
      />


<Stack.Screen
        name="ProductDetailsGst"
        component={ProductDetailsGst}
        options={ ({navigation }) =>(
          { 
            title : "Details Page",
            headerTintColor: '#224585',
            headerTitleStyle: {color: Colors.primaryColor, fontSize: 14},
            headerStyle: {
              backgroundColor: '#fff',
            },
           headerRight :() =>   <HeaderShown />,

          }

        )}
      />
      

      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={ ({navigation }) =>(
          { 
            title : "Edit Profile",
            headerTintColor: '#224585',
            headerTitleStyle: {color: Colors.primaryColor, fontSize: 14},
            headerStyle: {
              backgroundColor: '#fff',
            },
           headerRight :() =>   <HeaderShown />,

          }

        )}
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