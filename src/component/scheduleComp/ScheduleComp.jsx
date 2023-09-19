import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Header from '../header/Header'
import { DataTable } from 'react-native-paper'

const ScheduleComp = () => {

  const navigation = useNavigation()

  const sub = [
    {
      num: 1,
      first: 'Eng',
      second: 'Urdu',
      third: 'Maths',
      fourth: 'Science',
      fifth: 'SSt',
    },
    {
      num: 2,
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

      <View style={{ marginTop: responsiveWidth(4), width: responsiveWidth(100), justifyContent: 'space-evenly' }}>
        <DataTable.Row>
          <DataTable.Title style={styles.tableItem} >Classes</DataTable.Title>
          <DataTable.Cell style={styles.tableItem}>Mon</DataTable.Cell>
          <DataTable.Cell style={styles.tableItem}>Tue</DataTable.Cell>
          <DataTable.Cell style={styles.tableItem}>Wed</DataTable.Cell>
          <DataTable.Cell style={styles.tableItem}>Thur</DataTable.Cell>
          <DataTable.Cell style={styles.tableItem}>Fri</DataTable.Cell>
        </DataTable.Row>

        {sub.map((elem, index) => {
          return (
            <DataTable.Row key={elem.index}>
              <DataTable.Cell style={styles.tableItem}>{elem.num}</DataTable.Cell>
              <DataTable.Cell style={styles.tableItem}>{elem.first}</DataTable.Cell>
              <DataTable.Cell style={styles.tableItem} >{elem.second}</DataTable.Cell>
              <DataTable.Cell style={styles.tableItem} >{elem.third}</DataTable.Cell>
              <DataTable.Cell style={styles.tableItem} >{elem.fourth}</DataTable.Cell>
              <DataTable.Cell style={styles.tableItem} >{elem.fifth}</DataTable.Cell>
            </DataTable.Row>
          )
        })}

      </View>

    </View>
  )
}

export default ScheduleComp

const styles = StyleSheet.create({
  tableItem: {
    borderWidth: responsiveWidth(0.2),
    padding: responsiveWidth(2),
  }
})