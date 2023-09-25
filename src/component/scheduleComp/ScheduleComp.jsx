import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Header from '../header/Header'
import { DataTable } from 'react-native-paper'

const ScheduleComp = () => {

  const navigation = useNavigation()

  const sub = [
    {
      day: 'Mon',
      first: 'Eng',
      second: 'Urdu',
      third: 'Maths',
      fourth: 'Science',
      fifth: 'SSt',
    },
    {
      day: 'Tue',
      first: 'Drawing',
      second: 'sindhi',
      third: 'history',
      fourth: 'computer',
      fifth: 'SSt',
    },
  ]

  return (
    <View>

      {/* Header */}

      <Header
        title={'Schedule'}
        icon={
          <Icon
            name='arrow-back-ios'
            size={responsiveHeight(4)}
            style={{
              height: responsiveHeight(4),
              color: '#FFF'
            }}
            onPress={() => navigation.goBack()}
          />
        }
      />

      {/* Table */}

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: responsiveWidth(4),
          width: responsiveWidth(100),
          justifyContent: 'space-evenly'
        }}>
        <DataTable.Row>
          <DataTable.Title style={styles.tableItem} >Classes</DataTable.Title>
          <DataTable.Cell style={styles.tableItem}>1</DataTable.Cell>
          <DataTable.Cell style={styles.tableItem}>2</DataTable.Cell>
          <DataTable.Cell style={styles.tableItem}>3</DataTable.Cell>
          <DataTable.Cell style={styles.tableItem}>4</DataTable.Cell>
          <DataTable.Cell style={styles.tableItem}>5</DataTable.Cell>
        </DataTable.Row>

        {sub.map((elem, index) => {
          return (
            <DataTable.Row style={{ marginTop: responsiveWidth(0.2), marginLeft: responsiveWidth(0.2) }} key={index}>
              <DataTable.Cell style={styles.tableItem}>{elem.day}</DataTable.Cell>
              <DataTable.Cell style={styles.tableItem}>{elem.first}</DataTable.Cell>
              <DataTable.Cell style={styles.tableItem} >{elem.second}</DataTable.Cell>
              <DataTable.Cell style={styles.tableItem} >{elem.third}</DataTable.Cell>
              <DataTable.Cell style={styles.tableItem} >{elem.fourth}</DataTable.Cell>
              <DataTable.Cell style={styles.tableItem} >{elem.fifth}</DataTable.Cell>
            </DataTable.Row>
          )
        })}

      </ScrollView>

    </View>
  )
}

export default ScheduleComp

const styles = StyleSheet.create({
  tableItem: {
    borderWidth: responsiveWidth(0.2),
    paddingLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    elevation: 4
  },
})