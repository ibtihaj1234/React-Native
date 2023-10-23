// import React from 'react'
// import { StyleSheet } from 'react-native'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from '../screens/views/home/Home';
// import Login from '../screens/auth/login/Login';
// import DrawerComp from '../component/drawer/DrawerComp';
// import Signup from '../screens/auth/signup/Signup';
// import Profile from '../screens/views/profile/Profile';
// import Schedule from '../screens/views/schedue/Schedule';
// import Landing from '../screens/views/landing/Landing';



// const Navigation = () => {
//     const Drawer = createDrawerNavigator()

//     return (
//         <Drawer.Navigator
//             initialRouteName="Landing"
//             screenOptions={{ headerShown: false }}
//             drawerContent={(navigation) => <DrawerComp {...navigation} />}>
//             <Drawer.Screen name="Login" component={Login}
//                 options={
//                     ({ routes }) => (
//                         { swipeEnabled: false }
//                     )
//                 }
//             />
//             <Drawer.Screen name="Signup" component={Signup} />
//             <Drawer.Screen name="Home" component={Home} />
//             <Drawer.Screen name="Profile" component={Profile} />
//             <Drawer.Screen name="Schedule" component={Schedule} />
//             <Drawer.Screen name="Landing" component={Landing} />
//         </Drawer.Navigator>
//     )
// }

// export default Navigation