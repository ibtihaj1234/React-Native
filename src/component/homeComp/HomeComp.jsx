import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FAB, Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Entypo'


const HomeComp = () => {


  const navigation = useNavigation()

  const routes = useRoute()

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.Back}>

        {/* Head */}

        <View>
          <View style={styles.Head}>
            <FAB icon={'menu'}
              onPress={() => navigation.openDrawer()}
            />
            <Image
              style={{
                height: '100%',
                width: '30%',
                tintColor: '#FFF'
              }}
              source={require('../../assets/Logo.png')} />
            <FAB
              icon={'logout'}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
          <View style={{ alignItems: 'center', }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'cursive',
                fontSize: 24
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
            width: '90%', height: '100%',
            alignSelf: 'center',
            zIndex: 1000
          }}>
          {cards.map((elem) => {
            return (
              <Card
                key={elem.index}
                style={styles.card}
                onPress={elem.action}>
                {elem.icon}
                <Text
                  alignSelf={'center'}
                  padding={5}
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
    height: '40%',
    zIndex: 999,
  },
  Head: {
    height: '65%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },
  card: {
    width: "30%",
    height: "50%",
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const cards = [
  {
    id: 1,
    icon:
      <Icon1
        name='user'
        size={50}
        color={'#9932D8'}
        alignSelf={'center'} />,
    name: 'Profile',
    action: () => navigation.navigate('Profile')
  },
  {
    id: 2,
    icon:
      <Icon
        name='bookmark-added'
        size={50}
        color={'#9932D8'}
        alignSelf={'center'} />,
    name: 'Attendance',
    action: () => navigation.navigate('Profile')
  },
  {
    id: 3,
    icon:
      <Icon
        name='schedule'
        size={50}
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