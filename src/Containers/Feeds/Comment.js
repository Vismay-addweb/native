import React, { useState } from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import Reply from './reply'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import style from './style'
import AddComment from './AddComment'
import AddReply from './AddReply'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Post from '@/Store/ImagePost/Post'

import { useDispatch } from 'react-redux'

const Comment = props => {
  const dispatch = useDispatch()
  const [replyIsOn, setReplyIsOn] = useState(false)
  const [user, setUser] = useState('')
  AsyncStorage.getItem('user_name').then(rs => setUser(rs))

  const delComment = (i, j, k) => {
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
            data_id: k,
            user_id: i,
            post_id: j,
          }
          dispatch(Post.action({ type: 'DEL_COMMENT', data: data }))
        },
      },
    ])
  }
  const changeReplyStatus = () => {
    setReplyIsOn(!replyIsOn)
  }

  return (
    <>
      <View style={style.photo__comments}>
        <FlatList
          data={props.data}
          renderItem={({ item, index }) => (
            <View>
              <Text key={index}>
                <Text style={style.photo__comment_author}>
                  {item.user_name}
                </Text>
                <Text style={style.photo__comment}> {item.comment}</Text>
                {user === item.user_name && (
                  <Icon.Button
                    style={{ margin: 0, padding: 0, backgroundColor: 'white' }}
                    color="red"
                    onPress={() =>
                      delComment(props.user_id, props.post_id, item.id)
                    }
                    name="delete-alert"
                    size={30}
                  />
                )}
                <Icon.Button
                  style={{ margin: 0, padding: 0, backgroundColor: 'white' }}
                  color="green"
                  name="reply"
                  size={30}
                  onPress={changeReplyStatus}
                />
              </Text>
              {replyIsOn && (
                <AddReply
                  user_id={props.user_id}
                  post_id={props.post_id}
                  replyStatus={changeReplyStatus}
                  comment_id={item.id}
                />
              )}

              <Reply
                data={item.reply}
                user_id={props.user_id}
                post_id={props.post_id}
                comment_id={item.id}
              />
            </View>
          )}
        />
      </View>
      <AddComment
        post={props.post}
        user_id={props.user_id}
        post_id={props.post_id}
        post_owner={props.user}
      />
    </>
  )
}

export default Comment
