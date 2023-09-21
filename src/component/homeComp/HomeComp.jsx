import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import {
  useNavigation,
  useRoute
} from '@react-navigation/native'
import {
  FAB,
  Card
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/Octicons'
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenFontSize
} from 'react-native-responsive-dimensions'
import En from '../../constants/lang/En'
import Colors from '../../constants/colors/Colors'


const HomeComp = () => {

  // Cards Array

  const cards = [
    {
      id: 1,
      icon:
        <Icon1
          name='user'
          size={responsiveWidth(10)}
          color={'#9932D8'}
          alignSelf={'center'}
        />,
      name: 'Profile',
      action: () => navigation.navigate('Profile')
    },
    {
      id: 2,
      icon:
        <Icon
          name='bookmark-added'
          size={responsiveWidth(10)}
          color={'#9932D8'}
          alignSelf={'center'}
        />,
      name: 'Attendance',
      action: () => navigation.navigate('Profile')
    },
    {
      id: 3,
      icon:
        <Icon
          name='schedule'
          size={responsiveWidth(10)}
          color={'#9932D8'}
          alignSelf={'center'} />,
      name: 'Schedule',
      action: () => navigation.navigate('Schedule')
    },
    {
      id: 4,
      icon:
        <Icon2
          name='graduation-cap'
          size={responsiveWidth(10)}
          color={'#9932D8'}
          alignSelf={'center'}
        />,
      name: 'Curriculum',
      action: () => navigation.navigate('Profile')
    },
    {
      id: 5,
      icon:
        <Icon3
          name='bell-ring'
          size={responsiveWidth(10)}
          color={'#9932D8'}
          alignSelf={'center'}
        />,
      name: 'Announcement',
      action: () => navigation.navigate('Profile')
    },
    {
      id: 6,
      icon:
        <Icon2
          name='dollar-sign'
          size={responsiveWidth(10)}
          color={'#9932D8'}
          alignSelf={'center'}
        />,
      name: 'Fees',
      action: () => navigation.navigate('Profile')
    },
    {
      id: 7,
      icon:
        <Icon3
          name='calendar-month'
          size={responsiveWidth(10)}
          color={'#9932D8'}
          alignSelf={'center'}
        />,
      name: 'Calendar',
      action: () => navigation.navigate('Profile')
    },
    {
      id: 8,
      icon:
        <Icon
          name='library-books'
          size={responsiveWidth(10)}
          color={'#9932D8'}
          alignSelf={'center'}
        />,
      name: 'Digital Library',
      action: () => navigation.navigate('Profile')
    },
    {
      id: 9,
      icon:
        <Icon4
          name='graph'
          size={responsiveWidth(10)}
          color={'#9932D8'}
          alignSelf={'center'}
        />,
      name: 'Progress',
      action: () => navigation.navigate('Profile')
    },
  ]

  // Hooks

  const navigation = useNavigation()

  const routes = useRoute()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white
      }}>
      <View style={styles.Back}>

        {/* Head */}

        <View>
          <View style={styles.Head}>
            <FAB icon={'menu'}
              onPress={() => navigation.openDrawer()}
              style={{
                marginRight: responsiveWidth(10),
                height: responsiveHeight(8),
                width: responsiveWidth(12),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.white,
              }}
            />
            <Image
              style={{
                height: responsiveHeight(10),
                width: responsiveWidth(30),
                tintColor: Colors.white
              }}
              source={require('../../assets/Logo.png')} />
            <FAB
              icon={'logout'}
              onPress={() => navigation.navigate('Login')}
              style={{
                marginLeft: responsiveWidth(10),
                height: responsiveHeight(8),
                width: responsiveWidth(12),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.white
              }}
            />
          </View>

          {/* Welcoming*/}

          <View
            style={{
              alignItems: 'center',
              height: responsiveHeight(10)
            }}>
            <Text
              style={{
                color: Colors.white,
                fontFamily: 'cursive',
                fontSize: responsiveFontSize(2),
              }}>
              {En.WB} {routes.params?.userName}
            </Text>
          </View>
        </View>

        {/* Cards */}

        <View
          style={{
            position: 'relative',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: "row",
            alignItems: 'center',
            width: responsiveWidth(90),
            height: responsiveHeight(40),
            alignSelf: 'center',
            zIndex: 1000
          }}>
          {cards.map((elem, index) => {
            return (
              <Card
                key={index}
                style={styles.card}
                onPress={elem.action}
              >
                {elem.icon}
                <Text
                  style={{
                    fontSize: responsiveScreenFontSize(1.6),
                    textAlign: 'center',
                    padding: responsiveWidth(1)
                  }}
                >{elem.name}</Text>
              </Card>)
          })}
        </View>
      </View>
    </View>
  )
}
export default HomeComp
const styles = StyleSheet.create({
  Back: {
    backgroundColor: Colors.purple,
    height: responsiveHeight(40),
    zIndex: 999,
  },
  Head: {
    height: responsiveHeight(20),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingTop: responsiveHeight(2),
  },
  card: {
    width: responsiveWidth(28),
    height: responsiveHeight(20),
    margin: responsiveWidth(1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
})
