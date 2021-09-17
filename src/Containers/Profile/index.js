import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, Image, View, StyleSheet, Modal, Button } from 'react-native'

import LoginRegister from '@/Store/Authentication/LoginRegister'
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TabNav from './TabNav'
import TabNavFollow from './TabNavFollow'
const Profile = () => {
  const user_info = useSelector(state => state.imagepost.data)
  const [user_name, setU] = useState('')
  const [isView, setView] = useState(false)
  const dispatch = useDispatch()
  AsyncStorage.getItem('user_name').then(rs => {
    setU(rs)
  })

  const logged_user = user_info.filter(data => data.user_name === user_name)

  let followers = useSelector(state => state.follow.follower)
  followers = followers.filter(data => data.user_name === user_name)
  let following = useSelector(state => state.follow.following)
  following = following.filter(data => data.user_name === user_name)
  const Logout = async () => {
    dispatch(LoginRegister.action({ type: 'LOGOUT' }))
    await AsyncStorage.removeItem('user_name')
  }

  const followViewOn = () => {
    setView(!isView)
  }

  return (
    <>
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: 30,
          marginBottom: 10,
          marginLeft: 60,
        }}
      >
        {logged_user[0]?.user_name}{' '}
      </Text>
      <View style={styles.logout}>
        <Icon.Button name="logout" onPress={Logout} backgroundColor="crimson">
          Logout
        </Icon.Button>
      </View>

      <Text
        style={{ alignSelf: 'center', marginLeft: 100, fontSize: 20 }}
        onPress={followViewOn}
      >
        {'   '}
        {followers[0]?.followers ? followers[0]?.followers?.length : 0}
        {'          '}
        {following[0]?.following ? following[0]?.following?.length : 0}
      </Text>

      <Text
        style={{ alignSelf: 'center', marginLeft: 120, fontWeight: 'bold' }}
      >
        Follwers Following
      </Text>
      {isView && (
          
                <TabNavFollow followers={followers} following={following} isView={isView} followViewOn={followViewOn} />

          
      )}
      <Image
        source={{
          uri: logged_user[0]?.DP,
        }}
        style={{
          height: 100,
          width: 100,
          marginLeft: 30,
          marginTop: 30,
          position: 'absolute',
          zIndex: 1,
          marginBottom: 40,
          alignSelf: 'flex-start',
          borderRadius: 200,
          overflow: 'hidden',
        }}
      />

      <TabNav userData={logged_user} />
    </>
  )
}

const styles = StyleSheet.create({
  logout: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    marginHorizontal: '1%',
    position: 'absolute',
    marginTop: 20,
    marginLeft: 280,
    maxWidth: '48%',
    textAlign: 'center',
  },

  centeredView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 300,
    height: 400,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 0,
    padding: 10,
    elevation: 2,
  },  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})

export default Profile
