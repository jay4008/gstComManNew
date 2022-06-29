import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import MyStack from './MainStack';
const Drawer = createDrawerNavigator();
const RootDrawerNav = () => {
  return (
    <>
    <MyStack/>
      {/* <Drawer.Navigator
        initialRouteName="Root"
        drawerContent={(props) => <DrawerContent {...props}  />}>
        <Drawer.Screen name="Root" component={MyStack} />
      </Drawer.Navigator> */}
    </>
  );
};

export default RootDrawerNav;