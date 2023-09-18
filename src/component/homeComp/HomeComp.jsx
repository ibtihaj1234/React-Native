import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FAB, Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Entypo'
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions'


const HomeComp = () => {

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
          <View style={{ alignItems: 'center', height:responsiveHeight(10)}}>
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
                    fontSize: responsiveFontSize(1.2),
                    textAlign: 'center',
                    padding: responsiveWidth(2)
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
    padding: responsiveHeight(4),
    margin: responsiveWidth(1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
})

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
    action: () => navigation.navigate('Profile')
  },
  {
    id: 4,
    name: 'Profile',
    action: () => navigation.navigate('Profile')
  },
  {
    id: 5,
    name: 'Profile',
    action: () => navigation.navigate('Profile')
  },
  {
    id: 6,
    name: 'Profile',
    action: () => navigation.navigate('Profile')
  },
  {
    id: 7,
    name: 'Profile',
    action: () => navigation.navigate('Profile')
  },
  {
    id: 8,
    name: 'Profile',
    action: () => navigation.navigate('Profile')
  },
  {
    id: 9,
    name: 'Profile',
    action: () => navigation.navigate('Profile')
  },
]