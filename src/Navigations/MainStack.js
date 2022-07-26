import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
const Stack = createNativeStackNavigator();
import { StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import Home from '../MainScreens/Home';
import MyBottomTabs from './MyBottomTabs';
import GstMenu from '../MainScreens/gst/GstMenu';
import UpdateProfile from '../MainScreens/profile/UpdateProfile';
import Help from '../MainScreens/Help/Help';
import Notifications from '../MainScreens/notification/Notification';
import ProductDetailsGst from '../MainScreens/ProductDetails/ProductDetailsGst';
import Order from '../MainScreens/order/Order';
import { Colors } from '../assets/common/common';
import Address from '../MainScreens/Address/Address';
import Purchase from '../MainScreens/order/Purchase';
import DocList from '../MainScreens/pdf/DocList';
import { MyTest } from '../MainScreens/pdf/ImageList';
import PdfDocumentBackPack from '../MainScreens/pdf/PdfDocumentBackPack';
import { Rtext } from '../CommonComponents/common/Rtext';
import ImageDetail from '../MainScreens/pdf/ImageDetails';
import Product from '../../src/Product'
import PdfView from '../MainScreens/pdf/PdfView';



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

  const HeaderShown = () => {
    return (
      <View>
        <Image
          style={styles.headerlog}
          source={require('../assets/icons/logo.png')}></Image>
      </View>
    );
  };

  const Document = ({ navigation }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('PdfDocumentBackPack')}
        style={{
          backgroundColor: Colors.mainblue,
          paddingHorizontal: 8,
          paddingVertical: 5,
          borderRadius: 6,
        }}>
        <Rtext style={{ color: Colors.white }}>Pdf BackPack</Rtext>
      </TouchableOpacity>
    );
  };
  const HeaderRightShown = ({ navigation }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <Image
          style={styles.HeaderIcon}
          source={require('../assets/icons8-notification-100.png')}></Image>
      </TouchableOpacity>
    );
  };

  const HeaderLeftShown = () => {
    return (
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Image
          style={styles.HeaderIcon}
          source={require('../assets/icons8-menu-128.png')}></Image>
      </TouchableOpacity>
    );
  };

  return (
    <Stack.Navigator screenOptions={headerOptionForStackPage}>
      <Stack.Screen
        name="Home"
        component={MyBottomTabs}
        options={({ navigation }) => ({
          headerTintColor: '#224585',
          headerTitleStyle: { color: '#000', fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft: () => <HeaderLeftShown />,
          headerCenter: () => <HeaderShown />,
          headerRight: () => <HeaderRightShown navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="GstMenu"
        component={GstMenu}
        options={({ navigation }) => ({
          headerTintColor: '#224585',
          headerTitleStyle: { color: '#000', fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft: () => <HeaderLeftShown />,
          headerCenter: () => <HeaderShown />,
          headerRight: () => <HeaderRightShown navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={({ navigation }) => ({
          headerTintColor: '#224585',
          headerTitleStyle: { color: '#000', fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft: () => <HeaderLeftShown />,
          headerCenter: () => <HeaderShown />,
          headerRight: () => <HeaderRightShown navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="Notification"
        component={Notifications}
        options={({ navigation }) => ({
          headerTintColor: '#224585',
          headerTitleStyle: { color: '#000', fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft: () => <HeaderLeftShown />,
          headerCenter: () => <HeaderShown />,
        })}
      />

      <Stack.Screen
        name="ProductDetailsGst"
        component={ProductDetailsGst}
        options={({ navigation }) => ({
          title: 'Details Page',
          headerTintColor: '#224585',
          headerTitleStyle: { color: Colors.primaryColor, fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => <HeaderShown />,
        })}
      />

      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={({ navigation }) => ({
          title: 'Edit Profile',
          headerTintColor: '#224585',
          headerTitleStyle: { color: Colors.primaryColor, fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => <HeaderShown />,
        })}
      />
      <Stack.Screen
        name="MyOrder"
        component={Order}
        options={({ navigation }) => ({
          title: 'My Order',
          headerTintColor: '#224585',
          headerTitleStyle: { color: Colors.primaryColor, fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => <HeaderShown />,
        })}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={({ navigation }) => ({
          title: 'Address',
          headerTintColor: '#224585',
          headerTitleStyle: { color: Colors.primaryColor, fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => <HeaderShown />,
        })}
      />

      <Stack.Screen
        name="Purchase"
        component={Purchase}
        options={({ navigation }) => ({
          title: 'Address',
          headerTintColor: '#224585',
          headerTitleStyle: { color: Colors.primaryColor, fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => <HeaderShown />,
        })}
      />

      <Stack.Screen
        name="DocList"
        component={DocList}
        options={({ navigation }) => ({
          title: 'My Docs',
          headerTintColor: '#224585',
          headerTitleStyle: { color: Colors.primaryColor, fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => <Document navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="MyTest"
        component={MyTest}
        options={({ navigation }) => ({
          title: 'My Docs',
          headerTintColor: '#224585',
          headerTitleStyle: { color: Colors.primaryColor, fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => <Document navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="PdfDocumentBackPack"
        component={PdfDocumentBackPack}
        options={({ navigation }) => ({
          title: 'My Docs',
          headerTintColor: '#224585',
          headerTitleStyle: { color: Colors.primaryColor, fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => <HeaderShown />,
        })}
      />
      <Stack.Screen
        name="ImageDetail"
        component={ImageDetail}
        options={({ navigation }) => ({
          title: 'Edit Image',
          headerTintColor: '#224585',
          headerTitleStyle: { color: Colors.primaryColor, fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => <HeaderShown />,
        })}
      />


<Stack.Screen
        name="Product"
        component={Product}
        options={({ navigation }) => ({
          title: 'Edit Image',
          headerTintColor: '#224585',
          headerTitleStyle: { color: Colors.primaryColor, fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => <HeaderShown />,
        })}
      />



<Stack.Screen
        name="PdfView"
        component={PdfView}
        options={({ navigation }) => ({
          title: 'Pdf Details',
          headerTintColor: '#224585',
          headerTitleStyle: { color: Colors.primaryColor, fontSize: 14 },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => <HeaderShown />,
        })}
      />


      

    </Stack.Navigator>
  );
}
export default MyStack;

const styles = StyleSheet.create({
  headerlog: {
    height: 35,
    width: 35,
    resizeMode: 'stretch',
  },
  HeaderIcon: {
    tintColor: '#9370DB',
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
});
