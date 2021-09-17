import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  View,
  Text,
  Image,
  Button,
  Alert
} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons'
import Comment from './Feeds/Comment';
import Posts from './Feeds/Post';
import style from './Feeds/style';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Post from '@/Store/ImagePost/Post';
import PostDetails from './Feeds/PostDetails';
const Card = (props) => {
  const dispatch = useDispatch()
  // const imageUrl = 'http://10.0.2.2/imageposting/src/images/'
  const [user_name, setU] = useState('')
  AsyncStorage.getItem('user_name').then(rs => setU(rs))
  const data = props.data
  const [pid,setPID]= useState({data:[]})
  // let pid={data:[]}
  const delPost = (uid,pid) =>{

    Alert.alert('Delete', 'Are You sure you want to delete this.', [
      {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
      },
      {
      text: 'OK',
      onPress: () => {
        try{
          dispatch(Post.action({type:'DEL_POST',user_id:uid,post_id:pid}))
        }
        catch(e){
          alert(e)
        }
      },
      },
      ])
 
  }
  const postDetail = (post,user_name,DP) =>
  {
    const data = {
      data:[{
      user_name:user_name,
      DP:DP,
      posts:[post]
    }]}
    setPID(data)
      // pid=data
  }
  return (
    <>
    {pid.data.length  ? <PostDetails id={pid.data} /> :
(    <>
  
      {data?.map((data,i) => (
        <View style={style.feed}>
          {data.posts.map((posts,j) => (
            <View style={style.photo}>
              <View style={style.photo__header}>
       
                <View style={style.photo__header_column}>
                <Image 
                  source={{uri:data.DP}}
                  style={{width:40,height:40,marginLeft:-50,borderRadius:100,position:'absolute'}}
                />
                 <Text style={{ fontWeight: 'bold' }}>
                {data.user_name}{' '}</Text>
                <Button title='view post' onPress={()=>postDetail(posts,data.user_name,data.DP)} />
                </View>
                <View>
                  {user_name === data.user_name && <FontAwesome5.Button style={{margin:0,padding:0,backgroundColor:'white'}} name='delete' onPress={()=>delPost(data.id,posts.id)} color='red' size={30} />}
                </View>
              </View>
              <View style={style.photo__file_container}  >
                
                <Posts url={posts.post} />
              </View>
              <View style={style.photo__info}>
                
                <Comment data={posts.comments} post={posts.post} user={data.user_name} user_id={data.id} post_id={posts.id} />
              
                 
              </View>
                
            </View>
          ))}
        </View>
      ))}
    </>)
          }
          </>
  )
}

export default Card
