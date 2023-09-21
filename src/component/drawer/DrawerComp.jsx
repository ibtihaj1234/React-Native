import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import {
  Avatar,
  Drawer
} from 'react-native-paper'
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../constants/colors/Colors'


const DrawerComp = ({ navigation }) => {
  return (
    <View
      style={{
        height: responsiveHeight(100),
        backgroundColor: Colors.purple,
        paddingTop: responsiveHeight(5),
        alignItems: 'space-evenly',
      }}>

      <Drawer.Section style={styles.Section1}>

        <Avatar.Icon
          size={responsiveWidth(25)}
          icon={require('../../assets/Avatar.png')}
          style={{
            alignSelf: 'center',
            margin: responsiveWidth(5),
            backgroundColor: Colors.white
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
                color={Colors.white} />
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
    width: responsiveWidth(70),
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