import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../MainScreens/Home';
import React from 'react';
import { normalizeSize } from '../utility/MyUtility';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Order from '../MainScreens/profile/Order';
import ContactUs from '../MainScreens/contactUs/ContactUs';


const Tab = createBottomTabNavigator();
const tabBarOptions = {
  activeTintColor: '#9370DB',
  tabStyle: { paddingTop: 6, paddingBottom: 6 },
  style: { height: normalizeSize(48, 42, 54) },
  safeAreaInsets: { bottom: 0 }
};

function MyBottomTabs() {
  return (
    <Tab.Navigator  tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={Home}    options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
/>
      <Tab.Screen name="Settings" component={Home}     options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" color={color} size={26} />
          ),
        }}
/>

<Tab.Screen name="ContactUs" component={ContactUs}     options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" color={color} size={26} />
          ),
        }}
/>

<Tab.Screen name="Order" component={Order}     options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" color={color} size={26} />
          ),
        }}
/>
    </Tab.Navigator>
  );
}
export default MyBottomTabs;