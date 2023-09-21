import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Alert
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
    TextInput,
    Button
} from 'react-native-paper'
import Header from '../header/Header'
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions'
import En from '../../constants/lang/En'
import Colors from '../../constants/colors/Colors'

const LoginComp = () => {

    // Hooks

    const navigation = useNavigation()

    const [state, setState] = useState({
        userName: "",
        email: "",
        password: "",
    })

    // Change Function

    const handleChange = (key, value) => {
        setState(prev => ({ ...prev, [key]: value }))
    }

    // Login Function

    const handleLogin = () => {

        if (state.userName && state.email && state.password != '') {
            navigation.navigate('Home', state)
            setState({
                userName: '',
                email: '',
                password: ''
            })
        }
        else {
            Alert.alert('All fields are mendatory')
        }

    }

    return (
        <>

            {/* Header */}

            <Header title={En.login} />

            {/* Screen */}

            <View style={[styles.Page]}>
                <Image
                    style={{
                        height: responsiveHeight(20),
                        width: responsiveWidth(40),
                    }}
                    resizeMode='cover'
                    source={require('./../../assets/Logo.png')} />

                {/* Form */}

                <View style={styles.Form}>
                    <TextInput
                        placeholder='Type name'
                        label='Name'
                        mode='outlined'
                        value={state.userName}
                        onChangeText={(e) => handleChange("userName", e)}
                        keyboardType='default'
                    />
                    <TextInput
                        placeholder='Type Email'
                        textContentType='emailAddress'
                        label='Email'
                        mode='outlined'
                        value={state.email}
                        onChangeText={(e) => handleChange("email", e)}
                        keyboardType='email-address'
                    />
                    <TextInput
                        placeholder='Type Password'
                        label='Password'
                        mode='outlined'
                        value={state.password}
                        onChangeText={(e) => handleChange("password", e)}
                        keyboardType='visible-password'
                        secureTextEntry
                    />
                    <Button
                        buttonColor={Colors.purple}
                        textColor={Colors.white}
                        mode='contained'
                        onPress={handleLogin}
                    >{En.login}</Button>
                </View>
            </View>
        </>
    )
}

export default LoginComp

const styles = StyleSheet.create({
    Page: {
        flex: 1,
        justifyContent: 'space-evenly',
        width: responsiveWidth(100),
        alignItems: 'center',
        zIndex: 999,
    },
    Form: {
        height: responsiveHeight(60),
        gap: responsiveHeight(1),
        width: responsiveWidth(80),
        justifyContent: 'flex-start',
        zIndex: 1000,
    }
})