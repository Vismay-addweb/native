import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import login_api from '../Example/api'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import FetchOne from '@/Store/User/FetchOne'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import  LoginRegister  from '@/Store/Authentication/LoginRegister';
import INPUT from '../InputText';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Login = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const loginState = useSelector(state => state.loginregister.isLogin)
  const dispatch = useDispatch()
  const [update,setUpdate] = useState(false)
  const [userInfo, setUserInfo] = useState({
    user_name:'',
    password:''
  })
  const handler = (val,name) =>
  {
    setUserInfo({...userInfo,[name]:val})
    }
  const LoginFun = async () =>{
    console.info(JSON.stringify(userInfo))
    dispatch(LoginRegister.action({type:'LOGIN',data:userInfo}))
    setUpdate(!update)
       await AsyncStorage.setItem('user_name',userInfo.user_name)
     



    // login_api.get(`/data?user_name=${userInfo.user_name}`).then((res)=>
    // {
    //     if(res.data.length>0)
    //     {
    //    let pass = res.data[0].password
    //         if(pass === userInfo.password)
    //           {
    //             alert("Login success")
    //            dispatch(LoginRegister.action({type:'LOGIN',data:userInfo}))
    //             AsyncStorage.setItem('user_name',userInfo.user_name)
    //           // navigation.navigate('count')
    //           }

    //         else
    //         alert("Wrong password")
    //     }
    //     else
    //     alert("User not found")
   // })
    setUserInfo({password:'',user_name:''})
  }

  return (
      
    <View style={{backgroundColor:"white",height:"100%",alignItems:"center"}}>
    <Text style={{fontSize:50,color:"black",marginBottom:20}}>Login</Text>
     <INPUT
     
      changeText={val => handler(val,'user_name')}
       place="username"
       val={userInfo.user_name}
     />
  
    
     <INPUT
   
       changeText={val => handler(val,'password')}       
       place="password"
       type={true}
       val={userInfo.password}
     />



      <TouchableOpacity
        style={[Common.button.rounded, Gutters.regularBMargin]}
        onPress={LoginFun}
      >
        <Text style={Fonts.textRegular}>Login</Text>
      </TouchableOpacity>
      </View>
  )
}

export default Login
