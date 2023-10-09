import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { DataTable } from 'react-native-paper'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'

const ClassTable = () => {

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
                    <DataTable.Row
                        style={{
                            marginTop: responsiveWidth(0.2),
                            marginLeft: responsiveWidth(0.2)
                        }}
                        key={index}>
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
    )
}

export default ClassTable

const styles = StyleSheet.create({
    tableItem: {
        borderWidth: responsiveWidth(0.2),
        paddingLeft: responsiveWidth(2),
        fontSize: responsiveFontSize(2),
        elevation: 4
    },
})