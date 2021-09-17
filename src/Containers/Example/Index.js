import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import login_api from './api'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import FetchOne from '@/Store/User/FetchOne'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import  LoginRegister  from '@/Store/Authentication/LoginRegister';
import INPUT from '../InputText';
const Register = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const [userInfo, setUserInfo] = useState({
    id:Math.random(),
    user_name:'',
    password:''
  })
  const [cpass,setConfirmPass] = useState('')

  const handler = (val,name) =>
  {
    setUserInfo({...userInfo,[name]:val})
  }

  const confirmPassword = e =>
  {
    setConfirmPass(e)
  }
  const Login = () =>{
    console.warn(JSON.stringify(userInfo))
    // alert(JSON.stringify(userInfo))
    login_api.get(`/data?user_name=${userInfo.user_name}`).then((res)=>{
      if(res.data.length===0)
      {
        if(cpass !== userInfo.password)
        {
          alert("password doesn't match")
          return
        }
        //login_api.post('/data',userInfo).then((res)=>alert(res.status))
        dispatch(LoginRegister.action({type:'REGISTER',data:userInfo}))
      }
      else{
        alert("user already exists")
      }
    })
    setUserInfo({user_name:'',password:''})
    setConfirmPass('')
  }

  return (
      
     <View style={{alignItems:"center",height:"100%",backgroundColor:"white"}}>
       <RefreshControl

            colors={["yellow","blue"]}
          />
       <Text style={{fontSize:50,color:"black"}}>Register</Text>

        <INPUT
          changeText={val => handler(val,'user_name')}
          place="username"
          val={userInfo.user_name}
        />

       
        <INPUT
          changeText={val => handler(val,'password')}
          val={userInfo.password}
          place="password"
        />
       <INPUT
          changeText={confirmPassword}
          val={cpass}
          place="confirm password"
        />


      <TouchableOpacity
        style={[Common.button.rounded, Gutters.regularBMargin]}
        onPress={Login}
      >
        <Text style={Fonts.textRegular}>Register</Text>
      </TouchableOpacity>
      </View>
  )
}

export default Register
