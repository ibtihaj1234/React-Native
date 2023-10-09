import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  Avatar,
  Drawer
} from 'react-native-paper'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../constants/colors/Colors'
import En from '../../constants/lang/En'


const DrawerComp = ({ navigation }) => {
  return (
    <View
      style={{
        height: responsiveHeight(100),
        backgroundColor: Colors.THEME_PURPLE,
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
            backgroundColor: Colors.LIGHT_THEME
          }} />

      </Drawer.Section>

      {list.map(elem => (
        <Drawer.Item style={{ justifyContent: 'center', }}
          key={elem.id}
          icon={() => {
            return (
              <Icon
                name={elem.icon}
                size={responsiveWidth(4)}
                color={Colors.LIGHT_THEME} />
            )
          }}
          label={<Text
            style={{
              color: Colors.LIGHT_THEME,
              fontSize: responsiveFontSize(2)
            }}
          >{elem.label}</Text>}
          onPress={() => navigation.navigate(elem.onPress)} />
      ))}

    </View>
  )
}

export default DrawerComp

const styles = StyleSheet.create({
  Section1: {
    flexDirection: 'column',
  }
})

// Array
let list = [
  {
    id: 1,
    label: En.HOME,
    icon: "home",
    onPress: 'Home'
  },
  {
    id: 2,
    label: En.LOGIN,
    icon: "login",
    onPress: 'Login'
  },
  {
    id: 3,
    label: En.TRANSPORT,
    icon: "emoji-transportation",
    onPress: 'Login'
  },
  {
    id: 4,
    label: En.SCHEDULE,
    icon: "schedule",
    onPress: 'Schedule'
  },
]