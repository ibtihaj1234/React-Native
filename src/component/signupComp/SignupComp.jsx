import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import Header from '../header/Header'

const SignupComp = () => {
    const navigation = useNavigation()

    const [state, setState] = useState({
        userName: "",
        email: "",
        password: ""
    })

    const handleChange = (key, value) => {
        setState(prev => ({ ...prev, [key]: value }))
    }

    const handleSignup = () => {
        navigation.navigate("Login", { state })
    }

    return (
        <>
            <Header title='Signup' />
            
                <View style={[styles.Page]}>
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
                            buttonColor='#050505'
                            textColor='#FFFFFF'
                            mode='contained'
                            onPress={handleSignup}
                        >Signup</Button>
                    </View>
                </View>
        </>
    )
}

export default SignupComp

const styles = StyleSheet.create({
    Page: {
        flex:1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    Form: {
        gap: 10,
        width: '80%',
        justifyContent: 'center',
    }
})