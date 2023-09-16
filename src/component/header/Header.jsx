import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text
                style={{
                    fontSize: 28,
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