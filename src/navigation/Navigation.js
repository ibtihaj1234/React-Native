import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/views/home/Home';
import Login from '../screens/auth/login/Login';
import DrawerComp from '../component/drawer/DrawerComp';
import Signup from '../screens/auth/signup/Signup';
import Profile from '../screens/views/profile/Profile';
import Schedule from '../screens/views/schedue/Schedule';



const Navigation = () => {
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator 
        initialRouteName='Home'
        screenOptions={{headerShown:false}}
        drawerContent={(navigation) => <DrawerComp {...navigation}/>}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Signup" component={Signup} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Schedule" component={Schedule} />
        </Drawer.Navigator>
    )
}

export default Navigation

const styles = StyleSheet.create({})