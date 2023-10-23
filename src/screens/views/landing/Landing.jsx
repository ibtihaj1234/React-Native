import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'

const Landing = () => {

    const navigation = useNavigation()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image
                style={styles.Img}
                source={require('../../../assets/Logo.png')} />
        </View>
    )
}

export default Landing

const styles = StyleSheet.create({
    Img: {
        width: responsiveWidth(90),
        height: responsiveHeight(60),
        alignSelf: 'center',
    }
})