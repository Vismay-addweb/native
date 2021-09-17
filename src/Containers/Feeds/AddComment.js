import React, { useState } from 'react'
import INPUT from '../InputText'
import style from './style'
import { View, TextInput, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Post from '@/Store/ImagePost/Post'
import Notification from '@/Store/Notification/Notification'

import { useDispatch } from 'react-redux'

const AddComment = props => {
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()

  const changeText = e => {
    setComment(e)
  }
  const addComnt = async () => {
    const user_name = await AsyncStorage.getItem('user_name')
    const data = {
      user_id: props.user_id,
      post_id: props.post_id,
    }
    const comment_data = {
      id: Math.random(),
      user_name: user_name,
      comment: comment,
      reply: [],
    }
    const notify_data = {
      poster: user_name,
      notification: user_name + 'commented on your post',
      status: 0,
      user_name: props.post_owner,
      post: props.post,
    }
    setComment('')
    // alert(JSON.stringify(notify_data))

    try {
      dispatch(
        Post.action({
          type: 'ADD_COMMENT',
          data: data,
          comment_data: comment_data,
        }),
      )
      dispatch(
        Notification.action({ type: 'ADD_NOTIFICATION', data: notify_data }),
      )
    } catch (e) {
      alert(e)
    }
    //alert("last")
    // props.added()
  }
  return (
    <>
      <TextInput
        placeholder="add comment...."
        onChangeText={changeText}
        value={comment}
        style={
          (style.photo__add_comment,
          {
            color: 'black',
            borderBottomColor: 'black',
            marginBottom: 10,
            borderBottomWidth: 1,
            width: '60%',
          })
        }
      />
      <Button onPress={addComnt} title="add comment" />
      {/* <Icon.Button  name='send-circle-outline'  >post Add_Comment</Icon.Button></Button> */}
    </>
  )
}

export default AddComment
