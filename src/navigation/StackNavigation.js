import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import DrawerComp from '../component/drawer/DrawerComp'
import Login from '../screens/auth/login/Login'
import Signup from '../screens/auth/signup/Signup'
import Curriculum from '../screens/views/curriculum/Curriculum'
import Home from '../screens/views/home/Home'
import Landing from '../screens/views/landing/Landing'
import Profile from '../screens/views/profile/Profile'
import Schedule from '../screens/views/schedue/Schedule'


const StackNavigation = () => {

    const Stack = createStackNavigator()
    const Drawer = createDrawerNavigator()


    return (
        <Drawer.Navigator
            initialRouteName="Landing"
            screenOptions={{ headerShown: false }}
            drawerContent={(navigation) => <DrawerComp {...navigation} />}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={Login}
                options={
                    ({ routes }) => (
                        { swipeEnabled: false }
                    )
                }
            />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Schedule" component={Schedule} />
            <Stack.Screen name="Curriculum" component={Curriculum} />
            <Stack.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

export default StackNavigation