import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import Header from '../header/Header'

const LoginComp = () => {

    const navigation = useNavigation()

    const [state, setState] = useState({
        userName: "",
        email: "",
        password: "",
    })

    const handleChange = (key, value) => {
        setState(prev => ({ ...prev, [key]: value }))
    }

    const handleLogin = () => {
        navigation.navigate('Home', state)
    }

    return (
        <>
            <Header title='Login' />

            <View style={[styles.Page]}>
                <View style={{ height: '20%' }}>
                    <Image
                        style={{
                            height: 200,
                            width: 200
                        }}
                        source={require('./../../assets/Logo.png')} />
                </View>
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
                    />
                    <Button
                        buttonColor='#9932D8'
                        textColor='#FFFFFF'
                        mode='contained'
                        onPress={handleLogin}
                    >Login</Button>
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
        width: '100%',
        alignItems: 'center',
    },
    Form: {
        height: '60%',
        gap: 10,
        width: '80%',
        justifyContent: 'flex-start',
    }
})