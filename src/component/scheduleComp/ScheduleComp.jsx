import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Header from '../header/Header'
import En from '../../constants/lang/En'
import Colors from '../../constants/colors/Colors'
import ClassTable from './ClassTable'
import ExamTable from './ExamTable'

const ScheduleComp = () => {

  const [classPage, setClassPage] = useState(true)

  return (
    <View>

      {/* Header */}

      <Header
        title={'Schedule'}
      />

      {/* Buttons */}

      <View
        style={{
          margin: responsiveWidth(1),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          elevation: 8,
        }}
      >

        {/* Class_Button */}

        <TouchableOpacity
          style={[styles.button,
          classPage ? styles.selectedStyle : null
          ]}
          onPress={() => setClassPage(true)}
        >
          <Text
            style={[
              fontSize = responsiveFontSize(2),
              classPage ? { color: Colors.LIGHT_THEME } : null
            ]}
          >{En.CLASS}</Text>
        </TouchableOpacity>

        {/* Exam_Button */}

        <TouchableOpacity
          style={[styles.button,
          !classPage ? styles.selectedStyle : null
          ]}
          onPress={() => setClassPage(false)}
        >
          <Text
            style={[
              fontSize = responsiveFontSize(2),
              !classPage ? { color: Colors.LIGHT_THEME } : null
            ]}
          >{En.EXAM}</Text>
        </TouchableOpacity>
      </View>

      {/* Table */}

      {classPage ? <ClassTable /> : <ExamTable />}

    </View>
  )
}

export default ScheduleComp

const styles = StyleSheet.create({
  button: {
    width: responsiveWidth(45),
    height: responsiveHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_THEME,
    elevation: 10,
    borderRadius: responsiveWidth(2)
  },
  selectedStyle: {
    backgroundColor: Colors.THEME_PURPLE,
    color: Colors.LIGHT_THEME,
  }
})