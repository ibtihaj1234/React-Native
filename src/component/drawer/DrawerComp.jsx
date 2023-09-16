import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Drawer } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'


const DrawerComp = ({ navigation }) => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#9932D8',
        paddingTop: 20,
        alignItems: 'space-evenly',
      }}>

      <Drawer.Section style={styles.Section1}>

        <Avatar.Icon
          size={70}
          icon={require('../../assets/Avatar.png')}
          style={{
            alignSelf: 'center',
            margin: 30,
            backgroundColor: '#FFF'
          }} />

      </Drawer.Section>

      {list.map(elem => (
        <Drawer.Item
          key={elem.id}
          icon={({ size }) => {
            return (
              <Icon
                name={elem.icon}
                size={size}
                color={"#FFF"} />
            )
          }}
          label={elem.label}
          onPress={() => navigation.navigate(elem.onPress)} />
      ))}

    </View>
  )
}

export default DrawerComp

const styles = StyleSheet.create({
  Section1: {
    width: '100%',
    flexDirection: 'column',
  }
})

// Array
let list = [
  {
    id: 1,
    label: 'Home',
    icon: "home",
    onPress: 'Home'
  },
  {
    id: 2,
    label: 'Login',
    icon: "login",
    onPress: 'Login'
  },
  {
    id: 3,
    label: 'Transport',
    icon: "emoji-transportation",
    onPress: 'Login'
  },
  {
    id: 4,
    label: 'Schedule',
    icon: "schedule",
    onPress: 'Schedule'
  },
]