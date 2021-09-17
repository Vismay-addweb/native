import React,{useState} from 'react';
import INPUT from '../InputText';
import style from './style'
import { View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import Post from '@/Store/ImagePost/Post';

import { useDispatch } from 'react-redux';
const AddReply = (props) =>
{
    const [reply,setReply] = useState('')
    const dispatch = useDispatch()
    const replied = (e) =>
    {
        setReply(e)
    }
    const submitReply = async() =>
    {
        const user_name =  await AsyncStorage.getItem('user_name')
        const data =
        {
            user_id : props.user_id,
            post_id : props.post_id,
            comment_id: props.comment_id
        }
        const reply_data = {
            id:Math.random(),
            user_name:user_name,
            reply:reply
        }
       try{ dispatch(Post.action({type:'ADD_REPLY',data:data,reply_data:reply_data}))}
       catch(e){alert(e)}
       props.replyStatus()
    }
    return(
        <>
          <TextInput 
            placeholder="add comment...."
            onChangeText={replied}
            value={reply}
            style={style.photo__add_comment,{color:"black",borderBottomColor:"red",marginBottom:10,borderBottomWidth:1,width:"60%"}}
        />
        <Button onPress={submitReply} title='reply' />
        </>
    )
}

export default AddReply;