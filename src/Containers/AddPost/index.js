import ImagePicker from 'react-native-customized-image-picker';
import React, { useEffect} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Post from '@/Store/ImagePost/Post';

import  AsyncStorage  from '@react-native-async-storage/async-storage';
import {
    View,
    Button,
  } from 'react-native';
let nameU;
const AddPost = () =>
{
    useEffect(()=>{
        async function Uname(){
            nameU = await AsyncStorage.getItem('user_name')
        }
        Uname()
    },[])
    const dispatch = useDispatch()
    const options = {}
    const imageHandler = () => {
    ImagePicker.openPicker({options}).then( image => {
   // console.log((image))
    const name = image[0].path.split('/')
    // console.log(name[name.length-1])
    alert(JSON.stringify(image))

    const formData = new FormData();
    const file = {
        uri:image[0].path,
        type:image[0].mime,
        name:name[name.length-1]
    }
    const ImageData ={
        id:Math.random(),
        post:name[name.length-1],
        comments:[]
    }
    alert(JSON.stringify(file))
    formData.append('image', file);

    axios.post("http://10.0.2.2/react/imageposting/src/fileupload.php",formData,{
        headers: {
        'content-type': 'multipart/form-data',
        },
        }).then(
            dispatch(Post.action({type:'ADD_POST',data:ImageData,user_name:nameU}))
        )

    })
    }

    return(
        <View style={{
            width:200,
            alignSelf:'center',
            marginTop:20
        }}>
            <Button title='open a file' onPress={imageHandler}/>
        </View>
    )
}

export default AddPost;
