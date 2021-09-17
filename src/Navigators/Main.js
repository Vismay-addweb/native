import React,{ useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Register } from '@/Containers'
import { Counter } from '@/Containers'
import { Feeds } from '@/Containers'
import { Profile} from '@/Containers'
import { AddPost } from '@/Containers'
import { SearchUser } from '@/Containers'
import {Notification} from '@/Containers'
import { createDrawerNavigator } from '@react-navigation/drawer'
import 'react-native-gesture-handler'
import { Login } from '@/Containers'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoginRegister from '@/Store/Authentication/LoginRegister'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomSidebarMenu from './customNavigator';
import Ionic from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator()

export default function MainNavigator() {

  const dispatch = useDispatch()
  useEffect(()=>{
    async function get() {
    const ress = await AsyncStorage.getItem('user_name')
     if (ress !== null){
       dispatch(LoginRegister.action({ type: 'ALREADY_LOGGED' }))
     }
   }
   get()
  },[])
  const loggedUser = useSelector(state => state.loginregister.isLogin)

  return (
    
    <Drawer.Navigator initialRouteName="feed" independent={true} drawerContent={(props) => <CustomSidebarMenu {...props} />} >
      {loggedUser !== false ? (
        <>
       
          <Drawer.Screen
            name="feed"
            component={Feeds}
            options={{ drawerLabel: 'Feed' ,drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size} />
            ),}}
          />
             <Drawer.Screen
            icon="home"
            name="count"
            component={Counter}
            options={{
              drawerLabel: 'Counter',
              drawerIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="counter" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen 
            name='profile'
            component={Profile}
            options={{
              drawerLabel:'Profile',
              drawerIcon:({color,size}) =>(
                <MaterialCommunityIcons name='account' color={color} size={size} />
              )
            }}
          />
           <Drawer.Screen 
            name='search'
            component={SearchUser}
            options={{
              drawerLabel:'Search User',
              drawerIcon:({color,size}) =>(
                <MaterialCommunityIcons name='account-search-outline' color={color} size={size} />
              )
            }}
          />
          <Drawer.Screen 
            name='addpost'
            component={AddPost}
            options={{
              drawerLabel:'Add Post',
              drawerIcon:({ color,size })=>(
                <Ionic name='add-circle-outline' color={color} size={size} />
              )
            }}
          />
           <Drawer.Screen 
            name='notification'
            component={Notification}
            options={{
              drawerLabel:'Notification',
              drawerIcon:({ color,size })=>(
                <Ionic name='notifications' color={color} size={size} />
              )
            }}
          />
         
        </>
      ) : (
        <>
          <Drawer.Screen
            name="login"
            component={Login}
            options={{ drawerLabel: 'Login', drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ), }}
          />

          <Drawer.Screen
            name="register"
            component={Register}
            options={{ drawerLabel: 'Register', drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-plus" color={color} size={size} />
            ), }}
          />
        </>
      )}
    </Drawer.Navigator>
  )
}
