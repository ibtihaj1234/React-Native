import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/MaterialIcons'



const Header = ({ title }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <View>
                <Icon
                    name='arrow-back-ios'
                    size={responsiveHeight(4)}
                    style={{
                        height: responsiveHeight(4),
                        color: '#FFF'
                    }}
                    onPress={() => navigation.goBack()}
                />

            </View>
            <Text
                style={{
                    fontSize: responsiveFontSize(4),
                    color: '#FFFFFF',
                    flex: 1,
                    textAlign: 'center',
                }}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#9932D8',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
    }
})