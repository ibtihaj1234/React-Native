import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'


const Header = ({ title, icon }) => {

    return (
        <View style={styles.header}>
            <View>
                {icon}
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