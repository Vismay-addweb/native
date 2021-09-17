import { View, FlatList, Text, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import style from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Post from '@/Store/ImagePost/Post'
import { useDispatch } from 'react-redux'

const Reply = props => {
  const [user, setUser] = useState('')
  const dispatch = useDispatch()
  const getuser = async () => {
    const user_name = await AsyncStorage.getItem('user_name')
    setUser(user_name)
  }
  useEffect(() => {
    getuser()
  }, [])
  const delReply = (i, j, k, l) => {
    Alert.alert('Delete', 'Are You sure you want to delete this.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          const data = {
            user_id: i,
            post_id: j,
            comment_id: k,
            id: l,
          }
          dispatch(Post.action({ type: 'DEL_REPLY', data: data }))
        },
      },
    ])
  }
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <>
            <Text style={style.photo__reply}>
              <Text style={style.photo__comment_author}>{item.user_name}</Text>
              <Text>
                <Text>{item.reply}</Text>
                {user === item.user_name && (
                  <Icon.Button
                    style={{ margin: 0, padding: 0, backgroundColor: 'white' }}
                    color="red"
                    onPress={() =>
                      delReply(
                        props.user_id,
                        props.post_id,
                        props.comment_id,
                        item.id,
                      )
                    }
                    name="delete-alert"
                    size={30}
                  />
                )}
              </Text>
            </Text>
          </>
        )}
      />
    </View>
  )
}

export default Reply
