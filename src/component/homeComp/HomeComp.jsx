import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FAB, Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/Octicons'
import { responsiveWidth, responsiveHeight, responsiveFontSize, responsiveScreenFontSize } from 'react-native-responsive-dimensions'


const HomeComp = () => {

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
  const navigation = useNavigation()

  const routes = useRoute()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF'
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
                backgroundColor: '#FFF',
              }}
            />
            <Image
              style={{
                height: responsiveHeight(10),
                width: responsiveWidth(30),
                tintColor: '#FFF'
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
                backgroundColor: '#FFF'
              }}
            />
          </View>
          <View style={{ alignItems: 'center', height: responsiveHeight(10) }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'cursive',
                fontSize: responsiveFontSize(2),
              }}>
              Welcome Back {routes.params?.userName}
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
          {cards.map((elem) => {
            return (
              <Card
                key={elem.index}
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
    backgroundColor: '#9932D8',
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
    // padding: responsiveHeight(2),
    margin: responsiveWidth(1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
})
