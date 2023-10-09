import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScheduleComp from '../../../component/scheduleComp/ScheduleComp'
import Colors from '../../../constants/colors/Colors'

const Schedule = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.LIGHT_THEME }}>
            <ScheduleComp />
        </View>
    )
}

export default Schedule

const styles = StyleSheet.create({})